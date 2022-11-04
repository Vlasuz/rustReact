import React from 'react';
import TopGamerTradeLink from "./TopGamerTradeLink";

const TopGamer = ({tradeLink, setTradeLink}) => {
    return (
        <div className="top-gamer">
            <div className="top-gamer__vertical"><span>Игрок недели</span>
            </div>
            <div className="top-gamer__info">
                <div className="info__photo">
                    <img src="images/user.jpeg" alt="Photo"/>
                </div>
                <div className="info__block">
                    <h2 className="info__name">Рафаэль Миркович</h2>
                    <a className="info__profile" href="#">
                        <img src="images/steam.svg" alt="Steam"/><span>ПРОФИЛЬ</span>
                    </a>
                </div>
            </div>
            <TopGamerTradeLink
                tradeLink={tradeLink}
                setTradeLink={setTradeLink}
            />
        </div>
    );
};

export default TopGamer;