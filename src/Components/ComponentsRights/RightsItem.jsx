import React from 'react';

const RightsItem = (props) => {

    let mouseActiveDrag = function (event) {

        let postItem = event.target.closest('.postamat__item');

        let currentDroppable = null;
        let postItemThis = postItem;

        let shiftX = event.clientX - postItemThis.getBoundingClientRect().left;
        let shiftY = event.clientY - postItemThis.getBoundingClientRect().top;

        function onMouseMove(event) {

            document.querySelector('body').append(postItem)

            postItem.classList.add('pererab__item_moved')
            postItem.style.position = 'absolute';
            postItem.style.zIndex = 9;

            moveAt(event.clientX, event.clientY)

            postItem.style.display = 'none';
            let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
            postItem.style.display = 'flex';

            if (!elemBelow) return;

            let droppableBelow = elemBelow.closest('.pererab__zone')

            if (!currentDroppable) {
                document.onmouseup = function () {
                    document.removeEventListener('mousemove', onMouseMove);
                    document.onmouseup = null;

                    postItem.classList.remove('pererab__item_moved')
                    postItem.style.position = 'relative';
                    postItem.style.left = 'auto';
                    postItem.style.top = 'auto';

                    document.querySelector('.pererab .postamat__block').append(postItem)

                    props.states.setDataItems(prev => props.states.dataItems.splice(prev.indexOf(props.thisItem), 1) )
                    props.states.setDataItems(prev => [...props.states.dataItems, props.thisItem] )

                    checkLengthList(document.querySelectorAll('.zone__list ul li').length)
                }
            }

            if (currentDroppable !== droppableBelow) {

                if (currentDroppable) {
                    document.querySelector('.pererab__zone').style.background = 'transparent';
                }
                currentDroppable = droppableBelow;
                if (currentDroppable) {
                    droppableBelow.style.background = '#26293b';
                    document.onmouseup = function () {
                        document.removeEventListener('mousemove', onMouseMove);
                        document.onmouseup = null;

                        postItem.classList.remove('pererab__item_moved')
                        postItem.style.position = 'relative';
                        postItem.style.left = 'auto';
                        postItem.style.top = 'auto';

                        droppableBelow.querySelector('ul').append(postItem)

                        checkLengthList(document.querySelectorAll('.zone__list ul li').length)
                    }
                }
            }

        }

        function checkLengthList(length) {

            if (length > 0) {
                document.querySelector('.pererab__zone .zone__empty').style.display = 'none';
                document.querySelector('.pererab__button .zone__empty').style.display = 'none';
                document.querySelector('.pererab__zone').style.background = 'transparent';

                document.querySelector('.zone__done').style.display = 'flex';

            } else {
                document.querySelector('.pererab__zone').style.background = 'transparent';
                document.querySelector('.pererab__zone .zone__empty').style.display = 'flex';
                document.querySelector('.pererab__button .zone__empty').style.display = 'flex';

                document.querySelector('.zone__done').style.display = 'none';
            }

            let sumCoins = 0;
            for (let i = 0; i < document.querySelectorAll('.zone__list li').length; i++) {
                sumCoins += +document.querySelectorAll('.zone__list li')[i].querySelector('.item__price').innerText
            }

            document.querySelector('.zone__done .rht span').innerText = sumCoins

        }

        function moveAt(pageX, pageY) {

            let coodX = pageX - shiftX;
            let coodY = pageY - shiftY;

            postItemThis.style.left = coodX + 'px';
            postItemThis.style.top = coodY + 'px';

        }

        document.addEventListener('mousemove', onMouseMove);

        document.onmouseup = function (e) {

            document.removeEventListener('mousemove', onMouseMove);
            document.onmouseup = null;

            if (!e.target.closest('.zone__list')) {

                e.target.closest('.section-right__item').querySelector('.pererab__zone ul').append(postItem)
                checkLengthList(document.querySelectorAll('.zone__list ul li').length)

            } else {

                e.target.closest('.section-right__item').querySelector('.postamat__block').append(postItem)
                checkLengthList(document.querySelectorAll('.zone__list ul li').length)

            }

        }

        postItemThis.ondragstart = function () {
            return false;
        };

    }

    return (
        <li
            className="postamat__item pererab__item"
            onMouseDown={mouseActiveDrag}
        >
            <div className="item__count">
                {props.count}
            </div>
            <div className={props.cools}>

            </div>
            <div className="item__photo">
                <img src={props.image} alt="Skin"/>
            </div>
            <div className="item__price">
                <img src="images/header__coins.svg" alt="Ico"/>
                <span>
                    {props.coins}
                </span>
            </div>
        </li>
    );
};

export default RightsItem;