import React from 'react';
import {Link} from "react-router-dom";

const FightItemUser = (props) => {
    return (
        <Link to={"/person"} className={props.youWon ? "item__user" : "item__user item__user_looser"}>
            <div className="user__photo">
                <img src={props.image} alt="Photo"/>
            </div>
            <div className="user__name">
                {props.name}
            </div>
        </Link>
    );
};

export default FightItemUser;