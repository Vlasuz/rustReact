import React, {useContext} from 'react'
import {BattlePlayer} from "../../../components/battlePlayer/BattlePlayer";
import {GameSocket} from "../BattleSingle";

interface IBattleGroup3pProps {

}

export const BattleGroup3p:React.FC<IBattleGroup3pProps> = () => {

    const webSocket: any = useContext(GameSocket)

    const position1 = webSocket?.battle?.players.filter((item: any) => item.position === 1)[0]
    const position2 = webSocket?.battle?.players.filter((item: any) => item.position === 2)[0]
    const position3 = webSocket?.battle?.players.filter((item: any) => item.position === 3)[0]

    return (
        <div className={`bottom__people bottom__2p`}>
            <BattlePlayer color={"blue"} position={1} direction={"left"} player={position1} />
            <BattlePlayer color={"blue"} position={2} direction={"left"} player={position2} />
            <BattlePlayer color={"blue"} position={3} direction={"left"} player={position3} />
        </div>
    )
}
