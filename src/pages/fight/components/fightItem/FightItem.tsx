import React, { useState } from 'react'
import coin from './../../../../assets/images/header__coins.svg'
import clothes from './../../../../assets/images/clothes.svg'
import { FightItemStyled } from './fightItem.styled'
import { IFightItem } from '../../../../model'
import { FightButton } from '../fightButton/FightButton'
import { FightUser } from '../fightUser/FightUser'

interface IFightItemProps {
    fight_data: IFightItem
}

export const FightItem: React.FC<IFightItemProps> = ({ fight_data }) => {

    const [isOpenClothes, setIsOpenClothes] = useState(false)

    return (
        <FightItemStyled className={isOpenClothes ? "game_open-clothes" : ""}>
            <div className={"item__type item__type_" + (fight_data.clothes !== null ? "clothes" : "coins")} onClick={_ => fight_data.clothes !== null && setIsOpenClothes(prev => !prev)}>
                <img src={fight_data.clothes !== null ? clothes : coin} alt="Ico" />
            </div>

            <ul className="item__clothes">
                {
                    fight_data.clothes?.map((item, index) =>
                        <li key={index}>
                            <div className={"clothes__cool clothes__cool_" + (item.rarity)} />
                            <img src={item.image} alt="Photo" />
                        </li>
                    )
                }
            </ul>

            <FightUser fight_user={fight_data.user_first} user_winner={fight_data?.user_winner}  />

            {/* onClick="openPopup('entry-coins')" */}

            <FightButton fight_data={fight_data} />

            <FightUser fight_user={fight_data.user_second} user_winner={fight_data?.user_winner}  />

        </FightItemStyled>
    )
}
