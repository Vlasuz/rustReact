import React, {useState} from 'react';
import ComponentMap from "../Components/ComponentsMap/ComponentMap";
import {useEffect} from "react";
import Loader from "../Hooks/Loader";
import {useSelector} from "react-redux";
import Translate from "../Hooks/Translate";

const AirdropPage = (props) => {
    Loader();

    const [scale, setScale] = useState(0)
    const step = useSelector(state => state.reducerAirdropStep.step)
    const isDropDown = useSelector(state => state.reducerAirdropDrop.drop.isDropDown)
    const response = useSelector(state => state.reducerAirdropSocket.response)
    const session = useSelector(state => state.reducerSession.session)
    const [scaleToLeft, setScaleToLeft] = useState(0)
    const [scaleToTop, setScaleToTop] = useState(0)

    let sum = null
    let onWheelEvent = function (event) {
        let count = event.deltaY / 2000;
        sum -= count;

        setScaleToLeft(event.clientX)
        setScaleToTop(event.clientY)

        setScale(sum => sum - count);

        if (scale >= 1 && scale < 3) {

        } else if (scale <= 1) {
            setScale(1)
        } else if (scale > 3){
            setScale(3)
        }
        return;
    }

    console.log('rr AirPage:', response)

    return (
        <section className={isDropDown ? "section-map dropIsDown" : "section-map"}>
            <div className="section-map__top">
                <div className="section-map__game-is"><Translate>game</Translate> #{response?.airdrop?.game_id}</div>
                <div className="section-map__code">
                    <img src="../images/shield-map.svg" alt="Ico"/>
                    <span className={'random_hash'}>
                        {
                            response?.airdrop?.random_hash.substr(0, 4) + "..." + response?.airdrop?.random_hash.substr(-4, 4)
                        }
                    </span>
                </div>
            </div>
            <div className="map__container">
                <div
                    className={"map__scale" + (step === "process" ? " map__scale_hidden" : "")}
                    onWheel={e => onWheelEvent(e)}
                    // style={{zoom: `${scale < 1 ? 1 : scale > 3 ? 3 : scale}`}}>
                    style={{transform: `scale(${scale < 1 ? 1 : scale > 3 ? 3 : scale})`, transformOrigin: `50% 50%`}}>
                    <ComponentMap scale={scale} />
                </div>
            </div>

            {
                response?.airdrop?.players.length > 1 && response?.airdrop?.winner ?
                    <div className="notice-bottom">
                        <span>
                            {response?.airdrop?.winner.user.id === session.id ? <Translate>you_winner</Translate> : <Translate>you_looser</Translate>}
                        </span>
                        <button
                            className="notice-bottom__close"
                            onClick={e => e.target.closest('.notice-bottom').classList.add('notice-bottom_remove')}>
                            <img src="../images/close.svg" alt="Close"/>
                        </button>
                    </div> : ""
            }
        </section>
    );
};

export default AirdropPage;