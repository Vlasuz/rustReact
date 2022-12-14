import React, {useState} from 'react';
import ComponentMap from "../Components/ComponentsMap/ComponentMap";
import {useEffect} from "react";
import Loader from "../Hooks/Loader";

const AirdropPage = (props) => {
    Loader();

    const [scale, setScale] = useState(0)

    useEffect(() => {
        document.querySelector('.trajectory').style.transition = 'width 0s linear';
        setTimeout(() => {
            document.querySelector('.trajectory').style.transition = 'width 1s linear';
        }, 500)
    }, [props.states.isPlaneShow])


    let pointXOfScale = 0
    let pointYOfScale = 0

    let boundingTop = null
    let boundingLeft = null
    let sum = null

    let onWheelEvent = function (event) {
        event.target.closest('.section-map').style.transformOrigin = `${pointXOfScale}px ${pointYOfScale}px`;

        let count = event.deltaY / 2000;

        boundingTop = document.querySelector('.map__scale').getBoundingClientRect().top;
        boundingLeft = document.querySelector('.map__scale').getBoundingClientRect().left;

        sum -= count;
        setScale(sum => sum - count);

        console.log(sum)

        if (scale >= 1 && scale < 3) {
            event.target.closest('.map__scale').style.transform = `scale(${scale})`;
        } else if (scale <= 1) {
            setScale(1)
            event.target.closest('.map__scale').style.transform = `scale(${scale})`;
        } else if (scale > 3){
            setScale(3)
            event.target.closest('.map__scale').style.transform = `scale(${scale})`;
        }
        return;
    }

    return (
        <section
            // className="section-map"
            className={props.states.isDropDown ? "section-map dropIsDown" : "section-map"}
        >
            <div className="section-map__top">
                <div className="section-map__game-is">Игра #32875002</div>
                <div className="section-map__code">
                    <img src="images/shield-map.svg" alt="Ico"/><span>E24n...84dke</span>
                </div>
            </div>
            <div className="map__container">
                <div
                    className="map__scale"
                    onWheel={e => onWheelEvent(e)}
                >
                    <ComponentMap states={props.states} />
                </div>
            </div>

            {/*<div className="notice-bottom"><span>Проигрыш</span>*/}
            {/*    <button*/}
            {/*        className="notice-bottom__close"*/}
            {/*        onClick={e => e.target.closest('.notice-bottom').classList.add('notice-bottom_remove')}*/}
            {/*    >*/}
            {/*        <img src="images/close.svg" alt="Close"/>*/}
            {/*    </button>*/}
            {/*</div>*/}
        </section>
    );
};

export default AirdropPage;