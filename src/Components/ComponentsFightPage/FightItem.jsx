import React from 'react';
import PopupEntryCoins from "../Popups/PopupEntryCoins";
import FightItemUser from "./FightItemUser";
import FightItemClothes from "./FightItemClothes";
import FightItemButton from "./FightItemButton";
import FightItemStatus from "./FightItemStatus";
import FightItemType from "./FightItemType";
import PopupEntryClothes from "../Popups/PopupEntryClothes";

const FightItem = (props) => {


    return (
        <div
            className={props.status == "running" ?
                "list-games__item list-games__item_running" :
                props.status == "finish" ?
                    "list-games__item list-games__item_finish" :
                    "list-games__item"}
        >

            {props.typePrice == "clothes" ? <PopupEntryClothes bid={props.bid}/> : <PopupEntryCoins mainCoins={props.mainCoins} onSetCoins={props.onSetCoins} coins={props.bid}/>}


            <FightItemType
                typePrice={props.typePrice}
            />
            <FightItemClothes/>
            <FightItemUser
                youWon={props.youWon}
                name={props.name}
                image={props.image}
            />
            <FightItemButton
                status={props.status}
                youWon={props.youWon}
                bid={props.bid}
                typePrice={props.typePrice}
            />
            <FightItemStatus
                status={props.status}
                youWon={props.youWon}
                opponentName={props.opponentName}
                opponentPhoto={props.opponentPhoto}
            />

        </div>
    );
};

export default FightItem;