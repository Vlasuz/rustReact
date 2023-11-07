import React, { useEffect } from 'react'
import blueCheck from './../../../../../assets/images/blue-check.svg'

interface IAirdropMemberProps {

}

export const AirdropMember:React.FC<IAirdropMemberProps> = () => {

    return (
        <div className="airdrop__member">
            <div className="member__ico">
                <img src={blueCheck} alt="Ico"/>
            </div>
            <span>Вы участник</span>
        </div>
    )
}
