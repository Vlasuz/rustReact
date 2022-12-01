import React, {useEffect} from 'react';

const RightsItem = (props) => {

    let mouseActiveDrag = function (event) {

        let postItem = event.target.closest('.postamat__item');

        console.log(postItem)

        let currentDroppable = null;
        let postItemThis = postItem;

        let shiftX = event.clientX - postItemThis.getBoundingClientRect().left;
        let shiftY = event.clientY - postItemThis.getBoundingClientRect().top;

        function moveAt(pageX, pageY) {

            let coodX = pageX - shiftX;
            let coodY = pageY - shiftY;

            postItemThis.style.left = coodX + 'px';
            postItemThis.style.top = coodY + 'px';

        }

        document.addEventListener('mousemove', onMouseMove);


        // DRAG & DROP
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

                    document.querySelector('.pererab .postamat__block').prepend(postItem)

                    console.log(postItem)

                    props.states.setDataItems(prev =>
                        prev.filter(itemOld => itemOld.id !== props.item.id)
                    )
                    props.states.setDataItems(prev => [...prev, props.item])

                }
            }

            if (currentDroppable !== droppableBelow) {

                if (currentDroppable) {
                    document.querySelector('.pererab__zone').style.background = 'transparent';
                }
                currentDroppable = droppableBelow;
                if (currentDroppable && document.querySelectorAll('.zone__list ul li')?.length < 6) {
                    droppableBelow.style.background = '#26293b';
                    document.onmouseup = function () {
                        document.removeEventListener('mousemove', onMouseMove);
                        document.onmouseup = null;

                        postItem.classList.remove('pererab__item_moved')
                        postItem.style.position = 'relative';
                        postItem.style.left = 'auto';
                        postItem.style.top = 'auto';

                        document.querySelector('.pererab .postamat__block').prepend(postItem)

                        props.states.setDataItems(prev =>
                            prev.filter(item => item.id !== props.item.id)
                        )
                        props.setListInPererab(prev => [...prev, props.item])
                        props.states.setSumOfPererab(prev => prev + props.item.cost)

                    }
                }
            }

        }

        // DRAG & DROP


        // ONLY CLICK
        document.onmouseup = function (e) {

            document.removeEventListener('mousemove', onMouseMove);
            document.onmouseup = null;

            if (!e.target.closest('.zone__list') && document.querySelectorAll('.zone__list ul li')?.length < 6) {

                props.states.setDataItems(prev =>
                    prev.filter(item => item.id !== props.item.id)
                )
                props.setListInPererab(prev => [...prev, props.item])
                props.states.setSumOfPererab(prev => prev + props.item.cost)

            }

        }
        // ONLY CLICK

        postItemThis.ondragstart = function () {
            return false;
        };

    }

    function checkLengthList(length) {

        if (length > 0 && length < 7) {
            document.querySelector('.pererab__zone .zone__empty').style.display = 'none';
            document.querySelector('.pererab__button .zone__empty').style.display = 'none';
            document.querySelector('.pererab__zone').style.background = 'transparent';

            document.querySelector('.zone__done').style.display = 'flex';
            document.querySelector('.pererab__button').style.border = 'none';

        } else {
            document.querySelector('.pererab__zone').style.background = 'transparent';
            document.querySelector('.pererab__zone .zone__empty').style.display = 'flex';
            document.querySelector('.pererab__button .zone__empty').style.display = 'flex';

            document.querySelector('.zone__done').style.display = 'none';
            document.querySelector('.pererab__button').style.border = '1px dashed rgba(162,171,197,.15)';
        }

    }

    useEffect(() => {
        checkLengthList(document.querySelectorAll('.zone__list ul li').length)
    })

    return (
        <li
            className="postamat__item pererab__item"
            onMouseDown={e => mouseActiveDrag(e)}
        >
            <div className="item__count">
                {props.item.count}
            </div>
            <div className={
                props.item.rarity === 1 ? 'item__cool clothes__cool_green' :
                    props.item.rarity === 2 ? 'item__cool clothes__cool_blue' :
                        props.item.rarity === 3 ? 'item__cool clothes__cool_red' :
                            'item__cool clothes__cool_grey'
            }>

            </div>
            <div className="item__photo">
                <img src={props.item.image} alt="Skin"/>
            </div>
            <div className="item__price">
                <img src="images/header__coins.svg" alt="Ico"/>
                <span>
                    {props.item.cost}
                </span>
            </div>
        </li>
    );
};

export default RightsItem;