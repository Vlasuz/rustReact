import React, {useEffect} from 'react'
import { AsideStyled } from './Aside.styled'

import fight from './../../assets/images/fight.svg'
import plane from './../../assets/images/plane.svg'
import timer_line from './../../assets/images/timer-line.svg'
import open_cases from './../../assets/images/openCases.svg'
import battle from './../../assets/images/battle.svg'
import logoDev from './../../assets/images/logo-dev.svg'

import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {setRightBlock, setSound, setTrigger} from '../../redux/toolkitSlice'
import { RightItemsButton } from './components/RightItemsButton'
import { rightItemsButtonList } from '../../constants/asideButtonsToRight'

interface IAsideProps {

}

export const Aside: React.FC<IAsideProps> = () => {

    const dispatch = useDispatch()

    const handleChangePage = (sound: string, rightType?: any, isOpenChat?: boolean) => {
        dispatch(setSound(sound))

        if(rightType) {
            dispatch(setTrigger(isOpenChat ? "CHANGE_RIGHT_BLOCK_CHAT" : 'CHANGE_RIGHT_BLOCK'))
            document.querySelector('.postamat')?.classList.remove('postamat_active')

            setTimeout(() => {
                dispatch(setRightBlock({icon: "", title: rightType.title, slug: rightType.slug}))
                setTimeout(() => {
                    document.querySelector('.postamat')?.classList.add('postamat_active')
                }, 150)
            }, 150)

        }
    }

    useEffect(() => {
        if(window.location.href.includes('airdrop')) {
            handleChangePage("", {slug: "AIRDROP", title: "Аирдроп"})
        }
    }, [])

    return (
        <AsideStyled>
            <NavLink to={"/airdrop"} onClick={_ => handleChangePage("sound12", {slug: "AIRDROP", title: "Аирдроп"})} className={({isActive}) => "aside__plane" + (isActive ? " aside__plane_timeline" : "")}>
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
                <span className="absolute-span">
                    Аирдроп
                </span>
            </NavLink>
            <NavLink to={'/'} onClick={_ => handleChangePage("sound12", {slug: "PERERAB", title: "Переработчик"}, true)} className={({isActive}) => "aside__fight" + (isActive ? " aside__fight_active" : "")}>
                <img src={fight} alt="Fight" />
                <span className="absolute-span">
                    Схватка
                </span>
            </NavLink>
            <NavLink to={'/open-cases'} onClick={_ => handleChangePage("sound12", {slug: "CASES", title: "Кейсы"})} className={({isActive}) => "aside__fight" + (isActive ? " aside__fight_active" : "")}>
                <img src={open_cases} alt="Fight" />
                <span className="absolute-span">
                    Кейсы
                </span>
            </NavLink>
            <NavLink to={'/battle'} onClick={_ => handleChangePage("sound12", {slug: "CASES", title: "Баттл"})} className={({isActive}) => "aside__fight" + (isActive ? " aside__fight_active" : "")}>
                <img src={battle} alt="Fight" />
                <span className="absolute-span">
                    Баттл
                </span>
            </NavLink>
            <div className="aside__center">
                <ul className="aside__list">

                    {
                        rightItemsButtonList.map(item => <RightItemsButton key={item.slug} sound={item.sound} icon={item.icon} title={item.title} slug={item.slug} />)
                    }

                </ul>
                <a href={"https://freelancehunt.com/freelancer/denielsonis.html"} target={"_blank"} className="aside__author">
                    <img width={30} src={logoDev} alt="Ico" />
                    <p>Deniel Sonis<span>разработка сайтов</span></p>
                </a>
            </div>
        </AsideStyled>
    )
}
