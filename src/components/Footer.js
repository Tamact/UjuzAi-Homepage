import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                 <div className="footer__logo">
                     <img src="/images/LOGO_UJUZAI_fond_sombre (1).png" alt="UjuzAi Logo"/>
                </div>
                <nav className="footer__nav">
                    <ul className="footer__nav-list">
                        <li className="footer__nav-item"><Link href="#" className="footer__nav-link">ACCUEIL</Link></li>
                        <li className="footer__nav-item"><Link href="#" className="footer__nav-link">QUI SOMMES-NOUS ?</Link></li>
                        <li className="footer__nav-item"><Link href="#" className="footer__nav-link">POLITIQUES DE CONFIDENTIALITE</Link></li>
                        <li className="footer__nav-item"><Link href="#" className="footer__nav-link">CONDITIONS D'UTILISATION</Link></li>
                    </ul>
                </nav>
                 <div className="footer__actions">
                    <ul className="footer__actions-list">
                        <li className="footer__actions-item"><Link href="#" className="footer__actions-link">TALENTS</Link></li>
                        <li className="footer__actions-item"><Link href="#" className="footer__actions-link">RECRUTEURS</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
