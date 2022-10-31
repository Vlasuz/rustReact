import React from 'react';
import ComponentMap from "../Components/ComponentsMap/ComponentMap";

const AirdropPage = () => {
    return (
        <section className="section-map">
            <div className="section-map__top">
                <div className="section-map__game-is">Игра #32875002</div>
                <div className="section-map__code">
                    <img src="images/shield-map.svg" alt="Ico"/><span>E24n...84dke</span>
                </div>
            </div>
            <ComponentMap />
            <div className="notice-bottom"><span>Проигрыш</span>
                <button className="notice-bottom__close">
                    <img src="images/close.svg" alt="Close"/>
                </button>
            </div>
        </section>
    );
};

export default AirdropPage;