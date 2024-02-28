import React, {useEffect, useRef, useState} from 'react'
import coin from './../../../../assets/images/header__coins.svg'
import clothes from './../../../../assets/images/clothes.svg'
import { FightItemStyled } from './fightItem.styled'
import { IFightItem } from '../../../../model'
import { FightButton } from '../fightButton/FightButton'
import { FightUser } from '../fightUser/FightUser'
import AOS from "aos";

interface IFightItemProps {
    data: IFightItem
    index: number
}

export const FightItem: React.FC<IFightItemProps> = ({ data, index }) => {

    const liRef: any = useRef(null)

    useEffect(() => {
        setTimeout(() => {
            AOS.refreshHard();
            liRef.current?.classList?.add('aos-animate')
        }, 50 * 10);
    }, [])

    const [isOpenClothes, setIsOpenClothes] = useState(false)

    const isHasItems = Object.keys(data.first_player.items).length

    return (
        <FightItemStyled data-aos={"fade-up"} data-aos-delay={index * 50} ref={liRef} className={isOpenClothes ? "game_open-clothes" : ""}>
            <div className={"item__type item__type_" + (isHasItems ? "clothes" : "coins")} onClick={_ => isHasItems && setIsOpenClothes(prev => !prev)}>
                <img src={isHasItems ? clothes : coin} alt="Ico" />
            </div>

            <ul className="item__clothes">
                {
                    data.first_player.items?.map((item, index) =>
                        <li key={index}>
                            <div className={"clothes__cool clothes__cool_" + (item.rarity)} />
                            <img src={item.image} alt="Photo" />
                        </li>
                    )
                }
            </ul>

            <FightUser fight_user={data.first_player} user_winner={data.winner}  />

            <FightButton data={data} />

            <FightUser fight_user={data.second_player} user_winner={data.winner}  />

        </FightItemStyled>
    )
}
