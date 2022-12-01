import React from 'react';
import {useEffect, useState} from "react";
import HistoryItem from "../Components/ComponentsHistory/HistoryItem";
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


    // useEffect(() => {
    //     if (document.querySelectorAll('.section-history__item')[0]) {
    //         document.querySelectorAll('.section-history__item').forEach(list => {
    //             for (let i = 0; i <= list.querySelectorAll('li').length; i++) {
    //
    //                 let a = i - 3
    //
    //                 if (i >= 3 && list.querySelectorAll('li')[i]) {
    //
    //                     list.querySelectorAll('li')[i].style.display = 'none';
    //
    //                     list.querySelector('.count')?.classList.add('count_active')
    //                     list.querySelector('.count').innerHTML = "+" + a
    //
    //                 }
    //
    //             }
    //         })
    //     }
    // })


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