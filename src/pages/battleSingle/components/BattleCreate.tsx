import React, { useEffect, useState } from 'react'
import swordsOrange from "../../../assets/images/swordsOrange.svg";
import swordsDefault from "../../../assets/images/swordsDefault.svg";
import peopleBlue from "../../../assets/images/peopleBlue.svg";
import peopleDefault from "../../../assets/images/peopleDefault.svg";
import boxGreen from "../../../assets/images/boxGreen.svg";
import boxDefault from "../../../assets/images/boxDefault.svg";
import coin from "../../../assets/images/header__coins.svg";
import {IBattleCreate} from "../../../model";

interface IBattleCreateProps {
    setGameType: any
    gameType: IBattleCreate
}

export const BattleCreate:React.FC<IBattleCreateProps> = ({setGameType, gameType}) => {

    return (
        <div className="battle-area__create">
            <div className="option option-regular">
                <div className="option__top">
                    <div className={"img" + (gameType.type === 'regular' ? " img_active" : "")}>
                        <img src={swordsOrange} alt=""/>
                        <img src={swordsDefault} alt=""/>
                    </div>
                    <h3>Regular battle</h3>
                </div>
                <ul>
                    <li className={gameType.option === "1v1" ? "active" : ""} onClick={_ => setGameType({type: "regular", option: "1v1"})}>1v1</li>
                    <li className={gameType.option === "1v1v1" ? "active" : ""} onClick={_ => setGameType({type: "regular", option: "1v1v1"})}>1v1v1</li>
                    <li className={gameType.option === "4way" ? "active" : ""} onClick={_ => setGameType({type: "regular", option: "4way"})}>4-way</li>
                </ul>
            </div>
            <div className="option option-team">
                <div className="option__top">
                    <div className={"img" + (gameType.type === 'team' ? " img_active" : "")}>
                        <img src={peopleBlue} alt=""/>
                        <img src={peopleDefault} alt=""/>
                    </div>
                    <h3>Team battle</h3>
                </div>
                <ul>
                    <li className={gameType.option === "2v2" ? "active" : ""} onClick={_ => setGameType({type: "team", option: "2v2"})}>2v2</li>
                </ul>
            </div>
            <div className="option option-group">
                <div className="option__top">
                    <div className={"img" + (gameType.type === 'group' ? " img_active" : "")}>
                        <img src={boxGreen} alt=""/>
                        <img src={boxDefault} alt=""/>
                    </div>
                    <h3>Group battle</h3>
                </div>
                <ul>
                    <li className={gameType.option === "2p" ? "active" : ""} onClick={_ => setGameType({type: "group", option: "2p"})}>2 p</li>
                    <li className={gameType.option === "3p" ? "active" : ""} onClick={_ => setGameType({type: "group", option: "3p"})}>3 p</li>
                    <li className={gameType.option === "4p" ? "active" : ""} onClick={_ => setGameType({type: "group", option: "4p"})}>4 p</li>
                </ul>
            </div>

            <button className="create-game__button">
                <span>Начать игру</span>
                <img src={coin} alt=""/>
                <p>500</p>
            </button>
        </div>
    )
}
