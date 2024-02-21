import React, {useEffect, useState} from 'react'
import {AirdropSavesItem} from "./AirdropSavesItem";
import {useDispatch, useSelector} from "react-redux";
import getCookies from "../../../functions/getCookie";
import {setAirdropSaveZone1, setAirdropSaveZone3, setAirdropSaveZone2, setAirdropSaveZone4} from "../../../redux/toolkitSlice";
import {IUser} from "../../../model";
import axios from "axios";
import {getBearer} from "../../../functions/getBearer";
import {getApiLink} from "../../../functions/getApiLink";

interface IAirdropSavesProps {

}

export const AirdropSaves: React.FC<IAirdropSavesProps> = () => {

    const dispatch = useDispatch()

    const airdropSaveZone1 = useSelector((state: any) => state.toolkit.airdropSaveZone1)
    const airdropSaveZone2 = useSelector((state: any) => state.toolkit.airdropSaveZone2)
    const airdropSaveZone3 = useSelector((state: any) => state.toolkit.airdropSaveZone3)
    const airdropSaveZone4 = useSelector((state: any) => state.toolkit.airdropSaveZone4)
    const userData: IUser = useSelector((state: any) => state.toolkit.user)

    useEffect(() => {
        if(!userData?.id) return;

        getCookies("airdrop_save_bags_1") && dispatch(setAirdropSaveZone1(getCookies("airdrop_save_bags_1")))
        getCookies("airdrop_save_bags_2") && dispatch(setAirdropSaveZone2(getCookies("airdrop_save_bags_2")))
        getCookies("airdrop_save_bags_3") && dispatch(setAirdropSaveZone3(getCookies("airdrop_save_bags_3")))
        getCookies("airdrop_save_bags_4") && dispatch(setAirdropSaveZone4(getCookies("airdrop_save_bags_4")))

        getBearer({type: "get"})
        axios.get(getApiLink(`api/airdrop/bags/templates/`)).then(({data}) => {
            console.log(data)

            data.map((item: any) => {
                item.slot === 1 && dispatch(setAirdropSaveZone1(JSON.stringify(item.bags)))
                item.slot === 2 && dispatch(setAirdropSaveZone2(JSON.stringify(item.bags)))
                item.slot === 3 && dispatch(setAirdropSaveZone3(JSON.stringify(item.bags)))
                item.slot === 4 && dispatch(setAirdropSaveZone4(JSON.stringify(item.bags)))
            })

        })

    }, [userData])

    return (
        <div className="airdrop__saves">
            <AirdropSavesItem
                save={airdropSaveZone1}
                saveZone={1}
            />
            <AirdropSavesItem
                save={airdropSaveZone2}
                saveZone={2}
            />
            <AirdropSavesItem
                save={airdropSaveZone3}
                saveZone={3}
            />
            <AirdropSavesItem
                save={airdropSaveZone4}
                saveZone={4}
            />
        </div>
    )
}
