import React, { useEffect } from 'react'
import userIcon from "../../../assets/images/user2.png";
import {LoadingStyled} from "../../../components/loading/loading.styled";
import {BattlePlayer} from "../../../components/battlePlayer/BattlePlayer";

interface IBattleTeam2v2Props {

}

export const BattleTeam2v2:React.FC<IBattleTeam2v2Props> = () => {

    const isHaveUser = false;

    return (
        <div className={`bottom__people bottom__team-2v2`}>
            <BattlePlayer color={"blue"} position={"left"} isHaveUser={true} />
            <BattlePlayer color={"blue"} position={"left"} isHaveUser={false} />
            <strong>
                VS
            </strong>
            <BattlePlayer color={"red"} position={"right"} isHaveUser={false} />
            <BattlePlayer color={"red"} position={"right"} isHaveUser={false} />
        </div>
    )
}
