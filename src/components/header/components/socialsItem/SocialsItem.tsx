import React from 'react'
import { SocialsItemStyled } from './socialsItem.styled'
import { ISocialsItem } from '../../../../model'
import { getSvg } from '../../../../functions/getSvg'

interface ISocialsItemProps {
    socialItemData: ISocialsItem
}

export const SocialsItem: React.FC<ISocialsItemProps> = ({ socialItemData }) => {

    return (
        <SocialsItemStyled>
            <a href={socialItemData.link}>
                <div dangerouslySetInnerHTML={getSvg(socialItemData.icon)} />
            </a>
        </SocialsItemStyled>
    )
}
