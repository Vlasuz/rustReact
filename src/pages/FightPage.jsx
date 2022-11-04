import React from 'react';
import FightTop from "../Components/ComponentsFightPage/FightTop";
import FightItem from "../Components/ComponentsFightPage/FightItem/FightItem";

const FightPage = ({onSetCoins, mainCoins, dataInfo}) => {

    const listFights = [
        {
            id: 1,
            onSetCoins: onSetCoins,
            mainCoins: mainCoins,
            typePrice: "clothes",
            image: "images/user.jpeg",
            name: "Amnesianna5360",
            bid: "130",
            opponentName: "Victorius",
            opponentPhoto: "images/user.jpeg",
            status: 'waiting',
            youWon: null
        },
        {
            id: 2,
            onSetCoins: onSetCoins,
            mainCoins: mainCoins,
            typePrice: "coins",
            image: "images/user.jpeg",
            name: "Amnesianna5360",
            bid: "130",
            opponentName: "Victorius",
            opponentPhoto: "images/user.jpeg",
            status: 'waiting',
            youWon: null
        }
    ]


    return (
        <section className="section-shop">
            <FightTop dataInfo={dataInfo} />
            <div className="section-shop__list-games">
                {
                    listFights.map(item =>
                        <FightItem
                            key={item.id}
                            onSetCoins={item.onSetCoins}
                            mainCoins={item.mainCoins}
                            typePrice={item.typePrice}
                            image={item.image}
                            name={item.name}
                            bid={item.bid}
                            opponentName={item.opponentName}
                            opponentPhoto={item.opponentPhoto}
                            status={item.status}
                            youWon={item.youWon}
                        />
                    )
                }
                <FightItem
                    onSetCoins={onSetCoins}
                    mainCoins={mainCoins}
                    typePrice={"coins"}
                    image={"images/user.jpeg"}
                    name={"Amnesianna5360"}
                    bid={"130"}
                    opponentName={"Victorius"}
                    opponentPhoto={"images/user.jpeg"}
                    status={'waiting'}
                    youWon={null}
                />
                <FightItem
                    onSetCoins={onSetCoins}
                    mainCoins={mainCoins}
                    typePrice={"coins"}
                    image={"images/user.jpeg"}
                    name={"GoodGamer"}
                    bid={"842"}
                    opponentName={"Victorius"}
                    opponentPhoto={"images/user.jpeg"}
                    status={'waiting'}
                    youWon={null}
                />
                <FightItem
                    onSetCoins={onSetCoins}
                    mainCoins={mainCoins}
                    typePrice={"clothes"}
                    image={"images/user.jpeg"}
                    name={"Amnesianna5360"}
                    bid={"100"}
                    opponentName={"Victorius"}
                    opponentPhoto={"images/user.jpeg"}
                    status={'running'}
                    youWon={null}
                />
                <FightItem
                    onSetCoins={onSetCoins}
                    mainCoins={mainCoins}
                    typePrice={"clothes"}
                    image={"images/user.jpeg"}
                    name={"Amnesianna5360"}
                    bid={"579"}
                    opponentName={"Victorius"}
                    opponentPhoto={"images/user.jpeg"}
                    status={'running'}
                    youWon={null}
                />
                <FightItem
                    onSetCoins={onSetCoins}
                    mainCoins={mainCoins}
                    typePrice={"coins"}
                    image={"images/user.jpeg"}
                    name={"Amnesianna5360"}
                    bid={"100"}
                    opponentName={"Victorius"}
                    opponentPhoto={"images/user.jpeg"}
                    status={'finish'}
                    youWon={true}
                />
            </div>
        </section>
    );
};

export default FightPage;