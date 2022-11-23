import React, {useEffect, useState} from 'react';
import FightTop from "../Components/ComponentsFightPage/FightTop";
import FightItem from "../Components/ComponentsFightPage/FightItem/FightItem";
import Loader from "../Hooks/Loader";

const FightPage = (props) => {
    Loader();

    return (
        <section className="section-shop">


            <FightTop states={props.states}/>
            <div className="section-shop__list-games">
                {
                    props.states.listFightsMembers.map(item =>
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
                            setFightInfo={props.states.setFightInfo}
                        />
                    )
                }


                <FightItem
                    onSetCoins={props.states.onSetCoins}
                    mainCoins={props.states.mainCoins}
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
                    onSetCoins={props.states.onSetCoins}
                    mainCoins={props.states.mainCoins}
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
                    onSetCoins={props.states.onSetCoins}
                    mainCoins={props.states.mainCoins}
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
                    onSetCoins={props.states.onSetCoins}
                    mainCoins={props.states.mainCoins}
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
                    onSetCoins={props.states.onSetCoins}
                    mainCoins={props.states.mainCoins}
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