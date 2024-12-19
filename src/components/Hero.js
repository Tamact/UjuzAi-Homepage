import React from 'react';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__content">
                <h1 className="hero__title">
                    Révéler les <span className="hero__title--highlight hero__title--talents">Talents</span> <br/>
                    Invisibles par <span className="hero__title--highlight hero__title--intelligence">l'Intelligence</span> <br/>
                    <span className="hero__title--highlight hero__title--artificielle">Artificielle</span>
                </h1>
                <p className="hero__description">"Connectez talents et entreprises pour un avenir inclusif."</p>
                <div className="hero__buttons">
                    <button className="hero__button hero__button--talent">Créer un compte Talent</button>
                    <button className="hero__button hero__button--recruteur">Créer un compte Recruteur</button>
                </div>
            </div>
            <div className="hero__image">
                <img src="/images/hero-image.png" alt="Illustration de talents"/>
            </div>
        </section>
    );
};

export default Hero;
