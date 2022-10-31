import React from 'react';

const TopGamer = () => {
    return (
        <div className="top-gamer">
            <div className="top-gamer__vertical"><span>Игрок недели</span>
            </div>
            <div className="top-gamer__info">
                <div className="info__photo">
                    <img src="images/user.jpeg" alt="Photo" />
                </div>
                <div className="info__block">
                    <h2 className="info__name">Рафаэль Миркович</h2>
                    <a className="info__profile" href="#">
                        <img src="images/steam.svg" alt="Steam" /><span>ПРОФИЛЬ</span>
                    </a>
                </div>
            </div>
            <div className="top-gamer__trade-link">
                <div className="trade-link__block">
                    <h3>Trade-ссылка</h3>
                    {/*onClick="openPopup('trade-link-change')"*/}
                    <button className="trade-link__button">Изменить
                    </button>
                </div>
                <div className="trade-link__check">
                    <img src="images/active.svg" alt="Photo" /><span>АКТИВНО</span>
                </div>
            </div>
        </div>
    );
};

export default TopGamer;