import React from 'react';
import {useEffect} from "react";

const HistoryItemListClothes = ({images}) => {

    // let moreItems = function (e) {
    //     if (e.target.closest('ul')) {
    //         for (let it of e.target.closest('ul').querySelectorAll('li')) {
    //             it.style.display = 'flex'
    //         }
    //         e.target.closest('li').remove()
    //     }
    // }
    //
    // useEffect(() => {
    //     if (document.querySelectorAll('.section-history__item')[0]) {
    //         document.querySelectorAll('.section-history__item').forEach(list => {
    //             for (let i = 0; i <= list.querySelectorAll('li').length; i++) {
    //
    //                 let a = i - 3
    //
    //                 if (i > 3 && list.querySelectorAll('li')[i]) {
    //
    //                     list.querySelectorAll('li')[i].style.display = 'none';
    //
    //                     if (list.querySelector('.count')) {
    //                         list.querySelector('.count').classList.add('count_active')
    //                         list.querySelector('.count').innerHTML = "+" + a
    //                     }
    //
    //                 }
    //
    //             }
    //         })
    //     }
    // })

    return (

        <ul>
            {
                images.map((img, imgNum) =>
                    <li
                        key={imgNum}
                    >
                        {/*<div className="clothes__cool clothes__cool_green">*/}
                        <div
                            className={
                                img.rarity === 3 ? "clothes__cool clothes__cool_red" :
                                    img.rarity === 2 ? "clothes__cool clothes__cool_blue" :
                                        img.rarity === 1 ? "clothes__cool clothes__cool_green" : "clothes__cool clothes__cool_grey"
                            }
                        >

                        </div>
                        <img src={img.url} alt="Skin"/>
                        <div className="li__name">
                            <p>{img.title}</p>
                            <b>{img.price}</b>
                        </div>
                    </li>
                )
            }
            {/*<li>*/}
            {/*    <div className="clothes__cool clothes__cool_green">*/}

            {/*    </div>*/}
            {/*    <img src="../images/skin.png" alt="Skin"/>*/}
            {/*    <div className="li__name">*/}
            {/*        <p>Cucumber Eoka</p>*/}
            {/*        <b>$32.18</b>*/}
            {/*    </div>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*    <div className="clothes__cool clothes__cool_green">*/}

            {/*    </div>*/}
            {/*    <img src="../images/skin.png" alt="Skin"/>*/}
            {/*    <div className="li__name">*/}
            {/*        <p>Cucumber Eoka</p>*/}
            {/*        <b>$32.18</b>*/}
            {/*    </div>*/}
            {/*</li>*/}
            <li
                className="count"
                // onClick={e => moreItems(e)}
            >+2
            </li>
        </ul>

    );
};

export default HistoryItemListClothes;