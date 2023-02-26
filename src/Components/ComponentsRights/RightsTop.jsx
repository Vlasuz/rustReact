import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {chatAddMessages, chatAddOnline, reducerChat} from "../../Redux/Reducers/reducerChat";
import {Trans, useTranslation} from "react-i18next";
import Translate from "../../Hooks/Translate";

const RightsTop = () => {

    const membersOnline = useSelector(state => state.reducerChat.online)

    const switcherButtons = function (thisItem) {

        document.querySelector('.section-right__switcher')?.classList.remove('section-right__switcher-airdrop')
        document.querySelector('.section-right__item_show')?.classList.remove('section-right__item_show')
        document.querySelector('.section-right__item_change-show')?.classList.remove('section-right__item_change-show')
        if (document.querySelector('.section-right__top .top__item.top__item_active')) document.querySelector('.section-right__top .top__item.top__item_active').classList.remove('top__item_active')
        if (document.querySelector('.section-right .section-right_active')) document.querySelector('.section-right .section-right_active').classList.add('section-right__item_change-hidden')

        let arrayOfItems = []
        thisItem.target.closest('.section-right__top').querySelectorAll('.top__item').forEach(item => {
            arrayOfItems.push(item)
        })
        let numberOfBlock = arrayOfItems.indexOf(thisItem.target.closest('.top__item'))

        thisItem.target.closest('.top__item').classList.add('top__item_active')

        setTimeout(() => {
            if (document.querySelector('.section-right_active')) document.querySelector('.section-right_active').classList.remove('section-right_active')
            if (document.querySelector('.section-right .section-right__item_change-hidden')) document.querySelector('.section-right .section-right__item_change-hidden').classList.remove('section-right__item_change-hidden')

            document.querySelectorAll('.section-right__switcher .section-right__item')[numberOfBlock].classList.add('section-right_active')

            setTimeout(() => {
                document.querySelector('.section-right__switcher .section-right_active').classList.add('section-right__item_change-show')
            }, 10)

            document.querySelector('.section-right__switcher')?.classList.add('section-right__switcher-airdrop')

            let chatBlock = document.querySelector('.section-right__chatting')
            chatBlock.scrollTo({
                top: chatBlock.scrollHeight,
            });

        }, 300)

    }

    const switcherRights = useSelector(state => state.reducerSwitcherRights.data)

    return (
        <div className="section-right__top">
            <button
                className="top__item"
                onClick={switcherButtons}>
                <span>
                    {
                        switcherRights === "st" ? <Translate>storage_title</Translate> :
                            switcherRights === "sh" ? <Translate>shop_title</Translate> :
                                switcherRights === "ra" ? <Translate>airdrop_title</Translate> :
                            <Translate>processor_title</Translate>
                    }
                </span>
            </button>
            <button
                className="top__item top__item_active"
                onClick={switcherButtons}
            >
                <span>
                    <Translate>chat_title</Translate>
                </span>
                <div className="people">
                    <img src="../images/users.svg" alt="Ico"/>
                    <span>
                        {membersOnline}
                    </span>
                </div>
            </button>
        </div>
    );
};

export default RightsTop;