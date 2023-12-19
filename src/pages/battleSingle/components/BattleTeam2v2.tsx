import React, {useContext, useEffect} from 'react'
import userIcon from "../../../assets/images/user2.png";
import {LoadingStyled} from "../../../components/loading/loading.styled";
import {BattlePlayer} from "../../../components/battlePlayer/BattlePlayer";
import {GameSocket} from "../BattleSingle";

interface IBattleTeam2v2Props {

}

export const BattleTeam2v2:React.FC<IBattleTeam2v2Props> = () => {

    const webSocket: any = useContext(GameSocket)

    return (
        <div className={`bottom__people bottom__team-2v2`}>
            <BattlePlayer color={"blue"} position={1} direction={"left"} player={webSocket?.battle?.players[0]} />
            <BattlePlayer color={"blue"} position={2} direction={"left"} player={webSocket?.battle?.players[1]} />
            <strong>
                VS
            </strong>
            <BattlePlayer color={"red"} position={3} direction={"right"} player={webSocket?.battle?.players[2]} />
            <BattlePlayer color={"red"} position={4} direction={"right"} player={webSocket?.battle?.players[3]} />
        </div>
    )
}
