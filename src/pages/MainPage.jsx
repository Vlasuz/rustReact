import React from 'react';
import TopGamer from "../Components/ComponentsMainPage/TopGamer";
import Balance from "../Components/ComponentsMainPage/Balance";
import Table from "../Components/ComponentsMainPage/Table";
import Loader from "../Hooks/Loader";
import States from "../States";
import UserStats from "../Components/ComponentsMainPage/UserStats";

const MainPage = (props) => {
    Loader();
    const {newcomer} = States()


    let newcomerClass = newcomer ?
        'section-block section-block-information section-block-newcomer' :
        'section-block section-block-information';

    return (
        <section className="section-blocks">
            <div className={newcomerClass}>

                <TopGamer
                    tradeLink={props.tradeLink}
                    setTradeLink={props.setTradeLink}
                />

                <Balance dataInfo={props.dataInfo} />

                <UserStats/>

            </div>
            <Table />
        </section>
    );
};

export default MainPage;