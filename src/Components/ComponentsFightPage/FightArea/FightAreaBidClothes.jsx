import React from 'react';

const FightAreaBidClothes = () => {
    return (
        <div className="resources__clothes">
            <button
                className="clothes__head"
                onClick={e => e.target.closest('.resources__clothes').querySelector('.clothes__body').classList.toggle('clothes__body_active')}
            >
                <img src="images/clothes.svg" alt="Ico"/>
            </button>
            <div className="clothes__body">
                <ul>
                    <li>
                        <div className="clothes__cool clothes__cool_green">

                        </div>
                        <img src="images/weapon.png" alt="Photo"/>
                    </li>
                    <li>
                        <div className="clothes__cool clothes__cool_green">

                        </div>
                        <img src="images/weapon.png" alt="Photo"/>
                    </li>
                    <li>
                        <div className="clothes__cool clothes__cool_green">

                        </div>
                        <img src="images/weapon.png" alt="Photo"/>
                    </li>
                    <li>
                        <div className="clothes__cool clothes__cool_green">

                        </div>
                        <img src="images/weapon.png" alt="Photo"/>
                    </li>
                    <li>
                        <div className="clothes__cool clothes__cool_green">

                        </div>
                        <img src="images/weapon.png" alt="Photo"/>
                    </li>
                    <li>
                        <div className="clothes__cool clothes__cool_green">

                        </div>
                        <img src="images/weapon.png" alt="Photo"/>
                    </li>
                    <li className="count">
                        <span>+3</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default FightAreaBidClothes;