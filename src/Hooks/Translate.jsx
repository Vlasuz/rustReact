import React from 'react';
import {Trans, useTranslation} from "react-i18next";

const Translate = ({ children }) => {
    const {t} = useTranslation();
    // <Translate>search</Translate>
    return (
        <Trans t={t}>{children}</Trans>
    );
};

export default Translate;