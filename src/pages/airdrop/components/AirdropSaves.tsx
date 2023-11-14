import React, {useEffect, useState} from 'react'
import {AirdropSavesItem} from "./AirdropSavesItem";
import {useDispatch, useSelector} from "react-redux";

interface IAirdropSavesProps {

}

export const AirdropSaves: React.FC<IAirdropSavesProps> = () => {

    const airdropSaveZone1 = useSelector((state: any) => state.toolkit.airdropSaveZone1)
    const airdropSaveZone2 = useSelector((state: any) => state.toolkit.airdropSaveZone2)
    const airdropSaveZone3 = useSelector((state: any) => state.toolkit.airdropSaveZone3)
    const airdropSaveZone4 = useSelector((state: any) => state.toolkit.airdropSaveZone4)


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
