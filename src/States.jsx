import React from 'react';
import {useState} from "react";

const States = () => {

    let newcomer = false;
    const [trajectoryPlane, setTrajectoryPlane] = useState(0)
    const [lengthPlaneFly, setLengthPlaneFly] = useState(0)
    const [seconds, setSeconds] = useState(60);
    const [isDropDown, setIsDropDown] = useState(false);
    const [isTrajectoryActive, setIsTrajectoryActive] = useState(false);

    const [showTimerToFly, setShowTimerToFly] = useState(false)
    const [auth, setAuth] = useState(true);
    const [coins, setCoins] = useState(0);
    const [switcherRights, setSwitcherRights] = useState('pr')
    const [tradeLink, setTradeLink] = useState('')
    const [arrayForHit, setArrayForHit] = useState([]);
    const [numSwitch, setNumSwitch] = useState(1)
    const listFightsMembers = [
        {
            id: 1,
            onSetCoins: setCoins,
            mainCoins: coins,
            typePrice: "clothes",
            image: "images/user.jpeg",
            name: "Amnesianna5360",
            bid: "130",
            opponentName: "Victorius",
            opponentPhoto: "images/user.jpeg",
            status: 'waiting',
            youWon: null
        },
        {
            id: 2,
            onSetCoins: setCoins,
            mainCoins: coins,
            typePrice: "coins",
            image: "images/user.jpeg",
            name: "Amnesianna5360",
            bid: "130",
            opponentName: "Victorius",
            opponentPhoto: "images/user.jpeg",
            status: 'waiting',
            youWon: null
        },
        {
            id: 3,
            onSetCoins: setCoins,
            mainCoins: coins,
            typePrice: "coins",
            image: "images/user.jpeg",
            name: "Amna5360",
            bid: "560",
            opponentName: "VictoriusGood",
            opponentPhoto: "images/user.jpeg",
            status: 'waiting',
            youWon: null
        }
    ]
    const [fightInfo, setFightInfo] = useState([
        {
            onSetCoins: setCoins,
            mainCoins: coins,
            typePrice: "",
            image: "",
            name: "",
            bid: "",
            opponentName: "",
            opponentPhoto: "",
            youWon: null
        },
    ])
    const dataItems = [
        {
            id: 1,
            title: "Yellow Racer Pants",
            rarity: 2,
            rating: 'green',
            image: 'images/skins/skin1.png',
            count: 1,
            cost: 2450
        },
        {
            id: 2,
            title: "Excavator Door",
            rarity: 3,
            rating: 'blue',
            image: 'images/skins/skin2.png',
            count: 1,
            cost: 4050
        },
        {
            id: 3,
            title: "Glory AK47",
            rarity: 4,
            rating: 'red',
            image: 'images/skins/skin3.png',
            count: 1,
            cost: 4050
        },
        {
            id: 4,
            title: "Alien Relic SMG",
            rarity: 4,
            rating: 'red',
            image: 'images/skins/skin4.png',
            count: 1,
            cost: 8009
        },
        {
            id: 5,
            title: "Grandmother's Gift Barricade",
            rarity: 3,
            rating: 'blue',
            image: 'images/skins/skin5.png',
            count: 1,
            cost: 1450
        },
        {
            id: 6,
            title: "Santa Balaclava",
            rarity: 2,
            rating: 'green',
            image: 'images/skins/skin6.png',
            count: 1,
            cost: 540
        },
        {
            id: 7,
            title: "Raven",
            rarity: 4,
            rating: 'red',
            image: 'images/skins/skin7.png',
            count: 1,
            cost: 8990
        },
        {
            id: 8,
            title: "Train Conductor Miner's Hat",
            rarity: 2,
            rating: 'green',
            image: 'images/skins/skin8.png',
            count: 1,
            cost: 1450
        },
        {
            id: 9,
            title: "Urban Ice Jacket",
            rarity: 2,
            rating: 'green',
            image: 'images/skins/skin9.png',
            count: 1,
            cost: 4372
        },
        {
            id: 10,
            title: "Combat Knife from Hell",
            rarity: 4,
            rating: 'red',
            image: 'images/skins/skin10.png',
            count: 1,
            cost: 12989
        },
    ]
    const dataInfo = {
        coins: coins
    }
    const [listAirdropsMembers, setListAirdropsMembers] = useState([
        {
            id: 1,
            photo: "images/user.jpeg",
            name: "Lena",
            coins: 100
        },
        {
            id: 2,
            photo: "images/user.jpeg",
            name: "Vasya",
            coins: 128
        },
        {
            id: 3,
            photo: "images/user.jpeg",
            name: "Lena",
            coins: 100
        },
        {
            id: 4,
            photo: "images/user.jpeg",
            name: "Vasya",
            coins: 128
        },
        {
            id: 5,
            photo: "images/user.jpeg",
            name: "Lena",
            coins: 100
        },
        {
            id: 6,
            photo: "images/user.jpeg",
            name: "Vasya",
            coins: 128
        },
        {
            id: 7,
            photo: "images/user.jpeg",
            name: "Lena",
            coins: 100
        },
        {
            id: 8,
            photo: "images/user.jpeg",
            name: "Vasya",
            coins: 128
        }
    ])
    const UserStatsArray = [
        {
            title: "Аирдроп",
            count: 452,
            greenStats: "34%",
        },
        {
            title: "Схватка",
            count: 0,
            greenStats: "",
        },
        {
            title: "Бобовка",
            count: 186,
            greenStats: "74 победы",
        },
        {
            title: "Иподром",
            count: 40,
            greenStats: "8 побед",
        }
    ]

    return {
        coins,
        setCoins,
        auth,
        setAuth,
        switcherRights,
        setSwitcherRights,
        tradeLink,
        setTradeLink,
        arrayForHit,
        setArrayForHit,
        numSwitch,
        setNumSwitch,
        listFightsMembers,
        fightInfo,
        setFightInfo,
        dataItems,
        dataInfo,
        listAirdropsMembers,
        setListAirdropsMembers,
        newcomer,
        UserStatsArray,
        showTimerToFly,
        setShowTimerToFly,
        trajectoryPlane,
        setTrajectoryPlane,
        lengthPlaneFly,
        setLengthPlaneFly,
        seconds,
        setSeconds,
        isDropDown,
        setIsDropDown,
        isTrajectoryActive,
        setIsTrajectoryActive,
    }

};

export default States;