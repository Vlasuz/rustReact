import React, {useEffect, useState} from 'react';
import {Trans, useTranslation} from "react-i18next";
import parse from "html-react-parser";

const Translate = ({ children }) => {
    const {t} = useTranslation();
    return (
        <Trans t={t}>{children}</Trans>
    );
};

export default Translate;