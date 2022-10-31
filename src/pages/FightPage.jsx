import React from 'react';
import FightTop from "../Components/ComponentsFightPage/FightTop";
import FightItem from "../Components/ComponentsFightPage/FightItem";

const FightPage = ({onSetCoins, mainCoins}) => {
    return (
        <section className="section-shop">
            <FightTop />
            <div className="section-shop__list-games">
                <FightItem
                    onSetCoins={onSetCoins}
                    mainCoins={mainCoins}
                    typePrice={"clothes"}
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