import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLang } from '../../i18n/LanguageContext';
import Icon from '../../components/Icon/Icon';
import Window from '../../components/Window/Window';
import { PromptSign, Typed } from '../../components/Term/Term';
import './not_found.css';

function NotFound() {
  const { t } = useLang();
  const { pathname } = useLocation();
  const [typed, setTyped] = useState(false);

  return (
    <div className="nf container">
      <motion.h1
        className="nf__code"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
        data-text="404"
      >
        404
      </motion.h1>

      <motion.div
        className="nf__term"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Window active title="alexandre@portfolio — bash" meta="exit 1">
          <span className="nf__body">
            <span className="nf__line">
              <PromptSign path="~" />{' '}
              <Typed text={`cd ${pathname}`} delay={500} speed={45} onDone={() => setTyped(true)} />
            </span>
            {typed && (
              <motion.span className="nf__out" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <span className="c-red">bash: cd: {pathname}: {t('notFound.error')}</span>
                <span className="nf__title">{t('notFound.title')}</span>
                <span className="c-muted">{t('notFound.text')}</span>
                <span className="nf__line">
                  <PromptSign path="~" /> <span className="cursor" />
                </span>
              </motion.span>
            )}
          </span>
        </Window>

        <Link to="/" className="btn btn--primary nf__btn">
          <Icon name="arrowLeft" />
          cd ~
        </Link>
      </motion.div>
    </div>
  );
}

export default NotFound;
