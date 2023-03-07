import React from 'react';
import RightsTop from "./RightsTop";
import RightsSwitcher from "./RightsSwitcher";

const RightsContainer = () => {

    return (
        <section className="section-right">
            <RightsTop/>
            <RightsSwitcher/>
        </section>
    );
};

export default RightsContainer;