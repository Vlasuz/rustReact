import React from 'react';
import {NavLink} from "react-router-dom";
import Translate from "../Hooks/Translate";

const NotFound = () => {
    return (
        <section className={'page-not-found'}>
            <h1>
                <Translate>this_page_not_found</Translate>
            </h1>
            <p>
                <Translate>this_page_not_found_text</Translate>
            </p>
            <NavLink to={'/'}>
                <Translate>back_to_main_page</Translate>
            </NavLink>
        </section>
    );
};

export default NotFound;