import React, {useEffect} from 'react'
import { Translate } from '../translate/Translate';
import {PopupCross} from "../../hooks/popup/components/PopupCross";
import greenCheck from './../../assets/images/green-check.svg'
import {useDispatch, useSelector} from "react-redux";
import {addItemToWithdraw, setUserInventory} from "../../redux/toolkitSlice";

interface ITradingStatusSuccessProps {

}

export const TradingStatusSuccess: React.FC<ITradingStatusSuccessProps> = () => {

    const withdrawInfo = useSelector((state: any) => state.toolkit.withdrawInfo)

    const dispatch = useDispatch()

    useEffect(() => {
        // if(withdrawInfo.data.status !== "success") return;

        if(withdrawInfo.type === "pay") {
            dispatch(setUserInventory(withdrawInfo.data.items))
        } else if(withdrawInfo.type === "withdraw") {
            withdrawInfo.data?.bot?.items?.map((item: any) => {
                dispatch(setUserInventory({status: "delete", item}))
                dispatch(addItemToWithdraw(item))
            })
        }


    }, [])

    return (
        <>
            <h2 className="green">
                <span><Translate>cool</Translate></span>
                <div className="img">
                    <img src={greenCheck} alt="Error"/>
                </div>
            </h2>
            <p><Translate>trade_success</Translate></p>
            <PopupCross/>
        </>
    );
}
