import React from 'react';
import RightsTop from "./RightsTop";
import RightsSwitcher from "./RightsSwitcher";

const RightsContainer = (props) => {



    return (
        <section className="section-right">
            <RightsTop states={props.states}/>
            <RightsSwitcher states={props.states}/>
        </section>
    );
};

export default RightsContainer;