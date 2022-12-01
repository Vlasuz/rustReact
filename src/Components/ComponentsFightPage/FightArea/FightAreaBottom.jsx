import React from 'react';
import SelectFightOnButtonMousemove from "../../../Hooks/SelectFightOnButtonMousemove";
import SelectFightOnButtonMouseout from "../../../Hooks/SelectFightOnButtonMouseout";
import SelectFightOnButtonClick from "../../../Hooks/SelectFightOnButtonClick";

const FightAreaBottom = () => {

    return (
        <div className="section-fight__bottom">
            <div className="bottom__info">
                <p>Выберите 2 области защиты</p>
            </div>
            <ul className="section-fight__select">
                <li>
                    <button
                        data-persone="head"
                        onMouseMove={e => SelectFightOnButtonMousemove(e)}
                        onMouseOut={e => SelectFightOnButtonMouseout(e)}
                        onClick={e => SelectFightOnButtonClick(e)}
                    >
                        <span>Голова</span>
                        <img src="images/green-check.svg" alt="Ico"/>
                    </button>
                </li>
                <li>
                    <button
                        data-persone="body"
                        onMouseMove={e => SelectFightOnButtonMousemove(e)}
                        onMouseOut={e => SelectFightOnButtonMouseout(e)}
                        onClick={e => SelectFightOnButtonClick(e)}
                    >
                        <span>Торс</span>
                        <img src="images/green-check.svg" alt="Ico"/>
                    </button>
                </li>
                <li>
                    <button
                        data-persone="legs"
                        onMouseMove={e => SelectFightOnButtonMousemove(e)}
                        onMouseOut={e => SelectFightOnButtonMouseout(e)}
                        onClick={e => SelectFightOnButtonClick(e)}
                    >
                        <span>Ноги</span>
                        <img src="images/green-check.svg" alt="Ico"/>
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default FightAreaBottom;