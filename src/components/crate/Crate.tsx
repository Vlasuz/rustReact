import React, { useEffect } from 'react'
import {ICrate, IProduct} from "../../model";
import check from "../../assets/images/green-check.svg";
import basket from "../../assets/images/basket.svg";
import {RightItemTradeBan} from "../right/components/rightSHOP/components/RightItemTradeBan";
import coin from "../../assets/images/header__coins.svg";
import { getApiLink } from '../../functions/getApiLink';
import { useDispatch, useSelector } from 'react-redux';
import { setChosenCrates } from '../../redux/toolkitSlice';
import {useCrateRarity} from "../../hooks/crateRarity";

interface ICrateProps {
    data: ICrate
}

export const Crate:React.FC<ICrateProps> = ({data}) => {

    const dispatch = useDispatch()

    const {crateRarity}: any = useCrateRarity({crate: data})
    const chosenCrate: ICrate = useSelector((state: any) => state.toolkit.chosenCrate)

    return (
        // <div className={"postamat__item" + (cart.some((item: IProduct) => item.id === data.id) ? " postamat__item_checked" : "")}>
        <div className={"postamat__item" + (data?.id === chosenCrate?.id ? " postamat__item_checked" : "")} onClick={_ => dispatch(setChosenCrates(data))}>
            <div className="item__check">
                <img src={check} alt="Check" />
            </div>
            {/*<div className="item__buy">*/}
            {/*    <img src={basket} alt="Basket" />*/}
            {/*</div>*/}
            <div className={"item__cool " + crateRarity.color} style={{ background: crateRarity.color }} />
            <div className="item__title">
                {data.name}
            </div>
            <div className="item__photo">
                <img src={"https://api.smallstash.gg/media" + data.icon} alt="Skin" />
            </div>
            <div className="item__price">
                <img src={coin} alt="Ico" />
                <span>
                    {data.price}
                </span>
            </div>
        </div>
    )
}
