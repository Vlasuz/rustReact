import React, {useEffect} from 'react';
import {useSpring, animated} from "@react-spring/web";
import {useDrag} from "react-use-gesture";
import {useSelector} from "react-redux";
import {reducerAirdropMembers} from "../../Redux/Reducers/reducerAirdropMembers";
import Translate from "../../Hooks/Translate";


const ComponentMap = () => {


    // useEffect(() => {
    //     let dropX = +getComputedStyle(document.querySelector('.airdrop-drop-sent')).left.replace('px', '') + 1
    //     let dropY = +getComputedStyle(document.querySelector('.airdrop-drop-sent')).top.replace('px', '') + 1
    //     let bagX = +getComputedStyle(document.querySelector('.my_point')).left.replace('px', '')
    //     let bagY = +getComputedStyle(document.querySelector('.my_point')).top.replace('px', '')
    //
    //     bagX -= dropX;
    //     bagY -= dropY;
    //
    //
    //     let result = +Math.sqrt(Math.pow(bagX, 2) + Math.pow(bagY, 2)).toFixed(2)
    //     document.querySelector('.line-to-winner').style.width = result+"px"
    //
    //     let radius = Math.asin(Math.abs(bagY) / result) * (180 / Math.PI).toFixed(2)
    //
    //     dropX = +getComputedStyle(document.querySelector('.airdrop-drop-sent')).left.replace('px', '') + 1
    //     dropY = +getComputedStyle(document.querySelector('.airdrop-drop-sent')).top.replace('px', '') + 1
    //     bagX = +getComputedStyle(document.querySelector('.my_point')).left.replace('px', '')
    //     bagY = +getComputedStyle(document.querySelector('.my_point')).top.replace('px', '')
    //
    //
    //
    //     if (bagX > dropX && bagY > dropY) {
    //         console.log(4, radius)
    //         radius = 360 - radius
    //     } else if (bagX < dropX && bagY > dropY) {
    //         console.log(3, radius)
    //         radius = 180 + radius
    //     } else if (bagX < dropX && bagY < dropY) {
    //         console.log(2, radius)
    //         radius = 180 - radius
    //     }
    //
    //     document.querySelector('.line-to-winner').style.transform = `rotate(-${radius}deg)`;
    // }, [])


    const [{x, y}, api] = useSpring(() => ({
        x: 0,
        y: 0
    }))
    const bindDrag = useDrag(({offset}) => {
        api({
            x: offset[0],
            y: offset[1],
        })
    });

    const seconds = useSelector(state => state.reducerAirdropTimerSecond.seconds)
    const step = useSelector(state => state.reducerAirdropStep.step)
    const coodsPlane = useSelector(state => state.reducerAirdropTrajectoryPlane.data)
    const drop = useSelector(state => state.reducerAirdropDrop.drop)
    const members = useSelector(state => state.reducerAirdropMembers.list)
    const response = useSelector(state => state.reducerAirdropSocket.response)
    const session = useSelector(state => state.reducerSession.session)

    return (
        // , zoom: `${scale < 1 ? 1 : scale > 3 ? 3 : scale}`
        <animated.div
            style={{x, y}}
            {...bindDrag()}
            className="section-map__map"
        >

            {/*<div className="airdrop-drop-sent" style={{top: "499.56px", left: "104.75px"}}>*/}
            {/*    <div className="point" />*/}
            {/*    <div className="line-to-winner line-to-winner_active" style={{opacity: 1}} />*/}
            {/*</div>*/}

            {drop.isDropDown &&
                <div className="airdrop-drop-sent"
                     style={{top: coodsPlane + 20 + "px", left: drop.coodDrop + "px"}}>
                    <div className='point'></div>
                    <div className='line-to-winner'></div>
                </div>}

            <img className="map-img" src="../images/map.png" alt="Map"/>
            <ul className="map__points">

                {/*<li data-bag="Q9" data-x="0.6913333333333334" data-y="0.404" className="point my_point" style={{left: "1037px", top: "1406px"}}>*/}
                {/*    <div className="point__group">*/}
                {/*        <div className="point__photo">*/}
                {/*            <img*/}
                {/*            src="https://avatars.akamai.steamstatic.com/be64b5eae228700566c3ce90061c0b7bcc51f13b_full.jpg"*/}
                {/*            alt="Photo"/>*/}
                {/*            <svg width="44" height="50" viewBox="0 0 44 50" fill="none"*/}
                {/*                 xmlns="http://www.w3.org/2000/svg">*/}
                {/*                <path d="M7.08361 7.08363C15.4141 -1.24683 28.9204 -1.24683 37.2509 7.08363C45.5813 15.4141 45.5813 28.9204 37.2509 37.2509L26.4099 48.0919C24.0667 50.435 20.2677 50.435 17.9246 48.0919L7.08361 37.2509C-1.24685 28.9204 -1.24685 15.4141 7.08361 7.08363Z" fill="#92C145"></path>*/}
                {/*            </svg>*/}
                {/*        </div>*/}
                {/*        <div className="point__winner-table">*/}
                {/*            <img className="confetti-image" src="../images/confetti-map.gif" alt="Ico"/>*/}
                {/*            <div className="table__left"*/}
                {/*                 style={{background: "linear-gradient(89.07deg, rgb(146, 193, 69) 0.69%, rgb(84, 103, 66) 99.35%)"}}>*/}
                {/*                <img src="https://avatars.akamai.steamstatic.com/be64b5eae228700566c3ce90061c0b7bcc51f13b_full.jpg" alt="Photo"/>*/}
                {/*                <span>VLZ</span>*/}
                {/*                    <div className="line" style={{background: "rgb(146, 193, 69)"}}></div></div>*/}
                {/*            <div className="table__right"><p>Take the bank:</p>*/}
                {/*                <div className="right__bottom">*/}
                {/*                    <img src="../images/header__coins.svg" alt="Coins"/>*/}
                {/*                    <span>800</span>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="point__dot">*/}
                {/*            <div className="line" style={{background: "rgb(146, 193, 69)"}}></div>*/}
                {/*            <div className="dot" style={{background: "rgb(146, 193, 69)"}}></div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</li>*/}
                {/*<li data-bag="Q9" data-x="0.6913333333333334" data-y="0.404" className="point my_point" style={{left: "337px", top: "506px"}}>*/}
                {/*    <div className="point__group">*/}
                {/*        <div className="point__photo">*/}
                {/*            <img*/}
                {/*                src="https://avatars.akamai.steamstatic.com/be64b5eae228700566c3ce90061c0b7bcc51f13b_full.jpg"*/}
                {/*                alt="Photo"/>*/}
                {/*            <svg width="44" height="50" viewBox="0 0 44 50" fill="none"*/}
                {/*                 xmlns="http://www.w3.org/2000/svg">*/}
                {/*                <path d="M7.08361 7.08363C15.4141 -1.24683 28.9204 -1.24683 37.2509 7.08363C45.5813 15.4141 45.5813 28.9204 37.2509 37.2509L26.4099 48.0919C24.0667 50.435 20.2677 50.435 17.9246 48.0919L7.08361 37.2509C-1.24685 28.9204 -1.24685 15.4141 7.08361 7.08363Z" fill="#92C145"></path>*/}
                {/*            </svg>*/}
                {/*        </div>*/}
                {/*        <div className="point__winner-table">*/}
                {/*            <img className="confetti-image" src="../images/confetti-map.gif" alt="Ico"/>*/}
                {/*            <div className="table__left"*/}
                {/*                 style={{background: "linear-gradient(89.07deg, rgb(146, 193, 69) 0.69%, rgb(84, 103, 66) 99.35%)"}}>*/}
                {/*                <img src="https://avatars.akamai.steamstatic.com/be64b5eae228700566c3ce90061c0b7bcc51f13b_full.jpg" alt="Photo"/>*/}
                {/*                <span>VLZ</span>*/}
                {/*                <div className="line" style={{background: "rgb(146, 193, 69)"}}></div></div>*/}
                {/*            <div className="table__right"><p>Take the bank:</p>*/}
                {/*                <div className="right__bottom">*/}
                {/*                    <img src="../images/header__coins.svg" alt="Coins"/>*/}
                {/*                    <span>800</span>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="point__dot">*/}
                {/*            <div className="line" style={{background: "rgb(146, 193, 69)"}}></div>*/}
                {/*            <div className="dot" style={{background: "rgb(146, 193, 69)"}}></div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</li>*/}

                {
                    members.map((item, itemNum) =>
                        item.bags.map((bag, bagNum) =>

                            <li key={item.user.id + bagNum} data-bag={bag.map_pos} data-x={bag.x_pos}
                                data-y={bag.y_pos}
                                className={"point" + (item.user.id === session.id ? " my_point" : "")}
                                style={{left: (bag.x_pos * 1500) + 'px', top: (bag.y_pos * 1500) + 'px'}}>
                                <div className="point__group">
                                    <div className="point__photo">
                                        <img src={item.user.avatar} alt="Photo"/>
                                        <svg width="44" height="50" viewBox="0 0 44 50" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7.08361 7.08363C15.4141 -1.24683 28.9204 -1.24683 37.2509 7.08363C45.5813 15.4141 45.5813 28.9204 37.2509 37.2509L26.4099 48.0919C24.0667 50.435 20.2677 50.435 17.9246 48.0919L7.08361 37.2509C-1.24685 28.9204 -1.24685 15.4141 7.08361 7.08363Z"
                                                fill={item.user.id !== session.id ? "#CD402A" : "#92C145"}/>
                                        </svg>
                                    </div>
                                    <div className="point__winner-table">
                                        <img className={'confetti-image'} src="../images/confetti-map.gif"
                                             alt="Ico"/>
                                        <div className="table__left"
                                             style={{background: item.user.id !== session.id ? "linear-gradient(89.07deg, #CD402A 0.69%, #371414 99.35%)" : "linear-gradient(89.07deg, #92C145 0.69%, #546742 99.35%)"}}>
                                            <img src={item.user.avatar} alt="Photo"/>
                                            <span>{item.user.name}</span>
                                            <div className="line"
                                                 style={{background: item.user.id !== session.id ? "#CD402A" : "#92C145"}}></div>
                                        </div>
                                        <div className="table__right">
                                            <p>
                                                <Translate>get_bank</Translate>:
                                            </p>
                                            <div className="right__bottom">
                                                <img src="../images/header__coins.svg" alt="Coins"/>
                                                <span>
                                                            {response.airdrop.bank}
                                                        </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="point__dot">
                                        <div className="line"
                                             style={{background: item.user.id !== session.id ? '#CD402A' : "#92C145"}}/>
                                        <div className="dot"
                                             style={{background: item.user.id !== session.id ? '#CD402A' : "#92C145"}}/>
                                    </div>
                                </div>
                            </li>
                        )
                    )
                }

            </ul>
            <div
                className={step === "process" ? "trajectory trajectory_active" : "trajectory"}
                style={
                    {
                        width: (step === "process" ? -((seconds * 50) - 1500) : "0") + "px",
                        transition: step === "process" ? "width 1s linear" : "",
                        top: coodsPlane + "px"
                    }
                }>
                <div className="plane">
                    <img src="../images/plane_new.svg" alt="Plane" width="54"/>
                </div>
            </div>
            <div className="hide-map"/>
        </animated.div>
    );
};


export default ComponentMap;