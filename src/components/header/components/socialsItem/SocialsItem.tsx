import React from 'react'
import { SocialsItemStyled } from './socialsItem.styled'
import { ISocialsItem } from '../../../../model'
import { createMarkup } from '../../../../functions/getSvg'

interface ISocialsItemProps {
    socialItemData: ISocialsItem
}

export const SocialsItem: React.FC<ISocialsItemProps> = ({ socialItemData }) => {

    return (
        <SocialsItemStyled>
            <a href={socialItemData.link}>
                <div dangerouslySetInnerHTML={createMarkup(socialItemData.icon)} />
            </a>
        </SocialsItemStyled>
    )
}
