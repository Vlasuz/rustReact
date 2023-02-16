import React, {useEffect} from 'react';
import {useState} from "react";
import Loader from "../Hooks/Loader";
import HistoryTop from "../Components/ComponentsHistory/HistoryTop";
import HistoryCenter from "../Components/ComponentsHistory/HistoryCenter";
import HistoryList from "../Components/ComponentsHistory/HistoryList";
import {useSelector} from "react-redux";
import {reducerAuth} from "../Redux/Reducers/reducerAuth";
import axios from "axios";
import {getCookie} from "../Hooks/GetCookies";

const HistoryPage = () => {

    const [transactions, setTransactions] = useState([])

    useEffect(() => {

        axios.defaults.headers.get['Authorization'] = `Bearer ${getCookie("access_token")}`;
        axios.get('https://rust.onefut.net/api/user/transactions/').then(res => {
            setTransactions(res.data)
            console.log(res.data)
        })

    }, [])

    const [changeHistoryList, setChangeHistoryList] = useState({
        switcher_type: "", // "pins" "items"
        switcher_which: "all", // "withdraw" "pay"
        switcher_sort: "", // date price
    })

    return (
        <section className="section-history">
            <HistoryTop
                changeHistoryList={changeHistoryList}
                setChangeHistoryList={setChangeHistoryList}
                transactions={transactions}
            />
            <HistoryCenter
                changeHistoryList={changeHistoryList}
                setChangeHistoryList={setChangeHistoryList}
            />
            <HistoryList
                changeHistoryList={changeHistoryList}
                transactions={transactions}
            />
        </section>
    );
};

export default HistoryPage;