import React from 'react';
import Link from 'next/link';


const Header = ({ openModal }) => {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__logo">
                    <img src="/images/LOGO_UJUZAI_HD.png" alt="UjuzAi Logo" />
                </div>
                <nav className="header__nav">
                    <ul className="header__nav-list">
                        <li className="header__nav-item"><Link href="pages/talents" className="header__nav-link">Talents</Link></li>
                        <li className="header__nav-item"><Link href="#" className="header__nav-link">Recruteur</Link></li>
                        <li className="header__nav-item"><Link href="#" className="header__nav-link">Contact</Link></li>
                    </ul>
                </nav>
                <div className="header__actions">
                    <button className="header__button header__button--inscription">Inscription</button>
                    <button className="header__button header__button--connexion" onClick={openModal}>Connexion</button>
                </div>
            </div>
        </header>
    );
};

export default Header;