import React from 'react';

const Info = () => {
    return (
        <section className="info">
            <div className="info__container">
                <div className="info__card">
                    <h3 className="info__card-title">IA ÉTHIQUE</h3>
                    <div className="info__card-count">+500</div>
                    <p className="info__card-description">talents connectés chaque mois</p>
                </div>
                <div className="info__card">
                    <h3 className="info__card-title">INCLUSION PROFESSIONNELLE</h3>
                    <div className="info__card-count">100</div>
                    <p className="info__card-description">+ entreprises partenaires</p>
                </div>
                <div className="info__card">
                    <h3 className="info__card-title">RÉVÉLATION DES TALENTS INVISIBLES</h3>
                    <div className="info__card-count">5</div>
                    <p className="info__card-description">pays couverts</p>
                </div>
            </div>
        </section>
    );
};

export default Info;