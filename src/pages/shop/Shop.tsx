import React from 'react'
import { ShopStyle } from './shop.styled'
import { FightTop } from '../../components/fightTop/FightTop'
import backIcon from './../../assets/images/back.svg'
import coin from './../../assets/images/header__coins.svg'
import checkIcon from './../../assets/images/green-check.svg'
import skin from './../../assets/images/skin.png'
import { NavLink } from 'react-router-dom'

interface IShopProps {

}

export const Shop: React.FC<IShopProps> = () => {

    return (
        <ShopStyle className="section-shop">
            
            <FightTop/>
            
            <div className="section-shop__skins">
                <div className="skins__top">
                    <NavLink to={"/"} className="skins__back">
                        <img src={backIcon} alt="Ico" />
                        <span>Режим схватка</span>
                    </NavLink>
                    <h1>Уникальные скины для режима</h1>
                </div>
                <div className="skins__block">
                    <div className="skins__item">
                        <div className="item__check">
                            <img src={checkIcon} alt="Check" />
                        </div>
                        <h2>Буренка</h2>
                        <p>Новичок</p>
                        <div className="item__skin">
                            <img src={skin} alt="Skin" />
                        </div>
                        <div className="item__buy">
                            <button className="buy__price">
                                <img src={coin} alt="Skin" />
                                <span>3000</span>
                                <div className="sale">-50%</div>
                            </button>
                            <button className="buy__buy">
                                <span>Купить</span>
                            </button>
                            <button className="buy__set">
                                <span>Одеть</span>
                            </button>
                        </div>
                    </div>
                    <div className="skins__item">
                        <div className="item__check">
                            <img src={checkIcon} alt="Check" />
                        </div>
                        <h2>Буренка</h2>
                        <p>Новичок</p>
                        <div className="item__skin">
                            <img src={skin} alt="Skin" />
                        </div>
                        <div className="item__buy item__buy_bought">
                            <button className="buy__price">
                                <img src={coin} alt="Skin" />
                                <span>3000</span>
                                <div className="sale">-50%</div>
                            </button>
                            <button className="buy__buy">
                                <span>Купить</span>
                            </button>
                            <button className="buy__set">
                                <span>Одеть</span>
                            </button>
                        </div>
                    </div>
                    <div className="skins__item">
                        <div className="item__check">
                            <img src={checkIcon} alt="Check" />
                        </div>
                        <h2>Буренка</h2>
                        <p>Новичок</p>
                        <div className="item__skin">
                            <img src={skin} alt="Skin" />
                        </div>
                        <div className="item__buy">
                            <button className="buy__price">
                                <img src={coin} alt="Skin" />
                                <span>3000</span>
                                <div className="sale">-50%</div>
                            </button>
                            <button className="buy__buy">
                                <span>Купить</span>
                            </button>
                            <button className="buy__set">
                                <span>Одеть</span>
                            </button>
                        </div>
                    </div>
                    <div className="skins__item">
                        <div className="item__check">
                            <img src={checkIcon} alt="Check" />
                        </div>
                        <h2>Буренка</h2>
                        <p>Новичок</p>
                        <div className="item__skin">
                            <img src={skin} alt="Skin" />
                        </div>
                        <div className="item__buy item__buy_bought">
                            <button className="buy__price">
                                <img src={coin} alt="Skin" />
                                <span>3000</span>
                                <div className="sale">-50%</div>
                            </button>
                            <button className="buy__buy">
                                <span>Купить</span>
                            </button>
                            <button className="buy__set">
                                <span>Одеть</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </ShopStyle>
    )
}
