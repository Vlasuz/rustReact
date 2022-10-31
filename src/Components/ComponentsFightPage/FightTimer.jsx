import React from 'react';
import {Link} from "react-router-dom";
import Timer from "../Timer";

const FightTimer = () => {
    return (
        <div className="section-fight__center">
            <div className="center__running">
                <Link className={"link-to-hit"} to={'/fight-finish'}/>
                <span>Начало</span>
                <Timer
                    parent={".center__running"}
                    time={10}
                    func={e => document.querySelector('.link-to-hit').click()}
                />
            </div>
        </div>
    );
};

export default FightTimer;