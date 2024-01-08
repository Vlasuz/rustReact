import React, {useContext, useEffect} from 'react'
import userIcon from "../../../assets/images/user2.png";
import {LoadingStyled} from "../../../components/loading/loading.styled";
import {BattlePlayer} from "../../../components/battlePlayer/BattlePlayer";
import {GameSocket} from "../BattleSingle";

interface IBattleRegular1v1Props {

}

export const BattleRegular1v1:React.FC<IBattleRegular1v1Props> = () => {

    const webSocket: any = useContext(GameSocket)

    const position1 = webSocket?.battle?.players.filter((item: any) => item.position === 1)[0]
    const position2 = webSocket?.battle?.players.filter((item: any) => item.position === 2)[0]

    return (
        <div className={`bottom__people bottom__team-1v1`}>
            <BattlePlayer color={"blue"} position={1} direction={"left"} player={position1} />
            <strong>
                VS
            </strong>
            <BattlePlayer color={"red"} position={2} direction={"right"} player={position2} />
        </div>
    )
}
