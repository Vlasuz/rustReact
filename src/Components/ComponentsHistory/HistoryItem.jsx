import React from 'react';
import HistoryItemLeft from "./HistoryItemLeft";
import HistoryItemDate from "./HistoryItemDate";
import HistoryItemListClothes from "./HistoryItemListClothes";
import HistoryItemCoins from "./HistoryItemCoins";
import HistoryItemDelete from "./HistoryItemDelete";
import HistoryItemStats from "./HistoryItemStats";

const HistoryItem = () => {

    return (
        <div className="section-history__item">
            <HistoryItemLeft />
            <HistoryItemDate />
            <HistoryItemListClothes />
            <HistoryItemCoins />
            <HistoryItemDelete />
            <HistoryItemStats />
        </div>
    );
};

export default HistoryItem;