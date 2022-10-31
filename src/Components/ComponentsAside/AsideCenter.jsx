import React from 'react';
import AsideMenu from "./AsideMenu";
import AsideAuthor from "./AsideAuthor";

const AsideCenter = ({onSwitcherRightsChange, switcherRights}) => {
    return (
        <div className="aside__center">
            <AsideMenu
                switcherRights={switcherRights}
                onSwitcherRightsChange={onSwitcherRightsChange}
            />
            <AsideAuthor />
        </div>
    );
};

export default AsideCenter;