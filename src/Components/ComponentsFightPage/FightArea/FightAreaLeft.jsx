import React from 'react';
import FightAreaUser from "./FightAreaUser";
import FightAreaBidClothes from "./FightAreaBidClothes";
import FightAreaBidCoins from "./FightAreaBidCoins";
import FightAreaBottom from "./FightAreaBottom";
import SelectFightOnBody from "../../../Hooks/SelectFightOnBody";

const FightAreaLeft = (props) => {

    return (
        <div className="section-fight__lft">
            <div className="section-fight__top">
                <FightAreaUser />
                <div className="section-fight__resources">
                    <FightAreaBidClothes />
                    <FightAreaBidCoins />
                </div>
            </div>
            <div className="section-fight__persone">
                <div className="persone__green">
                    <img className="head" src="images/head.png" alt="Photo" />
                    <img className="body" src="images/body.png" alt="Photo" />
                    <img className="legs" src="images/legs.png" alt="Photo" />
                </div>
                <div className="persone__start">
                    <img src="images/persone-nnn.png" alt="Persone"/>
                </div>
            </div>
            <FightAreaBottom states={props.states} />
        </div>
    );
};

export default FightAreaLeft;