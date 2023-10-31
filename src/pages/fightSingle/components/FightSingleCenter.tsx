import React, { useEffect } from 'react'
import {LoadingStyled} from "../../../components/loading/loading.styled";

interface IFightSingleCenterProps {
    gameState: string
}

export const FightSingleCenter:React.FC<IFightSingleCenterProps> = ({gameState}) => {

    return (
        <div className="section-fight__center">
            <div className="center__loading">
                <LoadingStyled className="load">
                    <div className="line" />
                    <div className="line" />
                    <div className="line" />
                </LoadingStyled>
                <span>Ожидание</span>
            </div>
        </div>
    )
}
