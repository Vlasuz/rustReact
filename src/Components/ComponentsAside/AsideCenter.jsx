import React from 'react';
import AsideMenu from "./AsideMenu";
import AsideAuthor from "./AsideAuthor";

const AsideCenter = (props) => {
    return (
        <div className="aside__center">
            <AsideMenu states={props.states}/>
            <AsideAuthor />
        </div>
    );
};

export default AsideCenter;