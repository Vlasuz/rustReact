import React from 'react';
import {NavLink} from "react-router-dom";

const AsideFight = (props) => {

    // let isActive = this.context.router.route.location.pathname === this.props.to;
    // console.log(isActive)

    return (
        <NavLink
            to={props.to}
            className={isActive => isActive ? 'aside__fight' : 'aside__fight aside__fight_active'}
        >
            {/*aside__fight aside__fight_active*/}
            <img src="./images/fight.svg" alt="Fight" />
        </NavLink>
    );
};

export default AsideFight;