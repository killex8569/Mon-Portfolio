import './Footer.css';

const Footer = () => (
    <footer class="footer-footer">
        <div class="footer-container">
            <div class="footer-row">
                <div class="footer-col">
                    <h4 className="footer-h4">Plan du site</h4>
                    <ul className="footer-ul">
                        <li><a target="_blank" href="/">Accueil</a></li>
                        <li><a target="_blank" href="/competences">Nos compétences</a></li>
                        <li><a target="_blank" href="/parcours">Notre parcours</a></li>
                        <li><a target="_blank" href="/about">A propos</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4 className="footer-h4">Ce site est open-source</h4>
                    <ul className="footer-ul">
                        <li><a target="_blank" href="https://github.com/killex8569/jeveuxunstageouunealternance">Lien GitHub</a></li>
                        <li><a target="_blank" href="https://react.dev/">React</a></li>
                        <li><a target="_blank" href="https://nodejs.org/en">Node.js</a></li>
                        <li><a target="_blank" href="https://vercel.com">Vercel</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4 className="footer-h4">Notre Ecole</h4>
                    <ul className="footer-ul">
                        <li><a target="_blank" href="https://www.cpe.fr/">CPE Lyon</a></li>
                        <li><a target="_blank" href="https://www.leschartreux.com/">Institution des Chartreux</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4 className="footer-h4">Nous contacter</h4>
                    <ul className="footer-ul">
                        <li><a target="_blank" href="mailto:alexandre.faublanette@gmail.com">alexandre.faublanette@gmail.com</a></li>
                        <li><a target="_blank" href="mailto:valentin.ryckaert@protonmail.com">valentin.ryckaert@protonmail.com</a></li>
                        <li><a target="_blank" href="https://portefolio-y32w.vercel.app/">Portfolio Valentin Ryckaert</a></li>
                        <li><a target="_blank" href="https://portfolio.killex.xyz">Portfolio Alexandre FA</a></li>
                    </ul>
                    <div class="social-links"> 
                    
                        <a target="_blank" href="https://www.linkedin.com/in/valentin-ryckaert-29b3052a2/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                            </svg>
                            <span>Valentin</span>
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/alexandre-faubladier-anette-750967277">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                            </svg>
                            <span>Alexandre</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;