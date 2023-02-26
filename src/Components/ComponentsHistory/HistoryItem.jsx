import React, {useEffect, useState} from 'react';
import HistoryItemDelete from "./HistoryItemDelete";
import HistoryItemStats from "./HistoryItemStats";

const HistoryItem = ({data}) => {

    const [showAllItems, setShowAllItems] = useState(4)

    useEffect(() => {
        document.querySelectorAll('.section-history__item').forEach(item => {
            setTimeout(() => {
                item.classList.add('fadeShow')
            }, 200)
        })
    })

    return (
        <div className="section-history__item">
            <div
                className={"item__type" + (data.type === "withdraw" ? " item__type_send" : " item__type_get")}>
                <img
                    src={data.type === "withdraw" ? "../images/arr-send.svg" : "../images/arr-get.svg"}
                    alt=""/>
            </div>
            <div className="item__date">
                {data.created_at.slice(data.created_at.indexOf(" "))}
                <span>
                    {data.created_at.slice(0, data.created_at.indexOf(" "))}
                </span>
            </div>

            <div className="item__list">
                {!!data.items.length ?

                    <ul>
                        {
                            data.items.map((item, itemNum) => itemNum < showAllItems &&
                                <li key={item.id}>
                                    <div
                                        className={
                                            item.rarity.color === "3" ? "clothes__cool clothes__cool_red" :
                                                item.rarity.color === "2" ? "clothes__cool clothes__cool_blue" :
                                                    item.rarity.color === "1" ? "clothes__cool clothes__cool_green" : "clothes__cool clothes__cool_grey"
                                        }
                                    >

                                    </div>
                                    <img src={item.image} alt="Skin"/>
                                    <div className="li__name">
                                        <p>{item.title}</p>
                                        <b>{item.price.value}</b>
                                    </div>
                                </li>
                            )
                        }
                        {data.items.length > 4 && <li className="count" onClick={e => setShowAllItems(data.items.length)} style={{display: data.items.length !== showAllItems && 'flex'}}>+{data.items.length - 4}</li>}
                    </ul>

                    :
                    <p className="pin">
                        PIN-CODE<span> ${data.price}</span>
                    </p>
                }
            </div>

            <div className="item__price">
                <img src="../images/header__coins.svg" alt="Coins"/>
                <span>
                    {data.value}
                </span>
            </div>

            <HistoryItemDelete />
            <HistoryItemStats data={data} />
        </div>
    );
};

export default HistoryItem;