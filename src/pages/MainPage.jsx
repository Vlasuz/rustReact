import React from 'react';
import TopGamer from "../Components/ComponentsMainPage/TopGamer";
import Balance from "../Components/ComponentsMainPage/Balance";
import Stats from "../Components/ComponentsMainPage/Stats";
import Table from "../Components/ComponentsMainPage/Table";

const MainPage = ({dataInfo, tradeLink, setTradeLink}) => {

    let newcomer = false;

    let newcomerClass = newcomer ?
        'section-block section-block-information section-block-newcomer' :
        'section-block section-block-information';

    return (
        <section className="section-blocks">
            <div className={newcomerClass}>

                <TopGamer
                    tradeLink={tradeLink}
                    setTradeLink={setTradeLink}
                />
                <Balance dataInfo={dataInfo} />
                <Stats title={"Аирдроп"} stats={true} />
                <Stats title={"Схватка"} stats={false} />
                <Stats title={"Бобовка"} stats={true} />
                <Stats title={"Иподром"} stats={true} />

            </div>
            <Table />
        </section>
    );
};

export default MainPage;