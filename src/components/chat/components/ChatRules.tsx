import React from 'react'
import {useSelector} from 'react-redux'
import {IPages, ISiteSettings} from '../../../model'
import parse from 'html-react-parser';

interface IChatRulesProps {
    isOpenRules: any
}

export const ChatRules: React.FC<IChatRulesProps> = ({isOpenRules}) => {

    const pages: IPages[] = useSelector((state: any) => state.toolkit.pages)
    const language: string = useSelector((state: any) => state.toolkit.language)


    const title: any = (item: any) => {
        return {
            'ru': item?.title,
            'ua': item?.ua_title ?? item?.title,
            'en': item?.en_title ?? item?.title,
        }
    }
    const text: any = (item: any) => {
        return {
            'ru': item?.text,
            'ua': item?.ua_text ?? item?.text,
            'en': item?.en_text ?? item?.text,
        }
    }

    return (
        <div className={"section-right__rules" + (isOpenRules ? " section-right__rules_active" : "")}>
            <div className="rules__block">
                <h2>
                    {title(pages.filter(item => !item.is_main && item)[0])[language]}
                </h2>

                {parse(text(pages.filter(item => !item.is_main && item)[0])[language] ?? '')}
            </div>
        </div>
    )
}
