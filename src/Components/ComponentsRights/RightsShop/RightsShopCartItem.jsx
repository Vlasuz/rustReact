import React from 'react';

const RightsShopCartItem = ({listItems, listToCart, setListToCart, itemToDelete, setItemToDelete, idItem}) => {

    const deleteItem = function (e) {
        // let th = e.target.closest('.cart__item')
        //
        // // th.classList.add('cart__item_deleted')
        // // setTimeout(function () {
        //
        // let arr = []
        // listToCart.map(it => {
        //     arr.push(it.listItems)
        // })
        //
        // setItemToDelete(arr.indexOf(listItems))
        // // console.log(arr.indexOf(listItems))
        // if( arr.indexOf(listItems) > -1 ){
        //
        //     setListToCart(listToCart)
        // }
        // console.log(listToCart)


        // }, 300)



    }

    // function removePeople(e) {
    //     let array = [...this.state.people]; // make a separate copy of the array
    //     let index = array.indexOf(e.target.value)
    //     if (index !== -1) {
    //         array.splice(index, 1);
    //         setListToCart({people: array});
    //     }
    // }

    const removeItem = (id) => {
        listToCart.map((item, itemNum) => {
            let checkItem = item.listItems === listItems;
            if (checkItem) {
                setListToCart(current => current.filter(employee => {
                    return employee.listItems.id !== item.listItems.id
                }) );
            }
        })
    }

    return (
        <div className="cart__item">
            <div className="clothes__cool clothes__cool_green">

            </div>
            <div className="item__photo">
                <img src={listItems.image} alt="Ico"/>
            </div>
            <div className="item__info">
                <div className="item__name">
                    {listItems.title}
                </div>
                <div className="item__price">
                    <img src="images/header__coins.svg" alt="Coins"/>
                    <span>
                        {listItems.cost}
                    </span>
                </div>
            </div>
            <div
                className="item__delete"
                onClick={() => removeItem(idItem)}
            >
                <img src="images/cross.svg" alt="Delete"/>
            </div>
        </div>
    );
};

export default RightsShopCartItem;