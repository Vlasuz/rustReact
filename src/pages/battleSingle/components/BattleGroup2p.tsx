import React, {useContext, useEffect} from 'react'
import {GameSocket} from "../BattleSingle";
import {BattlePlayer} from "../../../components/battlePlayer/BattlePlayer";

interface IBattleGroup2pProps {

}

export const BattleGroup2p:React.FC<IBattleGroup2pProps> = () => {

    const webSocket: any = useContext(GameSocket)

    const position1 = webSocket?.battle?.players.filter((item: any) => item.position === 1)[0]
    const position2 = webSocket?.battle?.players.filter((item: any) => item.position === 2)[0]

    return (
        <div className={`bottom__people bottom__2p`}>
            <BattlePlayer color={"blue"} position={1} direction={"left"} player={position1} />
            <BattlePlayer color={"blue"} position={2} direction={"left"} player={position2} />
        </div>
    )
}
