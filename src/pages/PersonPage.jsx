import React from 'react';
import UserStats from "../Components/ComponentsMainPage/UserStats";
import Table from "../Components/ComponentsMainPage/Table";
import {Trans, useTranslation} from "react-i18next";

const PersonPage = (props) => {

    const {t} = useTranslation();
    return (
        <section className="section-blocks">

            <div className={"section-block section-block-information section-block-newcomer"}>

                <div className="top-gamer">
                    <div className="top-gamer__vertical">
                <span>
                    <Trans t={t}>weekly_gamer</Trans>
                </span>
                    </div>
                    <div className="top-gamer__info">
                        <div className="info__photo">
                            <img src="images/user2.jpeg" alt="Photo"/>
                        </div>
                        <div className="info__block">
                            <h2 className="info__name">Рафаэль Миркович</h2>
                            <a className="info__profile" href="#">
                                <img src="images/steam.svg" alt="Steam"/>
                                <span>
                            <Trans t={t}>text_profile</Trans>
                        </span>
                            </a>
                        </div>
                    </div>
                </div>

                <UserStats/>

            </div>
            <Table />
        </section>
    );
};

export default PersonPage;