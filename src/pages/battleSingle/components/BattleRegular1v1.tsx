import React, { useEffect } from 'react'
import userIcon from "../../../assets/images/user2.png";
import {LoadingStyled} from "../../../components/loading/loading.styled";
import {BattlePlayer} from "../../../components/battlePlayer/BattlePlayer";

interface IBattleRegular1v1Props {

}

export const BattleRegular1v1:React.FC<IBattleRegular1v1Props> = () => {

    return (
        <div className={`bottom__people bottom__team-2v2`}>
            <BattlePlayer color={"blue"} position={"left"} isHaveUser={true} />
            <strong>
                VS
            </strong>
            <BattlePlayer color={"red"} position={"right"} isHaveUser={false} />
        </div>
    )
}
