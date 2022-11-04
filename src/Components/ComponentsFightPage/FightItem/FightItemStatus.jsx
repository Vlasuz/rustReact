import React from 'react';

const FightItemStatus = (props) => {

    let status = props.status == "waiting" ? "item__user item__user_load" : "item__user";
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
            <div className="user__name">
                {props.opponentName}
            </div>
            <div className="user__photo">
                <img src={props.opponentPhoto} alt="Photo"/>
            </div>
        </div>
    );
};

export default FightItemStatus;