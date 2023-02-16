import React, {useState} from 'react';
import ComponentMap from "../Components/ComponentsMap/ComponentMap";
import {useEffect} from "react";
import Loader from "../Hooks/Loader";
import {useSelector} from "react-redux";

const AirdropPage = (props) => {
    Loader();

    const [scale, setScale] = useState(0)
    // const [isPlaneShow, setIsPlaneShow] = useState(true);
    const drop_is_down = useSelector(state => state.reducerAirdropDropIsDown.isDropDown)

    useEffect(() => {
        document.querySelector('.trajectory').style.transition = 'width 0s linear';
        setTimeout(() => {
            document.querySelector('.trajectory').style.transition = 'width 1s linear';
        }, 500)
    }, [])

    let sum = null
    let onWheelEvent = function (event) {
        let count = event.deltaY / 2000;
        sum -= count;

        setScale(sum => sum - count);

        if (scale >= 1 && scale < 3) {

        } else if (scale <= 1) {
            setScale(1)
        } else if (scale > 3){
            setScale(3)
        }
        return;
    }

    return (
        <section
            // className="section-map"
            className={drop_is_down ? "section-map dropIsDown" : "section-map"}
        >
            <div className="section-map__top">
                <div className="section-map__game-is">Игра #32875002</div>
                <div className="section-map__code">
                    <img src="../images/shield-map.svg" alt="Ico"/><span>E24n...84dke</span>
                </div>
            </div>
            <div className="map__container">
                <div
                    className="map__scale"
                    onWheel={e => onWheelEvent(e)}
                    style={
                        {transform: `scale(${scale < 1 ? 1 : scale > 3 ? 3 : scale})`}
                    }
                >
                    <ComponentMap states={props.states} />
                </div>
            </div>

            {/*<div className="notice-bottom"><span>Проигрыш</span>*/}
            {/*    <button*/}
            {/*        className="notice-bottom__close"*/}
            {/*        onClick={e => e.target.closest('.notice-bottom').classList.add('notice-bottom_remove')}*/}
            {/*    >*/}
            {/*        <img src="../images/close.svg" alt="Close"/>*/}
            {/*    </button>*/}
            {/*</div>*/}
        </section>
    );
};

export default AirdropPage;