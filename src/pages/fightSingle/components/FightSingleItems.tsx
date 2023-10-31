import React, {useEffect, useState} from 'react'
import clothesIcon from "../../../assets/images/clothes.svg";
import weaponIcon from "../../../assets/images/weapon.png";
import {useToggleModal} from "../../../hooks/toggleModal";
import {IProduct} from "../../../model";

interface IFightSingleItemsProps {
    items: IProduct[]
}

export const FightSingleItems:React.FC<IFightSingleItemsProps> = ({items}) => {

    const [isOpen, setIsOpen] = useState(false)
    useToggleModal({setState: setIsOpen, block: ['.clothes__head', '.clothes__body']})

    return (
        <div className="resources__clothes">
            <button className="clothes__head" onClick={_ => setIsOpen(prev => !prev)}>
                <img src={clothesIcon} alt="Ico"/>
            </button>
            <div className={"clothes__body" + (isOpen ? " clothes__body_active" : "")}>
                <ul>

                    {
                        items?.map(item =>
                            <li key={item.id}>
                                <div className="clothes__cool clothes__cool_green" style={{background: item.rarity.color}} />
                                <img src={item.image} alt="Photo"/>
                            </li>
                        )
                    }

                </ul>
            </div>
        </div>
    )
}
