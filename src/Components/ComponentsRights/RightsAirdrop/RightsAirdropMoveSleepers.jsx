import React, {useEffect} from 'react';
import RightsAirdropSleepersList from "./RightsAirdropSleepersList";
import RightsAirdropSleepersButtons from "./RightsAirdropSleepersButtons";

const RightsAirdropMoveSleepers = (props) => {


    let sleepersMove = function (e, event) {
        let currentDroppable = null;

        let sleeper = e.closest('li')

        sleeper.style.position = 'absolute';
        sleeper.style.zIndex = 1000;

        let ii = sleeper;
        let cX = 0;
        let cY = 0;

        sleeper.classList.add('sleepers__item_moved')

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

            if (currentDroppable != droppableBelow) {


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

        document.onmouseup = function () {
            document.removeEventListener('mousemove', onMouseMove);
            document.onmouseup = null;

            if (currentDroppable) {

                sleeper.style.left = cX - currentDroppable.getBoundingClientRect().left + 'px';
                sleeper.style.top = cY - currentDroppable.getBoundingClientRect().top + 'px';
                currentDroppable.append(ii);
            } else {
                document.querySelector('.airdrop__move ul').append(sleeper)
                sleeper.classList.remove('sleepers__item_moved')
                sleeper.style.position = 'static'
            }

        }

        sleeper.ondragstart = function () {
            return false;
        };
    }
    useEffect(() => {

        document.querySelectorAll('.sleepers__item').forEach(sl => {
            sl.querySelector('button').onmousedown = function (e) {
                sleepersMove(sl, e)
            }
        })

    })


    return (
        <div className="airdrop__move">

            <RightsAirdropSleepersList states={props.states}/>
            <RightsAirdropSleepersButtons />

        </div>
    );
};

export default RightsAirdropMoveSleepers;