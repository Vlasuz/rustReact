import React from 'react'
import { useSelector } from 'react-redux'
import { ISiteSettings } from '../../../model'
import parse from 'html-react-parser';

interface IChatRulesProps {
    isOpenRules: any
}

export const ChatRules: React.FC<IChatRulesProps> = ({ isOpenRules }) => {

    const settings: ISiteSettings = useSelector((state: any) => state.toolkit.siteSettings)

    return (
        <div className={"section-right__rules" + (isOpenRules ? " section-right__rules_active" : "")}>
            <div className="rules__block">
                <h2>
                    {settings.chat_rules_page.title}
                </h2>

                {parse(settings.chat_rules_page.text)}
            </div>
        </div>
    )
}
