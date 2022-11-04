import React from 'react';

const FightItemUser = (props) => {
    return (
        <div className={props.youWon ? "item__user" : "item__user item__user_looser"}>
            <div className="user__photo">
                <img src={props.image} alt="Photo"/>
            </div>
            <div className="user__name">
                {props.name}
            </div>
        </div>
    );
};

export default FightItemUser;