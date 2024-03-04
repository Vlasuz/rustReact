import React, { useEffect, useRef, useState } from 'react'
import { FaqStyle } from './faq.styled'

import discord from './../../assets/images/discord-wh.svg'
import vk from './../../assets/images/vk-wh.svg'
import axios from 'axios'
import { getApiLink } from '../../functions/getApiLink'
import { useDispatch, useSelector } from 'react-redux'
import { setFaqList } from '../../redux/toolkitSlice'
import { FaqHead } from './components/FaqHead'
import { FaqBody } from './components/FaqBody'
import { ISiteSettings } from '../../model'
import { getProducts } from '../../api/getProducts'
import { getFaq } from '../../api/getFaq'
import {Translate} from "../../components/translate/Translate";

interface IFaqProps {

}

export const Faq: React.FC<IFaqProps> = () => {

    const dispatch = useDispatch()
    const [numberOfQuestion, setNumberOfQuestion] = useState(0)
    const faqBlock = useRef()

    useEffect(() => {
        getFaq({ dispatch })
    }, [])

    const setting: ISiteSettings = useSelector((state: any) => state.toolkit.siteSettings)

    return (
        <FaqStyle className="section-faq">
            <div className="section-faq__top">
                <div className="top__lft">
                    <h1>
                        <Translate>hard_question</Translate>
                    </h1>
                    <p>
                        <Translate>if_not_found_your_problem</Translate>
                    </p>
                </div>
                <div className="top__rht">
                    <a className="vk" target='_blank' href={setting?.vkontakte}>
                        <img src={vk} alt="Vk" />
                        <span>
                            <Translate>chat_title</Translate>
                        </span>
                    </a>
                    <a className="dis" target='_blank' href={setting?.discord}>
                        <img src={discord} alt="discord" />
                        <span>
                            <Translate>telegram_channel</Translate>
                        </span>
                    </a>
                </div>
            </div>
            <div className="section-faq__content">
                
                <FaqHead setNumberOfQuestion={setNumberOfQuestion} faqBlock={faqBlock} />
                <hr />
                <FaqBody numberOfQuestion={numberOfQuestion} faqBlock={faqBlock}/>
                
            </div>
        </FaqStyle>
    )
}
