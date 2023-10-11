import React, { useState } from 'react'
import docs from './../../../../assets/images/copy-icon.svg'
import {DocsStyle} from './docs.styled'
import {useToggleModal} from "../../../../hooks/toggleModal";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {IPages} from "../../../../model";

interface IDocsProps {

}

export const Docs: React.FC<IDocsProps> = () => {

    const [isOpen, setIsOpen] = useState(false)
    useToggleModal({setState: setIsOpen, block: ['.header__docs', '.select__body']})
    const pages: IPages[] = useSelector((state: any) => state.toolkit.pages)

    return (
        <DocsStyle className={"header__docs" + (isOpen ? " header__docs_active" : "")}>
            <div className="select__head" onClick={_ => setIsOpen(prev => !prev)}>
                <span>
                    <img src={docs} alt="Ico" width="18"/>
                </span>
            </div>
            <div className="select__body">
                {
                    pages.map(item => item.is_main &&
                        <div key={item.ua_title} className="select__item">
                            <NavLink to={'/docs/'+item.id}>{item.ua_title}</NavLink>
                        </div>
                    )
                }
            </div>
        </DocsStyle>
    )
}
