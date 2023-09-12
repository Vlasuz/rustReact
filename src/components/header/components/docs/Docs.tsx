import React from 'react'
import docs from './../../../../assets/images/copy-icon.svg'
import { DocsStyle } from './docs.styled'

interface IDocsProps {

}

export const Docs: React.FC<IDocsProps> = () => {

    return (
        <DocsStyle className="select">
            <div className="select__head">
                <img src={docs} alt="" />
            </div>
            <div className="select__body">

            </div>
        </DocsStyle>
    )
}
