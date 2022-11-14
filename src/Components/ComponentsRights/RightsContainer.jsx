import React from 'react';
import RightsTop from "./RightsTop";
import RightsSwitcher from "./RightsSwitcher";

const RightsContainer = ({onCoinsChange, onCoins, dataItems, switcherRights, onSwitcherRightsChange, timer, setTimeToFly, isAirdropEnd}) => {



    return (
        <section className="section-right">
            <RightsTop
                switcherRights={switcherRights}
            />
            <RightsSwitcher
                onCoinsChange={onCoinsChange}
                onCoins={onCoins}
                dataItems={dataItems}
                switcherRights={switcherRights}
                onSwitcherRightsChange={onSwitcherRightsChange}

                timer={timer}
                setTimeToFly={setTimeToFly}
                isAirdropEnd={isAirdropEnd}
            />
        </section>
    );
};

export default RightsContainer;