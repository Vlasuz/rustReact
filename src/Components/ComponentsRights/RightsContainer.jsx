import React from 'react';
import RightsTop from "./RightsTop";
import RightsSwitcher from "./RightsSwitcher";

const RightsContainer = (props) => {



    return (
        <section className="section-right">
            <RightsTop
                switcherRights={props.switcherRights}
            />
            <RightsSwitcher
                onCoinsChange={props.onCoinsChange}
                onCoins={props.onCoins}
                dataItems={props.dataItems}
                switcherRights={props.switcherRights}
                onSwitcherRightsChange={props.onSwitcherRightsChange}

                numSwitch={props.numSwitch}
                setNumSwitch={props.setNumSwitch}
                listAirdropsMembers={props.listAirdropsMembers}
                setListAirdropsMembers={props.setListAirdropsMembers}
                showTimerToFly={props.showTimerToFly}
            />
        </section>
    );
};

export default RightsContainer;