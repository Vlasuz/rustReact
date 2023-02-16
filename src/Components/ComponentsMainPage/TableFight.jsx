import React from 'react';
import TableFightItem from "./TableFightItem";

const TableFight = () => {
    return (
        <div className="tabs__item tabs__item-fight">
            <div className="table">
                <div className="thead">
                    <div className="tr">
                        <div className="td">Дата</div>
                        <div className="td">Соперник</div>
                        <div className="td">Ставка</div>
                        <div className="td">Банк</div>
                        <div className="td">Исход</div>
                    </div>
                </div>
                <div className="tbody">
                    <TableFightItem
                        infoItem={
                            {
                                players: [
                                    {1: "../images/user2.jpeg"},
                                ],
                                coins: 100,
                                bank: 1250,
                                status: false
                            }
                        }
                    />
                    <TableFightItem
                        infoItem={
                            {
                                players: [
                                    {1: "../images/user2.jpeg"},
                                ],
                                coins: 100,
                                bank: 1250,
                                status: true
                            }
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default TableFight;