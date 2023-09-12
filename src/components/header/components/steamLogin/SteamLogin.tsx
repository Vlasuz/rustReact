import React from 'react'
import { useSteamLogin } from '../../../../hooks/steamLogin'
import steam from './../../../../assets/images/steam.svg'
import { SteamLoginStyle } from './steamLogin.styled'

interface ISteamLoginProps {

}

export const SteamLogin: React.FC<ISteamLoginProps> = () => {

    const {auth_params} = useSteamLogin()

    return (
        <SteamLoginStyle href={"http://steamcommunity.com/openid/login?" + new URLSearchParams(auth_params).toString()} className={"buttonToLogin"}>
            <span>
                Вход
            </span>
            <img src={steam} alt="Login" />
        </SteamLoginStyle>
    )
}
