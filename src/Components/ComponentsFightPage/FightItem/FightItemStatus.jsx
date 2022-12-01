import React from 'react';
import {Link} from "react-router-dom";

const FightItemStatus = (props) => {

    let status = props.status === "waiting" ? "item__user item__user_load" : "item__user";
    let statusLooser = props.youWon ? " item__user_looser" : "";

    return (
        <div className={status + statusLooser}>
            <div className="user__load">
                <div className="load">
                    <div className="load__line">

                    </div>
                    <div className="load__line">

                    </div>
                    <div className="load__line">

                    </div>
                </div>
            </div>
            <Link to={"/person"}>
                <div className="user__name">
                    {props.opponentName}
                </div>
                <div className="user__photo">
                    <img src={props.opponentPhoto} alt="Photo"/>
                </div>
            </Link>
        </div>
    );
};

export default FightItemStatus;