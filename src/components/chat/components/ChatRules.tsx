import React from 'react'
import { useSelector } from 'react-redux'
import {IPages, ISiteSettings} from '../../../model'
import parse from 'html-react-parser';

interface IChatRulesProps {
    isOpenRules: any
}

export const ChatRules: React.FC<IChatRulesProps> = ({ isOpenRules }) => {

    const pages: IPages[] = useSelector((state: any) => state.toolkit.pages)

    return (
        <div className={"section-right__rules" + (isOpenRules ? " section-right__rules_active" : "")}>
            <div className="rules__block">
                <h2>
                    {pages.filter(item => !item.is_main && item)[0]?.ua_title}
                </h2>

                {pages.filter(item => !item.is_main && item)[0]?.ua_text && parse(pages.filter(item => !item.is_main && item)[0]?.ua_text)}
            </div>
        </div>
    )
}
