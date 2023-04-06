import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    addMySleepers, clearSleeper,
    reducerMySleepers,
    removeBoughtSleeper,
    removeOneSetSleeper,
    setSleepers
} from "../../../Redux/Reducers/reducerAirdropMySleepers";
import Translate from "../../../Hooks/Translate";
import {airdropStep, airdropStepRights} from "../../../Redux/actions";
import {setSound} from "../../../Redux/Reducers/reducerSound";

const RightsAirdropSleepersList = () => {

    const sleepers = useSelector(state => state.reducerMySleepers.boughtSleepers)
    const dispatch = useDispatch()

    const handleDown = function (e, event, positions) {

        dispatch(removeOneSetSleeper({
            x_pos: e.closest('li').style.left.replace('px', '') / 1500,
            y_pos: e.closest('li').style.top.replace('px', '') / 1500
        }))

        let currentDroppable = null;

        let sleeper = e.closest('li')

        sleeper.classList.add('li_moving')

        if (sleeper.classList.contains('sleepers__item_moved'))
            sleeper.classList.remove('sleepers__item_moved')

        sleeper.style.display = 'none';
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        sleeper.style.display = 'flex';

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.map__points')

        if (currentDroppable !== droppableBelow) {

            if (currentDroppable) {
                leaveMap(sleeper)
            }
            currentDroppable = droppableBelow;
            if (currentDroppable) {
                overMap(sleeper)
            }

        }


        sleeper.style.position = 'absolute';
        sleeper.style.zIndex = 1000;

        let cX = 0;
        let cY = 0;

        document.querySelector('body').append(sleeper);

        moveAt(event.pageX, event.pageY)

        function moveAt(pageX, pageY) {
            cX = pageX - sleeper.offsetWidth / 2;
            cY = pageY - sleeper.offsetHeight / 2;

            sleeper.style.left = cX + 'px';
            sleeper.style.top = cY + 'px';
        }

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);

            sleeper.style.display = 'none';
            let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
            sleeper.style.display = 'flex';

            if (!elemBelow) return;

            let droppableBelow = elemBelow.closest('.map__points')

            if (currentDroppable !== droppableBelow) {

                if (currentDroppable) {
                    leaveMap(sleeper)
                }
                currentDroppable = droppableBelow;
                if (currentDroppable) {
                    overMap(sleeper)
                }

            }

        }

        function leaveMap(item) {
            currentDroppable.classList.remove('point-inner')
        }

        function overMap(item) {
            currentDroppable.classList.add('point-inner')

            document.querySelector('body').append(sleeper);
        }

        document.addEventListener('mousemove', onMouseMove)

        document.onmouseup = function (e) {
            document.removeEventListener('mousemove', onMouseMove);
            document.onmouseup = null;

            let zoom = document.querySelector('.map__scale').style.transform.replace("scale(", "").replace(")", "")


            if (currentDroppable) {

                sleeper.style.position = "absolute";
                sleeper.style.left = (cX / zoom) - (currentDroppable?.getBoundingClientRect().left) / zoom + 'px';
                sleeper.style.top = (cY / zoom) - currentDroppable?.getBoundingClientRect().top / zoom + (20 / zoom) + 'px';

                currentDroppable.append(sleeper);

                if (!sleeper.classList.contains('sleepers__item_moved')) {
                    dispatch(setSleepers({
                        x_pos: Number(sleeper.style.left.replace('px', '') / 1500),
                        y_pos: Number(sleeper.style.top.replace('px', '') / 1500)
                    }))

                    if (!sleeper.classList.contains('sleepers__item_in_map'))
                        dispatch(removeBoughtSleeper())

                    sleeper.classList.add('sleepers__item_moved')
                    sleeper.classList.add('sleepers__item_in_map')
                }

            } else {
                if (sleeper.classList.contains('sleepers__item_in_map')) {
                    sleeper.classList.remove('sleepers__item_in_map')
                    dispatch(addMySleepers())
                }
                sleeper.style.left = "auto";
                sleeper.style.top = "auto";
                sleeper.style.position = "static";

                sleeper.classList.remove('li_moving')

                document.querySelector('.section-right__airdrop .airdrop__move ul').append(sleeper)
            }

        }

        sleeper.ondragstart = function () {
            return false;
        };
    }

    const handleBack = () => {
        dispatch(setSound('sound18'))
        dispatch(clearSleeper())
        dispatch(airdropStepRights(1))
        document.querySelectorAll('.map__points li').forEach(item => item.remove())
    }

    return (
        <>
            <h3 className={"move-sleepers__title"}>
                <Translate>move_your_bags</Translate>:
                <span className="sleepers__back" onClick={handleBack}>
                    <img src="../images/close-sleepers.svg" alt=""/>
                </span>
            </h3>
            <ul>
                {
                    sleepers.map((item, itemNum) =>
                        <li onMouseDown={e => handleDown(e.target, e, item)} key={itemNum} className="sleepers__item">
                            <button/>
                        </li>
                    )
                }
            </ul>
        </>
    );
};

export default RightsAirdropSleepersList;