import React from 'react';
import AsidePlane from "./AsidePlane";
import AsideFight from "./AsideFight";
import AsideCenter from "./AsideCenter";

const Aside = (props) => {

    return (
        <aside className="aside">

            <AsidePlane
                to={"/airdrop"}
                states={props.states}
            />
            <AsideFight
                to={"/fight"}
            />

            <AsideCenter states={props.states}/>

        </aside>
    );
};

export default Aside;