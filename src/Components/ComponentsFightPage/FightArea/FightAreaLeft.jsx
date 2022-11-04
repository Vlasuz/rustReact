import React from 'react';
import FightAreaUser from "./FightAreaUser";
import FightAreaBidClothes from "./FightAreaBidClothes";
import FightAreaBidCoins from "./FightAreaBidCoins";
import FightAreaPersone from "./FightAreaPersone";
import FightAreaBottom from "./FightAreaBottom";

const FightAreaLeft = () => {
    return (
        <div className="section-fight__lft">
            <div className="section-fight__top">
                <FightAreaUser />
                <div className="section-fight__resources">
                    <FightAreaBidClothes />
                    <FightAreaBidCoins />
                </div>
            </div>
            <FightAreaPersone />
            <FightAreaBottom />
        </div>
    );
};

export default FightAreaLeft;