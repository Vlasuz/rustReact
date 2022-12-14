import React from 'react';
import SelectFightOnBody from "../../../Hooks/SelectFightOnBody";

const FightAreaPersone = () => {

    SelectFightOnBody()

    return (
        <div className="section-fight__persone">
            <div className="persone__green">
                <img className="head" src="images/head.png" alt="Photo" width="72"/>
                <img className="body" src="images/body.png" alt="Photo" width="300"/>
                <img className="legs" src="images/legs.png" alt="Photo" width="300"/>
            </div>
            <div className="persone__start">
                <img src="images/persone-nnn.png" alt="Persone"/>
            </div>
        </div>
    );
};

export default FightAreaPersone;