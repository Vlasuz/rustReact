import React, {useEffect} from 'react';
import {useSpring, animated} from "@react-spring/web";
import {useDrag} from "react-use-gesture";
import {useSelector} from "react-redux";
import {reducerAirdropMembers} from "../../Redux/Reducers/reducerAirdropMembers";
import Translate from "../../Hooks/Translate";


const ComponentMap = ({ scale }) => {

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


    return (
        // , zoom: `${scale < 1 ? 1 : scale > 3 ? 3 : scale}`
        <animated.div
            style={{x, y}}
            {...bindDrag()}
            className="section-map__map"
        >

            {drop.isDropDown &&
                <div className="airdrop-drop-sent"
                     style={{top: coodsPlane + 20 + "px", left: drop.coodDrop + "px"}}>
                    <div className='point'></div>
                    <div className='line-to-winner'></div>
                </div>}

            <img className="map-img" src="../images/map.png" alt="Map"/>
            <ul className="map__points">

                {
                    members.map((item, itemNum) =>
                        <div key={itemNum}>
                            {
                                item.bags.map((bag, bagNum) =>

                                    <li key={item.user.id + bagNum} data-bag={bag.map_pos} data-x={bag.x_pos}
                                        data-y={bag.y_pos} className="point"
                                        style={{left: (bag.x_pos * 1500) + 'px', top: (bag.y_pos * 1500) + 'px'}}>
                                        <div className="point__group">
                                            <div className="point__photo">
                                                <img src={item.user.avatar} alt="Photo"/>
                                                <svg width="44" height="50" viewBox="0 0 44 50" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M7.08361 7.08363C15.4141 -1.24683 28.9204 -1.24683 37.2509 7.08363C45.5813 15.4141 45.5813 28.9204 37.2509 37.2509L26.4099 48.0919C24.0667 50.435 20.2677 50.435 17.9246 48.0919L7.08361 37.2509C-1.24685 28.9204 -1.24685 15.4141 7.08361 7.08363Z"
                                                        fill="#F5AD57"/>
                                                </svg>
                                            </div>
                                            <div className="point__winner-table">
                                                <img className={'confetti-image'} src="../images/confetti-map.gif"
                                                     alt="Ico"/>
                                                <div className="table__left">
                                                    <img src={item.user.avatar} alt="Photo"/>
                                                    <span>{item.user.name}</span>
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
                                                <div className="line" style={{background: '#F5AD57'}}/>
                                                <div className="dot" style={{background: '#F5AD57'}}/>
                                            </div>
                                        </div>
                                    </li>
                                )
                            }
                        </div>
                    )
                }

            </ul>
            <div
                className={step === "process" ? "trajectory trajectory_active" : "trajectory"}
                style={
                    {
                        width: (step === "process" ? -((seconds * 25) - 1500) : "0") + "px",
                        transition: step === "process" ? "width 1s linear" : "",
                        top: coodsPlane + "px"
                    }
                }>
                <div className="plane">
                    <img src="../images/plane.png" alt="Plane" width="54"/>
                </div>
            </div>
            <div className="hide-map"/>
        </animated.div>
    );
};


export default ComponentMap;