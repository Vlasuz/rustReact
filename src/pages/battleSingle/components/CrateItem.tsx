import React, { useEffect, useState } from 'react'
import caseIcon from "../../../assets/images/case-magma.png";
import coin from "../../../assets/images/header__coins.svg";

interface ICrateItemProps {

}

export const CrateItem:React.FC<ICrateItemProps> = () => {

    const [count, setCount] = useState(1)

    useEffect(() => {
        if(count !== 0) return;

        console.log('delete')
    }, [count])

    return (
        <div className="crate crate__start">
            <div className="top">
                <button className="minus" onClick={_ => setCount(prev => prev - 1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="3" viewBox="0 0 16 3" fill="none">
                        <path d="M1.49219 1.09985H14.4922" stroke="#EC5555" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </button>
                <input type="number" onChange={(e: any) => setCount(+e.target.value)} value={count}/>
                <button className="plus" onClick={_ => setCount(prev => prev + 1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.99219 1.59985C6.99219 1.04757 7.4399 0.599854 7.99219 0.599854C8.54447 0.599854 8.99219 1.04757 8.99219 1.59985V7.09985H14.4922C15.0445 7.09985 15.4922 7.54757 15.4922 8.09985C15.4922 8.65214 15.0445 9.09985 14.4922 9.09985H8.99219V14.5999C8.99219 15.1521 8.54447 15.5999 7.99219 15.5999C7.4399 15.5999 6.99219 15.1521 6.99219 14.5999V9.09985H1.49219C0.939903 9.09985 0.492188 8.65214 0.492188 8.09985C0.492188 7.54757 0.939903 7.09985 1.49219 7.09985H6.99219V1.59985Z" fill="#92C145" fillOpacity="0.7"/>
                    </svg>
                </button>
            </div>
            <div className="crate__image">
                <img src={caseIcon} alt=""/>
            </div>
            <div className="price">
                <img src={coin} alt=""/>
                <span>500</span>
            </div>
        </div>
    )
}
