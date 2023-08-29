import React from 'react'
import { HeaderStyled } from './header.styled'
import { Languages } from './components/languages/Languages'
import { Volume } from './components/volume/Volume'
import logo from './../../assets/images/logo-ico.svg'
import support from './../../assets/images/support.svg'
import user from './../../assets/images/user.jpeg'
import coin from './../../assets/images/header__coins.svg'
import { SocialsItem } from './components/socialsItem/SocialsItem'
import { socialsItems } from '../../data/socialLinks'
import { Burger } from './components/burger/Burger'

interface IHeaderProps {

}

export const Header: React.FC<IHeaderProps> = () => {

    return (
        <HeaderStyled className="header">
            <div className="wrapper">
                <div className="header__inner">
                    <a className="header__logo" href="index.html">
                        <div className="ico">
                            <img src={logo} alt="Ico" />
                        </div><span><span>SMALL</span>STASH</span>
                    </a>
                    <Languages />
                    <Volume />
                    <div className="header__lowright">
                        <button className="header__support">
                            <img src={support} alt="Ico" />
                            <span>Поддержка</span>
                        </button>
                        <ul className="header__socials">


                            {
                                socialsItems.map(item => <SocialsItem socialItemData={item} />)
                            }

                        </ul>
                    </div>
                    <div className="header__right">
                        {/* onclick="openPopup('add-coins')" */}
                        <button className="header__coins">
                            <img src={coin} alt="Coins" />
                            <span>6480</span>
                            <div className="ico">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.653961 3.27606C0 4.55953 0 6.23969 0 9.6V14.4C0 17.7603 0 19.4405 0.653961 20.7239C1.2292 21.8529 2.14708 22.7708 3.27606 23.346C4.55953 24 6.23969 24 9.6 24H14.4C17.7603 24 19.4405 24 20.7239 23.346C21.8529 22.7708 22.7708 21.8529 23.346 20.7239C24 19.4405 24 17.7603 24 14.4V9.6C24 6.23969 24 4.55953 23.346 3.27606C22.7708 2.14708 21.8529 1.2292 20.7239 0.653961C19.4405 0 17.7603 0 14.4 0H9.6C6.23969 0 4.55953 0 3.27606 0.653961C2.14708 1.2292 1.2292 2.14708 0.653961 3.27606ZM12.9541 7.95372C12.9541 7.42699 12.5272 7 12.0004 7C11.4737 7 11.0467 7.42699 11.0467 7.95372V11.0463H7.95372C7.42699 11.0463 7 11.4733 7 12C7 12.5267 7.42699 12.9537 7.95372 12.9537H11.0467V16.0463C11.0467 16.573 11.4737 17 12.0004 17C12.5272 17 12.9541 16.573 12.9541 16.0463V12.9537H16.0463C16.573 12.9537 17 12.5267 17 12C17 11.4733 16.573 11.0463 16.0463 11.0463H12.9541V7.95372Z"
                                        fill="#F5AD57" />
                                </svg>
                            </div>
                        </button>
                        <a className="header__user" href="#">
                            <img src={user} alt="User" />
                            <span>Volaratice</span>
                        </a>
                        {/* onClick="document.querySelector('.burger__menu').classNameList.toggle('burger__menu_active')" */}
                        <Burger/>
                    </div>
                </div>
            </div>
        </HeaderStyled>
    )
}
