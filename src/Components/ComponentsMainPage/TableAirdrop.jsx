import React from 'react';
import TableAirdropItem from "./TableAirdropItem";

const TableAirdrop = () => {
    return (
        <div className="tabs__item tabs__item-airdrop tabs__item_active">
            <div className="table">
                <div className="thead">
                    <div className="tr">
                        <div className="td">Дата</div>
                        <div className="td">Спальники</div>
                        <div className="td">Игроки</div>
                        <div className="td">Ставка</div>
                        <div className="td">Банк</div>
                        <div className="td">PF</div>
                        <div className="td">Исход</div>
                    </div>
                </div>
                <div className="tbody">

                    <TableAirdropItem
                        infoItem={
                            {
                                sleepers: "R15",
                                players: [
                                    {1: "images/user2.jpeg"},
                                    {2: "images/user2.jpeg"},
                                    {3: "images/user2.jpeg"},
                                ],
                                coins: 100,
                                bank: 1250,
                                code: "E24fuk24fsukhhd42sukhd42E24fsu",
                                status: false
                            }
                        }
                    />
                    <TableAirdropItem
                        infoItem={
                            {
                                sleepers: "R11",
                                players: [
                                    {1: "images/user.jpeg"},
                                    {2: "images/user2.jpeg"},
                                    {3: "images/user2.jpeg"},
                                    {4: "images/user2.jpeg"},
                                    {5: "images/user2.jpeg"},
                                    {6: "images/user2.jpeg"},
                                ],
                                coins: 200,
                                bank: 2000,
                                code: "4fuk24fsukh4fuk24fsukhhdhdE242sukhd44fuk24fsukhhd2E24fs4fuk24fsukhhdu",
                                status: false
                            }
                        }
                    />
                    <TableAirdropItem
                        infoItem={
                            {
                                sleepers: "R12",
                                players: [
                                    {1: "images/user2.jpeg"},
                                    {2: "images/user2.jpeg"},
                                    {3: "images/user2.jpeg"},
                                    {4: "images/user.jpeg"},
                                    {5: "images/user2.jpeg"},
                                    {6: "images/user2.jpeg"},
                                    {7: ""},
                                    {8: "images/user2.jpeg"},
                                ],
                                coins: 200,
                                bank: 2045,
                                code: "uk24fsukhhd42Ed42E24fsuk24fsukhhd42",
                                status: true
                            }
                        }
                    />

                </div>
            </div>
        </div>
    );
};

export default TableAirdrop;