import React from 'react'
import { ContainerStyled } from './container.styled'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Fight } from '../../pages/fight/Fight'
import { Aside } from '../aside/Aside'
import { Right } from '../right/Right'
import { Profile } from '../../pages/profile/Profile'
import {
    TransitionGroup,
    CSSTransition
} from "react-transition-group";
import { useUserData } from '../../hooks/userData'
import { NotFound } from '../../pages/notFound/NotFound'
import { Shop } from '../../pages/shop/Shop'
import { History } from '../../pages/history/History'
import { Faq } from '../../pages/faq/Faq'
import { Policy } from '../../pages/policy/Policy'
import { routes } from '../../functions/routes'

interface IContainerProps {

}

export const Container: React.FC<IContainerProps> = () => {
    const location = useLocation();
    const { userData } = useUserData()
    const isUserAuth = Object.keys(userData).length

    return (
        <ContainerStyled>

            <Aside />

            <TransitionGroup component={null}>
                <CSSTransition key={location.pathname} classNames="fade" timeout={300}>

                    <Routes location={location}>

                        {
                            routes().filter(item => isUserAuth ? item : item.isGlobal).map(item =>
                                <Route key={item.path} element={item.element} path={item.path} />
                            )
                        }

                    </Routes>

                </CSSTransition>
            </TransitionGroup>

            <Right />

        </ContainerStyled>
    )
}
