import React from 'react';
import {useState} from "react";
import Loader from "../Hooks/Loader";
import HistoryTop from "../Components/ComponentsHistory/HistoryTop";
import HistoryCenter from "../Components/ComponentsHistory/HistoryCenter";
import HistoryList from "../Components/ComponentsHistory/HistoryList";

const HistoryPage = () => {
    Loader();

    const [changeHistoryList, setChangeHistoryList] = useState({
        switcher_type: "",
        switcher_which: "section-history__all",
        switcher_sort : "",
    })

    return (
        <section className="section-history">
            <HistoryTop
                changeHistoryList={changeHistoryList}
                setChangeHistoryList={setChangeHistoryList}
            />
            <HistoryCenter
                changeHistoryList={changeHistoryList}
                setChangeHistoryList={setChangeHistoryList}
            />
            <HistoryList
                changeHistoryList={changeHistoryList}
                setChangeHistoryList={setChangeHistoryList}
            />
        </section>
    );
};

export default HistoryPage;