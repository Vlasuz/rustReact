import React, {useState} from "react";

const States = () => {

    const timeSecondForFights = 10;
    let newcomer = true;
    const [fightsYourArmor, setFightsYourArmor] = useState([false, false, false])
    const [arrayForHit, setArrayForHit] = useState([false, false, false]);
    const [isPlaneShow, setIsPlaneShow] = useState(true);
    const [sumCoinsInShop, setSumCoinsInShop] = useState(0);
    const [trajectoryPlane, setTrajectoryPlane] = useState(0);
    const [lengthPlaneFly, setLengthPlaneFly] = useState(0);
    const [airdropStep, setAirdropStep] = useState(1)
    const [seconds, setSeconds] = useState(60);
    const [milliseconds, setMilliseconds] = useState(99);
    const [isDropDown, setIsDropDown] = useState(false);
    const [isTrajectoryActive, setIsTrajectoryActive] = useState(false);
    const [sleeperCost, setSleeperCost] = useState(0);
    const [sleepersCount, setSleepersCount] = useState(0)
    const [showTimerToFly, setShowTimerToFly] = useState(false)
    const [auth, setAuth] = useState(true);
    const [coins, setCoins] = useState(0);
    const [switcherRights, setSwitcherRights] = useState('pr')
    const [tradeLink, setTradeLink] = useState('')
    const [numSwitch, setNumSwitch] = useState(1);
    const [processorArrayElements, setProcessorArrayElements] = useState([])
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
    const [sumOfPererab, setSumOfPererab] = useState(0)
    const [dataItems, setDataItems] = useState([
        {
            id: 1,
            isCheck: false,
            title: "Yellow Racer Pants",
            rarity: 1,
            image: 'images/skins/skin1.png',
            count: 1,
            cost: 2450
        },
        {
            id: 2,
            isCheck: false,
            title: "Excavator Door",
            rarity: 2,
            image: 'images/skins/skin2.png',
            count: 1,
            cost: 4050
        },
        {
            id: 3,
            isCheck: false,
            title: "Glory AK47",
            rarity: 3,
            image: 'images/skins/skin3.png',
            count: 1,
            cost: 4050
        },
        {
            id: 4,
            isCheck: false,
            title: "Alien Relic SMG",
            rarity: 3,
            image: 'images/skins/skin4.png',
            count: 1,
            cost: 8009
        },
        {
            id: 5,
            isCheck: false,
            title: "Grandmother's Gift Barricade",
            rarity: 2,
            image: 'images/skins/skin5.png',
            count: 1,
            cost: 1450
        },
        {
            id: 6,
            isCheck: false,
            title: "Santa Balaclava",
            rarity: 1,
            image: 'images/skins/skin6.png',
            count: 1,
            cost: 540
        },
        {
            id: 7,
            isCheck: false,
            title: "Raven",
            rarity: 3,
            image: 'images/skins/skin7.png',
            count: 1,
            cost: 8990
        },
        {
            id: 8,
            isCheck: false,
            title: "Train Conductor Miner's Hat",
            rarity: 1,
            image: 'images/skins/skin8.png',
            count: 1,
            cost: 1450
        },
        {
            id: 9,
            isCheck: false,
            title: "Urban Ice Jacket",
            rarity: 1,
            image: 'images/skins/skin9.png',
            count: 1,
            cost: 4372
        },
        {
            id: 10,
            isCheck: false,
            title: "Combat Knife from Hell",
            rarity: 3,
            image: 'images/skins/skin10.png',
            count: 1,
            cost: 12989
        },
    ])
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
            count: 2,
            greenStats: "21",
        },
        {
            title: "Бобовка",
            count: 0,
            greenStats: "",
        },
        {
            title: "Ипподром",
            count: 0,
            greenStats: "",
        }
    ]


    const [randomTimerToDrop, setRandomTimerToDrop] = useState(0)
    const [timerOfSeconds, setTimerOfSeconds] = useState(59)
    const [timerOfMillisecond, setTimerOfMillisecond] = useState(99)
    const [isTimerGoOn, setIsTimerGoOn] = useState(true)

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
        setDataItems,
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
        milliseconds,
        setMilliseconds,
        isDropDown,
        setIsDropDown,
        isTrajectoryActive,
        setIsTrajectoryActive,
        sleeperCost,
        setSleeperCost,
        sleepersCount,
        setSleepersCount,
        sumCoinsInShop,
        setSumCoinsInShop,

        timerOfSeconds,
        setTimerOfSeconds,
        timerOfMillisecond,
        setTimerOfMillisecond,
        isTimerGoOn,
        setIsTimerGoOn,
        randomTimerToDrop,
        setRandomTimerToDrop,

        processorArrayElements,
        setProcessorArrayElements,

        isPlaneShow,
        setIsPlaneShow,

        sumOfPererab,
        setSumOfPererab,

        timeSecondForFights,

        fightsYourArmor,
        setFightsYourArmor,

        airdropStep,
        setAirdropStep,
    }

};

export default States;