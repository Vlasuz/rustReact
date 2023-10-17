import React, { useEffect } from 'react'
import {BattleStyled} from "./Battle.styled";
import {BattleTop} from "../../components/battleTop/BattleTop";
import {BattleItem} from "./components/battleItem/BattleItem";
import {NavLink} from "react-router-dom";

interface IBattleProps {

}

export const Battle:React.FC<IBattleProps> = () => {

    return (
        <BattleStyled>
            <div className="top">
                <BattleTop/>
                <div className="create-battle">
                    <NavLink to={"/battle/123123"}>
                        Создать игру
                    </NavLink>
                </div>
            </div>

            <div className="list">
                <ul>
                    <BattleItem/>
                    <BattleItem/>
                </ul>
            </div>
        </BattleStyled>
    )
}
