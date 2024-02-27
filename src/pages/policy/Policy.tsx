import React, {useEffect, useState} from 'react'
import { PolicyStyle } from './policy.styled'

import imagePolicy from './../../assets/images/terms.png'
import {useParams} from "react-router";
import {IPages} from "../../model";
import {useSelector} from "react-redux";
import parse from "html-react-parser";

interface IPolicyProps {

}

export const Policy: React.FC<IPolicyProps> = () => {

    const {docId} = useParams()
    const [thisPage, setThisPage] = useState<IPages>()

    const language = useSelector((state: any) => state.toolkit.language)
    const pages: IPages[] = useSelector((state: any) => state.toolkit.pages)

    useEffect(() => {
        setThisPage(pages?.filter((item: IPages) => item?.id === docId)[0])
    }, [pages])

    const title: {[key: string]: any} = {
        'ru': thisPage?.title && parse(thisPage?.title),
        'ua': thisPage?.ua_title && parse(thisPage?.ua_title),
        'en': thisPage?.en_title && parse(thisPage?.en_title),
    }

    const text: {[key: string]: any} = {
        'ru': thisPage?.text && parse(thisPage?.text),
        'ua': thisPage?.ua_text && parse(thisPage?.ua_text),
        'en': thisPage?.en_text && parse(thisPage?.en_text),
    }

    return (
        <PolicyStyle className="section-terms">
            <div className="section-terms__top">
                <h1>
                    {title[language]}
                </h1>
                <img src={imagePolicy} alt="Photo" />
            </div>
            <div className="section-terms__content">

                {
                    text[language]
                }

            </div>
        </PolicyStyle>
    )
}
