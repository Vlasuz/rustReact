import React, {useEffect, useState} from 'react';
import {Trans, useTranslation} from "react-i18next";
import Translate from "../../Hooks/Translate";

const RightsSortable = ({setSortByGame, setSortByPrice}) => {

    const [whichGame, setWhichGame] = useState('ALL')
    const [whichPrice, setWhichPrice] = useState(false)

    useEffect(() => {
        setSortByGame(whichGame)
        setSortByPrice(whichPrice)
    }, [whichGame, whichPrice])

    const sortByGames = {
        'ALL': 'CSGO',
        'CSGO': 'RUST',
        'RUST': 'ALL',
    }

    const handleGame = () => {
        setWhichGame(sortByGames[whichGame])
    };
    return (
        <div className="postamat__filter">
            <div className="label-changed">
                <label className="filter__item filter__price">
                    <span>
                        <Translate>sort_by_price</Translate>
                    </span>
                    <input
                        type="checkbox"
                        checked={whichPrice}
                        onChange={_ => setWhichPrice(prev => !prev)}
                    />
                    <img src="../images/filter.svg" alt="filter"/>
                </label>
            </div>
            <div className="label-changed">
                <div className="filter__item filter__item_active filter__cool" onClick={handleGame}>
                    <span>
                        <Translate>sort_by_games</Translate>
                    </span>
                    {
                        whichGame === "RUST"
                         ? <img src="../images/rust.png" alt="Game" width={'20px'}/> : whichGame === "CSGO" ?
                            <img src="../images/csgo.png" alt="Game" width={'20px'}/> :
                            <>
                                <img src="../images/csgo.png" alt="Game" width={'20px'}/>
                                <img src="../images/rust.png" alt="Game" width={'20px'}/>
                            </>
                    }
                    {/*<input*/}
                    {/*    type="checkbox"*/}
                    {/*    id={"whichGame"}*/}
                    {/*    checked={whichGame}*/}
                    {/*    onChange={_ => setWhichGame(prev => !prev)}*/}
                    {/*/>*/}

                </div>
            </div>
            <button
                type={"submit"}
                className="filter__reload"
            >
                <img src="../images/reload.svg" alt="filter"/>
                <span>
                    <Translate>sort_update</Translate>
                </span>
            </button>
        </div>
    );
};

export default RightsSortable;