import React from 'react';
import AsidePlane from "./AsidePlane";
import AsideFight from "./AsideFight";
import AsideCenter from "./AsideCenter";

const Aside = (props) => {

    return (
        <aside className="aside">

            <AsidePlane
                to={"/airdrop"}
                onSwitcherRightsChange={props.onSwitcherRightsChange}
                setListAirdropsMembers={props.setListAirdropsMembers}
                setNumSwitch={props.setNumSwitch}
                setShowTimerToFly={props.setShowTimerToFly}
            />
            <AsideFight
                to={"/fight"}
            />

            <AsideCenter
                switcherRights={props.switcherRights}
                onSwitcherRightsChange={props.onSwitcherRightsChange}
            />

        </aside>
    );
};

export default Aside;