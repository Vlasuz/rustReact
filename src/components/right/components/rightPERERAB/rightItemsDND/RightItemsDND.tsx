import React, { useEffect, useState } from 'react'
import { Product } from '../../../../product/Product'
import { RightItemsDNDStyle } from './rightItemsDND.styled'
import { ItemTypes } from '../../../../../constants/ItemTypes'

import pererab_ico from './../../../../../assets/images/pererab-ico.svg'
import {IProduct, IUser} from '../../../../../model'
import { useSelector } from 'react-redux'
import { useItemDrop } from '../../../../../hooks/itemDrop'
import { RightZone } from '../../rightZone/RightZone'
import { ButtonToRecycle } from '../buttonToRecycle/ButtonToRecycle'
import { useSortBy } from '../../../../../hooks/sortBy'
import { EmptyInventory } from '../../emptyInventory/EmptyInventory'
import {useSteamLogin} from "../../../../../hooks/steamLogin";
import {EmptyInventoryStyle} from "../../emptyInventory/emptyInventory.styled";
import {SteamLoginStyle} from "../../../../header/components/steamLogin/steamLogin.styled";
import {Translate} from "../../../../translate/Translate";
import steam from "../../../../../assets/images/steam.svg";
import {StorageItem} from "../../rightSTORAGE/components/StorageItem";

interface IRightItemsDNDProps {
    searchValue: string
}

const EntryButton = () => {

    const {auth_params} = useSteamLogin()

    return (
        <EmptyInventoryStyle>
            <SteamLoginStyle href={"http://steamcommunity.com/openid/login?" + new URLSearchParams(auth_params).toString()} className={"buttonToLogin"}>
            <span>
                <Translate>storage_empty_button_not_login</Translate>
            </span>
                <img src={steam} alt="Login" />
            </SteamLoginStyle>
        </EmptyInventoryStyle>

    )
}

export const RightItemsDND: React.FC<IRightItemsDNDProps> = ({ searchValue }) => {

    const userData: IUser = useSelector((state: any) => state.toolkit.user)
    const pererabZoneItems = useSelector((state: any) => state.toolkit.pererabZoneItems);
    const allProducts: IProduct[] = useSelector((state: any) => state.toolkit.userInventory)
    const {products}: any = useSortBy({allProducts, searchValue})

    const dropToZone = useItemDrop({ itemType: ItemTypes.ITEM, typeOfState: 'pererab' })
    const dropToInventory = useItemDrop({ itemType: ItemTypes.ITEM_ZONE })

    const productsLength = products.length || pererabZoneItems.length
    const isHaveProducts = productsLength ? products?.map((item: IProduct) => <Product key={item.id} typeOfZone={"pererab"} product_data={item} />) : <EmptyInventory/>
    const isAuth = !userData?.id ? <EntryButton/> : isHaveProducts

    return (

        <RightItemsDNDStyle className='pererab'>
            <ul ref={dropToInventory.drop} className={"postamat__block" + (productsLength ? "" : " postamat__block_empty")}>

                {isAuth}

            </ul>
            <div className="zone">

                <div className="zone__list">
                    {!pererabZoneItems.length ? <div className="zone__empty" ref={dropToZone.drop} style={{ background: dropToZone.isOver ? "#282a3b" : "transparent" }}>
                        <p>Зона переработки</p>
                        <img src={pererab_ico} alt="Ico" />
                    </div> : <RightZone zoneArray={pererabZoneItems} drop={dropToZone.drop} isOver={dropToZone.isOver} />}
                </div>

                <div className="pererab__button">
                    {!pererabZoneItems.length ? <div className="zone__empty">
                        <p>Разборщик пуст</p>
                    </div> : <ButtonToRecycle pererabZoneItems={pererabZoneItems} />}
                </div>

            </div>
        </RightItemsDNDStyle>


    )
}
