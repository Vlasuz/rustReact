import React from 'react';
import AsidePlane from "./AsidePlane";
import AsideFight from "./AsideFight";
import AsideCenter from "./AsideCenter";
import {Router} from "react-router-dom";

const Aside = ({onSwitcherRightsChange, switcherRights, timeToFly, setTimeToFly, setIsAirdropEnd}) => {

    return (
        <aside className="aside">

            <AsidePlane
                to={"/airdrop"}
                onSwitcherRightsChange={onSwitcherRightsChange}
                timeToFly={timeToFly}
                setTimeToFly={setTimeToFly}
                setIsAirdropEnd={setIsAirdropEnd}
            />
            <AsideFight
                to={"/fight"}
            />

            <AsideCenter
                switcherRights={switcherRights}
                onSwitcherRightsChange={onSwitcherRightsChange}
            />

        </aside>
    );
};

export default Aside;