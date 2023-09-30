import React from 'react'
import { AsideStyled } from './aside.styled'

import fight from './../../assets/images/fight.svg'
import plane from './../../assets/images/plane.svg'
import timer_line from './../../assets/images/timer-line.svg'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setRightBlock, setSound } from '../../redux/toolkitSlice'
import { RightItemsButton } from './components/RightItemsButton'
import { getSvg } from '../../functions/getSvg'
import { rightItemsButtonList } from '../../constants/asideButtonsToRight'

interface IAsideProps {

}

export const Aside: React.FC<IAsideProps> = () => {

    const dispatch = useDispatch()

    return (
        <AsideStyled>
            <NavLink to={"/airdrop"} className={({isActive}) => "aside__plane" + (isActive ? " aside__plane_timeline" : "")}>
                <img src={plane} alt="Plane" />
                <div className="timer">
                    <div className="min">
                        <span>**</span>
                    </div>
                    <div className="sec">
                        <small className="dot">.</small>
                        <span>**</span>
                    </div>
                </div>
                <div className="timer-line">
                    <img src={timer_line} alt="Line" />
                    <div className="timer-line__line">
                        <div className="timer-line__line_done" />
                    </div>
                </div>
            </NavLink>
            <NavLink to={'/'} onClick={_ => dispatch(setSound('sound12'))} className={({isActive}) => "aside__fight" + (isActive ? " aside__fight_active" : "")}>
                <img src={fight} alt="Fight" />
            </NavLink>
            <div className="aside__center">
                <ul className="aside__list">

                    {
                        rightItemsButtonList.map(item => <RightItemsButton key={item.slug} sound={item.sound} icon={item.icon} title={item.title} slug={item.slug} />)
                    }

                </ul>
                <div className="aside__author">
                    <img src="img/author.svg" alt="Ico" />
                    <p>Тёмкин<span>Дизайн сайта</span>
                    </p>
                </div>
            </div>
        </AsideStyled>
    )
}
