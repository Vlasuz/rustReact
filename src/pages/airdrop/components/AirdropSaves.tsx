import React, {useEffect, useState} from 'react'
import {AirdropSavesItem} from "./AirdropSavesItem";

interface IAirdropSavesProps {

}

export const AirdropSaves: React.FC<IAirdropSavesProps> = () => {

    const [save1, setSave1] = useState(0)
    const [save2, setSave2] = useState(0)
    const [save3, setSave3] = useState(0)
    const [save4, setSave4] = useState(0)


    return (
        <div className="airdrop__saves">
            <AirdropSavesItem
                setSave={setSave1}
                save={save1}
            />
            <AirdropSavesItem
                setSave={setSave2}
                save={save2}
            />
            <AirdropSavesItem
                setSave={setSave3}
                save={save3}
            />
            <AirdropSavesItem
                setSave={setSave4}
                save={save4}
            />
        </div>
    )
}
