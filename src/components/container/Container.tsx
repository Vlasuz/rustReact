import React from 'react'
import { ContainerStyled } from './container.styled'
import { Route, Routes } from 'react-router-dom'
import { Fight } from '../../pages/fight/Fight'
import { Aside } from '../aside/Aside'
import { Right } from '../right/Right'

interface IContainerProps {

}

export const Container: React.FC<IContainerProps> = () => {

    return (
        <ContainerStyled>

            <Aside/>

            <Routes>
                <Route element={<Fight />} path='/' />
            </Routes>

            <Right/>

        </ContainerStyled>
    )
}
