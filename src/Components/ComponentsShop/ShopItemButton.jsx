import React, {useEffect} from 'react';

const ShopItemButton = (props) => {

    const setClothes = (e) => {
        document.querySelectorAll('.buy__set').forEach(button => {
            button.querySelector('span').innerText = "Одеть"
            button.classList.remove('buy__set')
            button.classList.add('buy__buy')
            button.closest('.skins__item').classList.remove('skins__item_active')
        })

        e.target.closest('.skins__item').classList.add('skins__item_active')
        e.target.closest('button').classList.add('buy__set')
        e.target.closest('button')?.classList.remove('buy__buy')
        e.target.closest('button').querySelector('span').innerText = "Одето"
    }

    let cost_of_clothes__HARD_CODE = 3000

    const buyTheClothes = (e) => {
        if(props.states.coins > cost_of_clothes__HARD_CODE){
            props.states.setCoins(prev => prev - cost_of_clothes__HARD_CODE)
            props.setIsBought(true)
        } else {
            e.target.closest('button').classList.add('item__buy_not-enough')
            setTimeout(() => {
                e.target.closest('button').classList.remove('item__buy_not-enough')
            }, 500)
        }
    }

    return (
        <div className="item__buy">
            {!props.isBought &&
                <>
                    <button
                        className="buy__price"
                        onClick={e => buyTheClothes(e)}
                    >
                        <img src="images/header__coins.svg" alt="Skin"/>
                        <span>
                            {cost_of_clothes__HARD_CODE}
                        </span>
                        <div className="sale">-50%</div>
                    </button>
                    {/*<button*/}
                    {/*    className="buy__buy"*/}
                    {/*    */}
                    {/*>*/}
                    {/*    <span>Купить</span>*/}
                    {/*</button>*/}
                </>
            }
            {props.isBought &&
                <button
                    className="buy__buy"
                    onClick={e => setClothes(e)}
                >
                    <span>Одеть</span>
                </button>
            }
        </div>
    );
};

export default ShopItemButton;