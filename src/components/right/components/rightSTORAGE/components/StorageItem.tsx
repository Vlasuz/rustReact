import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IProduct } from '../../../../../model'
import { addItemToCart, addItemToWithdraw } from '../../../../../redux/toolkitSlice'
import coin from './../../../../../assets/images/header__coins.svg'
import check from './../../../../../assets/images/green-check.svg'
import basket from './../../../../../assets/images/basket.svg'
import {RightItemTradeBan} from "../../rightSHOP/components/RightItemTradeBan";

interface IStorageItemProps {
    data: IProduct
}

export const StorageItem: React.FC<IStorageItemProps> = ({ data }) => {

    const dispatch = useDispatch()
    const withdrawList: IProduct[] = useSelector((state: any) => state.toolkit.inventoryWithdraw)

    return (
        <div onClick={_ => dispatch(addItemToWithdraw(data))} className={"postamat__item" + (withdrawList.some((item: IProduct) => item.id === data.id) ? " postamat__item_checked" : "")}>
            <div className="item__check">
                <img src={check} alt="Check" />
            </div>
            <div className={"item__cool " + data.rarity.title} style={{ background: data.rarity.color }} />
            <div className="item__title">
                Title of product
            </div>
            <RightItemTradeBan data={data} />
            <div className="item__photo">
                <img src={data.image} alt="Skin" />
            </div>
            <div className="item__price">
                <img src={coin} alt="Ico" />
                <span>
                    {data.price.value}
                </span>
            </div>
        </div>
    )
}
