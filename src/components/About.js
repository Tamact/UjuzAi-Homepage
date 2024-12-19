import React from 'react';

const About = () => {
    return (
        <section className="about">
            <div className="about__container">
               <h2 className="about__title">"Qu'est-ce qu'UjuzAi ?"</h2>
                <div className="about__content">
                    <p className="about__description">
                     <span className="about__description--highlight">UjuzAi</span> utilise des technologies avancées pour connecter talents
                       cachés et opportunités professionnelles, en valorisant équité et innovation.
                    </p>
                     <div className="about__image">
                         <img src="/images/3.PNG" alt="Des personnes travaillant"/>
                    </div>
                </div>
             </div>
        </section>
    );
};

export default About;