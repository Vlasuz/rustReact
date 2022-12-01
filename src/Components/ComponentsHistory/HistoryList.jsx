import React, {useEffect, useState} from 'react';
import HistoryItem from "./HistoryItem";

const HistoryList = (props) => {

    const [historyList, setHistoryList] = useState([
        {
            id: 1,
            whichTransaction: "section-history__pull",
            whichType: "switcher-type__pin-codes",
            datePublic: {
                time: '18:14:00',
                date: '2021.08.15',
            },
            images: [],
            pin_code: "$5",
            cost: 3000,
            status: 'sended'
        },
        {
            id: 2,
            whichTransaction: "section-history__push",
            whichType: "switcher-type__items",
            datePublic: {
                time: '18:02:00',
                date: '2021.08.12',
            },
            images: [
                {
                    url: 'images/skin.png',
                    title: 'Cucumber Eoka',
                    price: '$32.18',
                    rarity: 1
                },
                {
                    url: 'images/skin.png',
                    title: 'Cucumber Eoka',
                    price: '$32.18',
                    rarity: 3
                }
            ],
            pin_code: "$5",
            cost: 123,
            status: 'activated'
        },
        {
            id: 3,
            whichTransaction: "section-history__push",
            whichType: "switcher-type__items",
            datePublic: {
                time: '18:45:00',
                date: '2021.08.13',
            },
            images: [
                {
                    url: 'images/skin.png',
                    title: 'Cucumber Eoka',
                    price: '$32.18',
                    rarity: 1
                },
                {
                    url: 'images/skin.png',
                    title: 'Cucumber Eoka',
                    price: '$32.18',
                    rarity: 3
                }
            ],
            pin_code: "$5",
            cost: 123123,
            status: 'cancel'
        },
        {
            id: 4,
            whichTransaction: "section-history__pull",
            whichType: "switcher-type__items",
            datePublic: {
                time: '08:29:00',
                date: '2021.11.03',
            },
            images: [
                {
                    url: 'images/skin.png',
                    title: 'Hello world',
                    price: '$32.18',
                    rarity: 1
                },
                {
                    url: 'images/skin.png',
                    title: 'Cucumber Eoka',
                    price: '$2.18',
                    rarity: 3
                },
                {
                    url: 'images/skin.png',
                    title: 'Cucumber Eoka',
                    price: '$2.18',
                    rarity: 2
                },
                {
                    url: 'images/skin.png',
                    title: 'Cucumber Eoka',
                    price: '$2.18',
                    rarity: 2
                },
                {
                    url: 'images/skin.png',
                    title: 'Cucumber Eoka',
                    price: '$2.18',
                    rarity: 1
                },
                {
                    url: 'images/skin.png',
                    title: 'Cucumber Eoka',
                    price: '$2.18',
                    rarity: 2
                }
            ],
            pin_code: "$5",
            cost: 123123,
            status: 'activated'
        },
        {
            id: 5,
            whichTransaction: "section-history__pull",
            whichType: "switcher-type__pin-codes",
            datePublic: {
                time: '09:38:00',
                date: '2022.11.07',
            },
            images: [],
            pin_code: "$10",
            cost: 123123,
            status: 'in process'
        },
    ])

    return (
        <div className="section-history__block">


            {
                historyList
                    ?.filter(item => item.whichTransaction !== props.changeHistoryList.switcher_which?.slice(0, props.changeHistoryList.switcher_which?.indexOf(' ')))
                    ?.filter(item => props.changeHistoryList.switcher_type ? item.whichType === props.changeHistoryList.switcher_type : item)
                    ?.sort((a, b) =>
                        props.changeHistoryList.switcher_sort === "date"
                            ?
                            new Date(b.datePublic.date + ', ' + b.datePublic.time) -
                            new Date(a.datePublic.date + ', ' + a.datePublic.time)
                            :
                            b.cost - a.cost
                    )
                    .map((item, itemNum) =>
                        <HistoryItem
                            key={itemNum}
                            states={item}
                            historyList={historyList}
                            setHistoryList={setHistoryList}
                        />
                    )
            }


        </div>
    );
};

export default HistoryList;