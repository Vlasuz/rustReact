import React from 'react';
import Translate from "../../Hooks/Translate";

const AsideAuthor = () => {
    return (
        <a href={'https://freelancehunt.com/freelancer/denielsonis.html'} target={'_blank'} className="aside__author">
            <img src="../images/logo-dev.svg" alt="Ico" />
            <p>Deniel Sonis<span><Translate>site_developer</Translate></span></p>
        </a>
    );
};

export default AsideAuthor;