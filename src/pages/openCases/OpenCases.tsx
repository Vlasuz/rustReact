import React, {useEffect, useState} from 'react'
import {OpenCasesStyled} from "./OpenCases.styled";
import coins from './../../assets/images/header__coins.svg'
import caseMagma from './../../assets/images/case-magma.png'
import itemIcon from './../../assets/images/weapon.png'
import spinArrow from './../../assets/images/spin-arrow.png'
import {HistoryItem} from "./components/historyItem/HistoryItem";
import {Product} from "../../components/product/Product";
import {ICrate, ICrateItem, IProduct} from "../../model";
import green_check from "../../assets/images/green-check.svg";
import coin from "../../assets/images/header__coins.svg";
import {CaseItem} from "./components/caseItem/CaseItem";
import {BattleTop} from "../../components/battleTop/BattleTop";
import axios from "axios";
import {getApiLink} from "../../functions/getApiLink";
import { useSelector } from 'react-redux';
import {CaseRollingBlock} from "./components/caseRollingBlock/CaseRollingBlock";
import {getBearer} from "../../functions/getBearer";
import {useCrateRarity} from "../../hooks/crateRarity";

interface IOpenCasesProps {

}

export const OpenCases: React.FC<IOpenCasesProps> = () => {

    const [countOfCases, setCountOfCases] = useState(1)
    const [isFastActive, setIsFastActive] = useState(false)
    const [isWonItemActive, setIsWonItemActive] = useState(false)
    const [isActiveSpin, setIsActiveSpin] = useState(false)

    const chosenCrate: ICrate = useSelector((state: any) => state.toolkit.chosenCrate)

    const {crateRarity}: any = useCrateRarity({crate: chosenCrate})

    useEffect(() => {
        if (!isActiveSpin) return;

        getBearer({type: "post"})
        axios.post(getApiLink("api/crate/open/?crate_id=" + chosenCrate.id)).then(({data}) => {
            console.log("api/crate/open", data)
        }).catch(er => console.log("api/crate/open", er))

        setTimeout(() => {
            if(isActiveSpin) {
                setIsWonItemActive(true)
            }

            setTimeout(() => {
                setIsActiveSpin(false)
                setIsWonItemActive(false)
            }, 5000)
        }, isFastActive ? 1000 : 11000)
    }, [isActiveSpin])


    return (
        <OpenCasesStyled>

            <BattleTop/>

            <div className={"center"}>
                {countOfCases === 1 && <div
                    className={"center__spin" + (isActiveSpin ? " active" : "") + (isWonItemActive ? " center__spin-won_item" : "")}>
                    <div className="spin__bgd"/>
                    <img src={spinArrow} alt="^" className="spin__arrow"/>
                    <CaseRollingBlock isActiveSpin={isActiveSpin} isFastActive={isFastActive} isWonItemActive={isWonItemActive}/>
                </div>}
                {countOfCases >= 2 && <div
                    className={"center__spin center__spin_more" + (isActiveSpin ? " active" : "") + (isWonItemActive ? " center__spin-won_item" : "")}>
                    <div className="spin__bgd"/>
                    <img src={spinArrow} alt=">" className="spin__arrow_lft"/>
                    <img src={spinArrow} alt="<" className="spin__arrow_rht"/>
                    <div className="spins">
                        {countOfCases >= 2 && <CaseRollingBlock isActiveSpin={isActiveSpin} isFastActive={isFastActive} isWonItemActive={isWonItemActive}/>}
                        {countOfCases >= 2 && <CaseRollingBlock isActiveSpin={isActiveSpin} isFastActive={isFastActive} isWonItemActive={isWonItemActive}/>}
                        {countOfCases >= 3 && <CaseRollingBlock isActiveSpin={isActiveSpin} isFastActive={isFastActive} isWonItemActive={isWonItemActive}/>}
                        {countOfCases >= 4 && <CaseRollingBlock isActiveSpin={isActiveSpin} isFastActive={isFastActive} isWonItemActive={isWonItemActive}/>}
                        {countOfCases >= 5 && <CaseRollingBlock isActiveSpin={isActiveSpin} isFastActive={isFastActive} isWonItemActive={isWonItemActive}/>}
                    </div>
                </div>}
                <div className="center__buttons">
                    <button onClick={_ => setIsActiveSpin(true)} className="center__buy">
                        <p>Купить</p>
                        <img src={coins} alt="coin"/>
                        <span>
                            {chosenCrate?.price}
                        </span>
                    </button>
                    <div className="center__count">
                        <span>Количество</span>
                        <ul>
                            <li onClick={_ => !isActiveSpin && setCountOfCases(1)}
                                className={countOfCases >= 1 ? "active" : ""}/>
                            <li onClick={_ => !isActiveSpin && setCountOfCases(2)}
                                className={countOfCases >= 2 ? "active" : ""}/>
                            <li onClick={_ => !isActiveSpin && setCountOfCases(3)}
                                className={countOfCases >= 3 ? "active" : ""}/>
                            <li onClick={_ => !isActiveSpin && setCountOfCases(4)}
                                className={countOfCases >= 4 ? "active" : ""}/>
                            <li onClick={_ => !isActiveSpin && setCountOfCases(5)}
                                className={countOfCases >= 5 ? "active" : ""}/>
                        </ul>
                    </div>

                    <button className={"center__fast" + (isFastActive ? " active" : "")} onClick={_ => !isActiveSpin && setIsFastActive(prev => !prev)}>
                        <span>Быстрый прокрут</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="31" viewBox="0 0 25 31" fill="none">
                            <path
                                d="M16.017 7.30957H10.2472C10.0279 7.30957 9.83426 7.45242 9.76951 7.66189L6.81351 17.2237C6.71407 17.5454 6.95452 17.8714 7.2912 17.8714H11.1762C11.5342 17.8714 11.7762 18.2367 11.6367 18.5663L9.9938 22.447C9.77484 22.9642 10.4436 23.3938 10.8229 22.9797L17.6187 15.5609C17.9125 15.2402 17.685 14.7232 17.25 14.7232H13.5065C13.1227 14.7232 12.882 14.3086 13.0723 13.9753L16.4512 8.05749C16.6415 7.72416 16.4008 7.30957 16.017 7.30957Z"
                                fill={isFastActive ? "#A2ABC5" : "#61667B"} stroke={isFastActive ? "#A2ABC5" : "#61667B"} strokeWidth="2"/>
                        </svg>
                    </button>
                    <button onClick={_ => setIsActiveSpin(true)} className="center__demo">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path
                                d="M14.1113 7.41255L5.67383 2.26216C5.53329 2.17309 5.37098 2.12435 5.20461 2.12125C5.03825 2.11815 4.87424 2.16081 4.73047 2.24458C4.58458 2.32462 4.46296 2.44251 4.37841 2.58583C4.29386 2.72916 4.2495 2.89263 4.25 3.05903V13.3715C4.2495 13.5379 4.29386 13.7014 4.37841 13.8447C4.46296 13.9881 4.58458 14.1059 4.73047 14.186C4.87424 14.2698 5.03825 14.3124 5.20461 14.3093C5.37098 14.3062 5.53329 14.2575 5.67383 14.1684L14.1113 9.01802C14.2496 8.93459 14.364 8.81685 14.4434 8.6762C14.5228 8.53556 14.5646 8.37679 14.5646 8.21528C14.5646 8.05377 14.5228 7.895 14.4434 7.75436C14.364 7.61372 14.2496 7.49598 14.1113 7.41255Z"
                                fill="#737994"/>
                        </svg>
                        <span>
                            Demo spin
                        </span>
                    </button>
                </div>
            </div>

            <div className="active-case">
                <h2>
                    {chosenCrate?.name}
                </h2>
                <ul>
                    <li className="case">
                        <img src={"https://api.smallstash.gg" + chosenCrate?.icon} alt=""/>
                        <span>
                            {chosenCrate?.name}
                        </span>
                        <div className="line" style={{background: crateRarity?.color}} />
                        <div className="line__shadow" style={{background: `linear-gradient(0deg, ${crateRarity?.color} 0%, transparent 100%)`}} />
                    </li>

                    {
                        chosenCrate?.items?.map((item: ICrateItem) => <CaseItem key={item.id} data={item} />)
                    }

                </ul>
            </div>

        </OpenCasesStyled>
    )
}
