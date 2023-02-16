import React, {useEffect} from 'react';
import {useSpring, animated} from "@react-spring/web";
import {useDrag} from "react-use-gesture";
import {useSelector} from "react-redux";


const ComponentMap = (props) => {

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

    const plane_length = useSelector(state => state.reducerAirdropLengthPlane.length)


    return (
        <animated.div
            style={{x, y}} {...bindDrag()}
            className="section-map__map"
        >

            <img className="map-img" src="../images/map.png" alt="Map"/>
            <ul
                className="map__points"
                // onMouseMove={mousemovePointScale}
            >
                <li
                    className="point"
                    style={
                        {
                            left: '500px',
                            top: '200px',
                        }
                    }
                >
                    <div className="point__group">
                        <div className="point__photo">
                            <img src="../images/user2.jpeg" alt="Photo"/>
                            <svg width="44" height="50" viewBox="0 0 44 50" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.08361 7.08363C15.4141 -1.24683 28.9204 -1.24683 37.2509 7.08363C45.5813 15.4141 45.5813 28.9204 37.2509 37.2509L26.4099 48.0919C24.0667 50.435 20.2677 50.435 17.9246 48.0919L7.08361 37.2509C-1.24685 28.9204 -1.24685 15.4141 7.08361 7.08363Z"
                                    fill="#F5AD57"/>
                            </svg>
                        </div>
                        <div className="point__winner-table">
                            <img className={'confetti-image'} src="../images/confetti-map.gif" alt="Ico"/>
                            <div className="table__left">
                                <img src="../images/user2.jpeg" alt="Photo"/>
                                <span>CulverCriegi</span>
                            </div>
                            <div className="table__right">
                                <p>Забирает банк:</p>
                                <div className="right__bottom">
                                    <img src="../images/header__coins.svg" alt="Coins"/>
                                    <span>750</span>
                                </div>
                            </div>
                        </div>
                        <div className="point__dot">
                            <div
                                className="line"
                                style={
                                    {
                                        background: '#F5AD57'
                                    }
                                }
                            >

                            </div>
                            <div
                                className="dot"
                                style={
                                    {
                                        background: '#F5AD57'
                                    }
                                }
                            >

                            </div>
                        </div>
                    </div>
                </li>
                <li className="point"
                    style={
                        {
                            left: '600px',
                            top: '400px',
                        }
                    }
                >
                    <div className="point__group">
                        <div className="point__photo">
                            <img src="../images/user.jpeg" alt="Photo"/>
                            <svg width="44" height="50" viewBox="0 0 44 50" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.08361 7.08363C15.4141 -1.24683 28.9204 -1.24683 37.2509 7.08363C45.5813 15.4141 45.5813 28.9204 37.2509 37.2509L26.4099 48.0919C24.0667 50.435 20.2677 50.435 17.9246 48.0919L7.08361 37.2509C-1.24685 28.9204 -1.24685 15.4141 7.08361 7.08363Z"
                                    fill="#F5AD57"/>
                            </svg>
                        </div>
                        <div className="point__winner-table">
                            <img className={'confetti-image'} src="../images/confetti-map.gif" alt="Ico"/>
                            <div className="table__left">
                                <img src="../images/user.jpeg" alt="Photo"/>
                                <span>CulverCriegi</span>
                            </div>
                            <div className="table__right">
                                <p>Забирает банк:</p>
                                <div className="right__bottom">
                                    <img src="../images/header__coins.svg" alt="Coins"/>
                                    <span>750</span>
                                </div>
                            </div>
                        </div>
                        <div className="point__dot">
                            <div
                                className="line"
                                style={
                                    {
                                        background: '#F5AD57'
                                    }
                                }
                            >

                            </div>
                            <div
                                className="dot"
                                style={
                                    {
                                        background: '#F5AD57'
                                    }
                                }
                            >

                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <div
                className={props.states.isTrajectoryActive ? "trajectory trajectory_active" : "trajectory"}
                style={
                    {width: plane_length + "%"}
                }
            >
                <div className="plane">
                    <img src="../images/plane.png" alt="Plane" width="54"/>
                </div>
            </div>
            <div className="hide-map">

            </div>
        </animated.div>
    );
};

export default ComponentMap;