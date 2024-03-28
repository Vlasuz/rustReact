import React, { useEffect, useState } from 'react'
import { NoticeStyle } from './Notice.styled'

import errorIcon from './../../assets/images/status-error.svg'
import errorRedIcon from './../../assets/images/error-red.svg'
import checkIcon from './../../assets/images/green-check.svg'
import { INotice } from '../../model'
import { useDispatch, useSelector } from 'react-redux'
import { setNotice } from '../../redux/toolkitSlice'
import {Translate} from "../translate/Translate";

interface INoticeProps {

}

export const Notice: React.FC<INoticeProps> = () => {

    const noticeSlug = useSelector((state: any) => state.toolkit.notice)
    const [isShow, setIsShow] = useState(false)
    const dispatch = useDispatch()

    const notices: INotice[] = [
        {
            slug: 'forChattingAuth',
            text: "Для общения, авторизуйтесь",
            icon: errorIcon,
        },
        {
            slug: 'beforeYouNeedAuth',
            text: "Для начала надо авторизоваться",
            icon: errorIcon,
        },
        {
            slug: 'writeTrueTradeLink',
            text: "Введите верную trade ссылку",
            icon: errorRedIcon,
        },
        {
            slug: 'recycled',
            text: "Переработано",
            icon: checkIcon,
        },
        {
            slug: 'addedToCart',
            text: "Добавлен в корзину",
            icon: checkIcon,
        },
        {
            slug: 'forBuyingAuth',
            text: "Для покупки предмета, авторизуйтесь",
            icon: errorIcon,
        },
        {
            slug: 'youHaveAlreadyAddedItemToCart',
            text: "Вы уже положили данный предмет в корзину",
            icon: errorIcon,
        },
        {
            slug: 'dontHaveMoney',
            text: "У Вас недостаточно средств",
            icon: errorIcon,
        },
        {
            slug: 'needSetAllSleepers',
            text: "Вы должны расставить все спальники",
            icon: errorIcon,
        },
        {
            slug: 'sleepersBuoghtSuccess',
            text: "Вы успешно купили спальники",
            icon: checkIcon,
        },
        {
            slug: 'youHaveAlreadyHaveGame',
            text: "У вас уже есть игра",
            icon: errorRedIcon,
        },
        {
            slug: 'youHaveBlockedToChat',
            text: "Доступ к чату заблокирован",
            icon: errorIcon,
        },
        {
            slug: 'toLowValue',
            text: "Слишком маленькое значение",
            icon: errorIcon,
        },
        {
            slug: 'toMoreValue',
            text: "Слишком большое значение",
            icon: errorIcon,
        },
        {
            slug: 'airdropNotWork',
            text: "'Аирдроп' временно недоступно",
            icon: errorIcon,
        },
        {
            slug: 'payingNotWork',
            text: "'Пополнение баланса' временно недоступно",
            icon: errorIcon,
        },
        {
            slug: 'withdrawNotWork',
            text: "'Вывод вещей' временно недоступно",
            icon: errorIcon,
        },
        {
            slug: 'fightNotWork',
            text: "'Схватка' временно недоступно",
            icon: errorIcon,
        },
        {
            slug: 'oneOrMoreCantBuy',
            text: "Одна или несколько вещей недоступны для покупки!",
            icon: errorIcon,
        },
        {
            slug: 'thisItemYouCantBuy',
            text: "Эта вещь больше недоступна для покупки!",
            icon: errorIcon,
        },
        {
            slug: 'fightItemAlreadyProcess',
            text: "Игра уже идет!",
            icon: errorIcon,
        },
        {
            slug: 'cant_refresh_yet',
            text: "cant_refresh_yet",
            icon: errorIcon,
        },
        {
            slug: "amount_smaller",
            text: <Translate>amount_smaller</Translate>,
            icon: errorIcon,
        },
        {
            slug: "amount_larger",
            text: <Translate>amount_larger</Translate>,
            icon: errorIcon,
        },
    ]

    useEffect(() => {
        if(noticeSlug)

        setTimeout(() => {
            setIsShow(true)

            setTimeout(() => {
                setIsShow(false)

                setTimeout(() => {
                    dispatch(setNotice(''))
                }, 300)

            }, 1250)
        }, 5)
    }, [noticeSlug])

    return (
        <NoticeStyle className={isShow ? " active" : ""}>
            {
                notices?.map((item: INotice) => {
                    if (item.slug === noticeSlug) {
                        return <li key={item.slug} className={"notice__item"}>
                            <span>
                                {item.text}
                            </span>
                            <img src={item.icon} alt="" />
                        </li>
                    }
                })
            }
        </NoticeStyle>
    )
}
