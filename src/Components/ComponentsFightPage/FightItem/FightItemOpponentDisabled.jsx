import React, {useEffect} from 'react';
import FightAreaTop from "../FightArea/FightAreaTop";

const FightItemOpponentDisabled = ({ userInfo }) => {

    return (
        <div className="section-fight__rht">
            <FightAreaTop userInfo={userInfo}/>
            <div className="section-fight__persone">
                <div className="persone__start">
                    <img src="../images/persone-siluete.png" alt="Persone"/>
                </div>
            </div>
            <div className="section-fight__bottom">
                <div className="section-fight__opponent-info">Выбор защиты</div>
            </div>
        </div>
    );
};

export default FightItemOpponentDisabled;