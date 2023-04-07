import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    dragAndDrop,
    dragAndDropAdd,
    processorListAdd,
    userInventoryAdd,
    userInventoryRemove
} from "../../Redux/actions";
import TradeBanTimer from "../TradeBanTimer";

const RightsItem = (props) => {

    const processorList = useSelector(state => state.reducerProcessorList)
    const dispatch = useDispatch()

    let mouseActiveDrag = function (event) {

        if(event.target.closest('li')?.querySelector('.item__is-lock_true')) {
            setTimeout(() => {
                event.target.closest('li').classList.add('item-is-lock')
            }, 50)
            setTimeout(() => {
                event.target.closest('li')?.classList.remove('item-is-lock')
            }, 500)
            return null;
        }

        let postItem = event.target.closest('.pererab__item');
        let postItemThis = postItem.cloneNode(true);
        let currentDroppable = null;

        let shiftX = postItemThis.getBoundingClientRect().left + 60;
        let shiftY = postItemThis.getBoundingClientRect().top + 60;

        function moveAt(pageX, pageY) {

            let coodX = pageX - shiftX;
            let coodY = pageY - shiftY;

            postItemThis.style.left = coodX + 'px';
            postItemThis.style.top = coodY + 'px';

        }

        document.addEventListener('mousemove', onMouseMove);

        // DRAG & DROP
        function onMouseMove(event) {

            postItem.style.display = 'none'

            document.querySelector('body').insertAdjacentElement('beforeend', postItemThis)

            postItemThis.classList.add('pererab__item_moved')
            postItemThis.style.position = 'absolute';
            postItemThis.style.zIndex = 9;

            moveAt(event.clientX, event.clientY)

            postItemThis.style.display = 'none';
            let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
            postItemThis.style.display = 'flex';

            if (!elemBelow) return;
            let droppableBelow = elemBelow.closest('.pererab__zone')
            if (!currentDroppable) {
                document.onmouseup = function () {
                    document.removeEventListener('mousemove', onMouseMove);
                    document.onmouseup = null;

                    postItemThis.classList.add('pererab__item_delete')
                    postItemThis.classList.remove('pererab__item_moved')
                    postItemThis.style.position = 'relative';
                    postItemThis.style.left = 'auto';
                    postItemThis.style.top = 'auto';

                    postItem.style.display = 'block'
                    document.querySelector('.pererab__item_delete').remove()

                }
            }

            if (currentDroppable !== droppableBelow) {

                if (currentDroppable) {
                    document.querySelector('.pererab__zone').style.background = 'transparent';
                }
                currentDroppable = droppableBelow;
                if (currentDroppable && processorList.list.length < 6) {

                    droppableBelow.style.background = '#26293b';
                    document.onmouseup = function () {
                        document.removeEventListener('mousemove', onMouseMove);
                        document.onmouseup = null;

                        droppableBelow.style.background = 'transparent';

                        postItemThis.classList.add('pererab__item_delete')
                        postItemThis.classList.remove('pererab__item_moved')
                        postItemThis.style.position = 'relative';
                        postItemThis.style.left = 'auto';
                        postItemThis.style.top = 'auto';

                        postItem.style.display = 'block'
                        document.querySelector('.pererab__item_delete').remove()

                        dispatch(processorListAdd([props.item]))
                        dispatch(userInventoryRemove([props.item]))

                    }
                }
            }

        }

        // DRAG & DROP


        // ONLY CLICK
        document.onmouseup = function (e) {

            document.removeEventListener('mousemove', onMouseMove);
            document.onmouseup = null;

            if (!e.target.closest('.zone__list') && processorList.list.length < 6) {

                dispatch(processorListAdd([props.item]))
                dispatch(userInventoryRemove([props.item]))

            }

        }
        // ONLY CLICK

        postItemThis.ondragstart = function () {
            return false;
        };
        postItem.ondragstart = function () {
            return false;
        };

    }

    return (
        <li
            className="postamat__item pererab__item"
            onMouseDown={e => mouseActiveDrag(e)}
        >
            {props.item.count &&
                <div className="item__count">
                    {props.item.count}
                </div>
            }

            <div className={"item__is-lock item__is-lock_true"}>
                <img src="../images/lock-map.svg" width={'11'} alt=""/>
                <p><TradeBanTimer time={new Date('Wed, 5 Oct 2024 00:00:00')}/></p>
            </div>
            <div className="item__photo">
                <img src={props.item.image} alt="Skin"/>
            </div>
            <div className="item__price">
                <img src="../images/header__coins.svg" alt="Ico"/>
                <span>
                    {props.item.price.value}
                </span>
            </div>
        </li>
    );
};

export default RightsItem;