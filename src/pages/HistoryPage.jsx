import React from 'react';
import {useEffect, useState} from "react";
import HistoryItem from "../Components/ComponentsHistory/HistoryItem";
import Loader from "../Hooks/Loader";
import HistoryTop from "../Components/ComponentsHistory/HistoryTop";
import HistoryCenter from "../Components/ComponentsHistory/HistoryCenter";
import HistoryList from "../Components/ComponentsHistory/HistoryList";

const HistoryPage = () => {
    Loader();


    useEffect(() => {
        if (document.querySelectorAll('.section-history__item')[0]) {
            document.querySelectorAll('.section-history__item').forEach(list => {
                for (let i = 0; i <= list.querySelectorAll('li').length; i++) {

                    let a = i - 3

                    if (i >= 3 && list.querySelectorAll('li')[i]) {

                        list.querySelectorAll('li')[i].style.display = 'none';

                        list.querySelector('.count')?.classList.add('count_active')
                        list.querySelector('.count').innerHTML = "+" + a

                    }

                }
            })
        }
    })


    return (
        <section className="section-history">
            <HistoryTop />
            <HistoryCenter />
            <HistoryList />
        </section>
    );
};

export default HistoryPage;