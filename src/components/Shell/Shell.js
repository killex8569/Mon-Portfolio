import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLang } from '../../i18n/LanguageContext';
import { PromptSign, Typed, useSeen } from '../Term/Term';
import { COMMANDS, complete } from './commands';
import { segsToPath } from './fs';
import './Shell.css';

let uid = 0;
const nextId = () => ++uid;

function commonPrefix(list) {
  if (!list.length) return '';
  return list.reduce((acc, s) => {
    let i = 0;
    while (i < acc.length && i < s.length && acc[i] === s[i]) i++;
    return acc.slice(0, i);
  });
}

/**
 * Terminal interactif.
 *   intro       : commandes jouées automatiquement à l'apparition (ex. ['whoami', 'neofetch'])
 *   initialCwd  : dossier de départ (segments, voir fs.js)
 *   onClose     : fourni par la modale (exit / navigation la ferment)
 *   autoFocus   : donne le focus à la saisie au montage
 */
export default function Shell({ intro = [], initialCwd = [], onClose, autoFocus = false, className = '' }) {
  const { lang, setLang, t } = useLang();
  const navigate = useNavigate();
  const rootRef = useRef(null);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);
  const seen = useSeen(rootRef);

  const [lines, setLines] = useState([]);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [hIndex, setHIndex] = useState(-1);
  const [cwd, setCwdState] = useState(initialCwd);
  const prevCwd = useRef(initialCwd);
  const [step, setStep] = useState(0); // étape de l'intro en cours
  const introDone = step >= intro.length;

  const L = useCallback((fr, en) => (lang === 'fr' ? fr : en), [lang]);

  const push = useCallback((entries) => setLines((l) => [...l, ...entries.map((e) => ({ id: nextId(), ...e }))]), []);

  const setCwd = useCallback(
    (segs) => {
      setCwdState((cur) => {
        prevCwd.current = cur;
        return segs;
      });
    },
    []
  );

  const execute = useCallback(
    (raw, { record = true } = {}) => {
      const line = raw.trim();
      push([{ type: 'cmd', path: segsToPath(cwd), text: raw }]);
      if (!line) return;
      if (record) setHistory((h) => [...h, line]);

      const [name, ...args] = line.split(/\s+/);
      const cmd = COMMANDS[name.toLowerCase()];
      if (!cmd) {
        push([{
          type: 'out',
          node: (
            <span>
              <span className="c-red">zsh: {L('commande introuvable', 'command not found')}: {name}</span>
              <span className="c-muted"> — {L('tape', 'type')} </span>
              <span className="c-amber">help</span>
            </span>
          ),
        }]);
        return;
      }

      const ctx = {
        lang,
        L,
        cwd,
        prevCwd: prevCwd.current,
        setCwd,
        setLang,
        history: record ? [...history, line] : history,
        clear: () => setLines([]),
        close: onClose,
        go: (route) => {
          navigate(route);
          if (onClose) setTimeout(onClose, 180);
        },
      };
      const out = cmd.run(args, ctx);
      if (out !== null && out !== undefined && out !== '') push([{ type: 'out', node: out }]);
    },
    [cwd, history, lang, L, navigate, onClose, push, setCwd, setLang]
  );

  /* Intro : une fois la commande tapée, on l'exécute puis on passe à la suivante */
  const onIntroTyped = useCallback(() => {
    const cmd = intro[step];
    setTimeout(() => {
      execute(cmd, { record: false });
      setStep((s) => s + 1);
    }, 220);
  }, [execute, intro, step]);

  // Défilement vers le bas à chaque nouvelle ligne (dans le terminal, pas la page)
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lines, step]);

  useEffect(() => {
    if (autoFocus && introDone) inputRef.current?.focus({ preventScroll: true });
  }, [autoFocus, introDone]);

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      execute(input);
      setInput('');
      setHIndex(-1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (!history.length) return;
      const i = hIndex < 0 ? history.length - 1 : Math.max(0, hIndex - 1);
      setHIndex(i);
      setInput(history[i]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (hIndex < 0) return;
      const i = hIndex + 1;
      if (i >= history.length) {
        setHIndex(-1);
        setInput('');
      } else {
        setHIndex(i);
        setInput(history[i]);
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const options = complete(input, cwd);
      if (options.length === 1) setInput(options[0]);
      else if (options.length > 1) {
        const prefix = commonPrefix(options);
        if (prefix.length > input.length) setInput(prefix);
        else {
          push([
            { type: 'cmd', path: segsToPath(cwd), text: input },
            { type: 'out', node: <div className="sh-ls">{options.map((o) => <span key={o}>{o.trim().split(' ').pop()}</span>)}</div> },
          ]);
        }
      }
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault();
      setLines([]);
    } else if (e.key === 'c' && e.ctrlKey && !window.getSelection()?.toString()) {
      e.preventDefault();
      push([{ type: 'cmd', path: segsToPath(cwd), text: `${input}^C` }]);
      setInput('');
    }
  };

  const focusInput = () => {
    if (!window.getSelection()?.toString()) inputRef.current?.focus({ preventScroll: true });
  };

  return (
    <div className={`shell ${className}`} ref={rootRef} onClick={focusInput}>
      <div className="shell__scroll" ref={scrollRef}>
        {lines.map((line) =>
          line.type === 'cmd' ? (
            <div key={line.id} className="shell__line">
              <PromptSign path={line.path} /> <span className="shell__cmd">{line.text}</span>
            </div>
          ) : (
            <div key={line.id} className="shell__out">{line.node}</div>
          )
        )}

        {!introDone && seen && (
          <div className="shell__line">
            <PromptSign path={segsToPath(cwd)} />{' '}
            <Typed key={step} text={intro[step]} speed={70} delay={step === 0 ? 400 : 500} cursor="always" onDone={onIntroTyped} className="shell__cmd" />
          </div>
        )}

        {introDone && (
          <>
            {intro.length > 0 && history.length === 0 && (
              <div className="shell__out shell__hint">
                {L('Ce terminal est interactif — tape', 'This terminal is interactive — type')} <span className="c-amber">help</span>
                {L(' pour commencer.', ' to get started.')}
              </div>
            )}
            <label className="shell__line shell__input-line">
              <PromptSign path={segsToPath(cwd)} />{' '}
              <span className="shell__input-wrap">
                <span className="shell__ghost" aria-hidden="true">
                  {input}
                  <span className="cursor" />
                </span>
                <input
                  ref={inputRef}
                  className="shell__input"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKeyDown}
                  spellCheck={false}
                  autoComplete="off"
                  autoCapitalize="off"
                  aria-label={t('shell.inputLabel')}
                />
              </span>
            </label>
          </>
        )}
      </div>
    </div>
  );
}
