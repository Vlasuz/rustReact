import React, {useEffect, useState} from 'react';
import FightTop from "../Components/ComponentsFightPage/FightTop";
import FightItem from "../Components/ComponentsFightPage/FightItem/FightItem";

const FightPage = (props) => {

    const [loader, isLoader] = useState(true)
    useEffect(() => {
        isLoader(false)
    })
    if(loader) {
        return(
            <section className="section-shop">
                <div className="loading">
                    <div className="load">
                        <div className="load__line">

                        </div>
                        <div className="load__line">

                        </div>
                        <div className="load__line">

                        </div>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="section-shop">


            <FightTop dataInfo={props.dataInfo}/>
            <div className="section-shop__list-games">
                {
                    props.listFightsMembers.map(item =>
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
                            setFightInfo={props.setFightInfo}
                        />
                    )
                }


                <FightItem
                    onSetCoins={props.onSetCoins}
                    mainCoins={props.mainCoins}
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
                    onSetCoins={props.onSetCoins}
                    mainCoins={props.mainCoins}
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
                    onSetCoins={props.onSetCoins}
                    mainCoins={props.mainCoins}
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
                    onSetCoins={props.onSetCoins}
                    mainCoins={props.mainCoins}
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
                    onSetCoins={props.onSetCoins}
                    mainCoins={props.mainCoins}
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