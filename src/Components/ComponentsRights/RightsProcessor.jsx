import React, {useEffect, useState} from 'react';
import RightsItem from "./RightsItem";
import RightsFilterForm from "./RightsFilterForm";

const RightsProcessor = (props) => {

    const [listInPererab, setListInPererab] = useState([])
    const [sortArray, setSortArray] = useState(
        {
            search: '',
            filterRadio: '',
            filterCheckbox: false,
        }
    )


    let pererabCoins = function (e) {
        props.states.setCoins(+props.states.coins + +e.target.closest('.pererab__button').querySelector('.rht span').innerText)
        document.querySelector('.zone__list ul').innerHTML = ''
        document.querySelector('.zone__done').style.display = 'none'
        document.querySelectorAll('.zone__empty').forEach(zone => {
            zone.style.display = 'flex'
        })

        props.states.setSumOfPererab(0)
    }


    let mouseActiveDrag = function (event, item) {

        let postItem = event.target.closest('.postamat__item');

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

            let droppableBelow = elemBelow.closest('.postamat__block')

            if (!currentDroppable) {
                document.onmouseup = function () {
                    document.removeEventListener('mousemove', onMouseMove);
                    document.onmouseup = null;

                    postItem.classList.remove('pererab__item_moved')
                    postItem.style.position = 'relative';
                    postItem.style.left = 'auto';
                    postItem.style.top = 'auto';

                    // document.querySelector('.pererab .postamat__block').prepend(postItem)
                    postItem.remove()

                    // setListInPererab(prev => {
                    //     console.log(prev[0])
                    //     // prev.filter(itemFilter => itemFilter !== item)
                    // })

                    props.states.setDataItems(prev => [...prev, item])
                    props.states.setSumOfPererab(prev => prev - item.cost)

                }
            }

            if (currentDroppable !== droppableBelow) {

                if (currentDroppable) {
                    document.querySelector('.pererab__zone').style.background = 'transparent';
                }
                currentDroppable = droppableBelow;
                if (currentDroppable) {
                    document.onmouseup = function () {
                        document.removeEventListener('mousemove', onMouseMove);
                        document.onmouseup = null;

                        postItem.classList.remove('pererab__item_moved')
                        postItem.style.position = 'relative';
                        postItem.style.left = 'auto';
                        postItem.style.top = 'auto';

                        // document.querySelector('.pererab .postamat__block').prepend(postItem)
                        postItem.remove()

                        // setListInPererab(prev =>
                        //     prev.filter(itemOld => itemOld.id !== item.id)
                        // )
                        props.states.setDataItems(prev => [...prev, item])
                        props.states.setSumOfPererab(prev => prev - item.cost)

                    }
                }
            }

        }

        // DRAG & DROP


        // ONLY CLICK
        document.onmouseup = function (e) {

            document.removeEventListener('mousemove', onMouseMove);
            document.onmouseup = null;

            setListInPererab(prev =>
                prev.filter(itemOld => itemOld.id !== item.id)
            )
            props.states.setDataItems(prev => [...prev, item])
            props.states.setSumOfPererab(prev => prev - item.cost)


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


    // const removeFromPererab = (e, item) => {
    //
    //     setListInPererab(prev =>
    //         prev.filter(itemOld => itemOld.id !== item.id)
    //     )
    //     props.states.setDataItems(prev => [...prev, item])
    //
    //     props.states.setSumOfPererab(prev => prev - item.cost)
    //
    // }


    return (
        <div className="postamat pererab">
            <RightsFilterForm
                sortArray={sortArray}
                setSortArray={setSortArray}
            />

            <hr/>
            <ul className="postamat__block">

                {
                    props.states.dataItems
                        ?.filter(item => item.title.includes(sortArray.search))
                        ?.sort((a, b) => (!sortArray.filterCheckbox) ?
                            ((sortArray.filterRadio === "filterPrice") ? a.cost : a.rarity) - ((sortArray.filterRadio) === "filterPrice" ? b.cost : b.rarity) :
                            ((sortArray.filterRadio === "filterPrice") ? b.cost : b.rarity) - ((sortArray.filterRadio) === "filterPrice" ? a.cost : a.rarity))
                        .map((item, itemNum) =>
                            <RightsItem
                                states={props.states}
                                key={itemNum}
                                item={item}
                                listInPererab={listInPererab}
                                setListInPererab={setListInPererab}
                            />
                        )
                }


            </ul>
            <div className="pererab__zone">
                <div className="zone__empty">
                    <p>Зона переработки</p>
                    <img src="images/pererab-ico.svg" alt="Ico"/>
                </div>
                <div className="zone__list">
                    <ul>
                        {
                            listInPererab?.map((item, itemNum) =>
                                <li
                                    className="postamat__item pererab__item"
                                    key={itemNum}
                                    // onClick={e => removeFromPererab(e, item)}
                                    onMouseDown={e => mouseActiveDrag(e, item)}
                                >
                                    <div className="item__count">
                                        {item.count}
                                    </div>
                                    <div className={item.cools}>

                                    </div>
                                    <div className="item__photo">
                                        <img src={item.image} alt="Skin"/>
                                    </div>
                                    <div className="item__price">
                                        <img src="images/header__coins.svg" alt="Ico"/>
                                        <span>{item.coins}</span>
                                    </div>
                                </li>
                            )
                        }


                    </ul>
                </div>
            </div>
            <div className="pererab__button">
                <div className="zone__empty">
                    <p>Разборщик пуст</p>
                </div>
                <button
                    className="zone__done"
                    onClick={e => pererabCoins(e)}
                >
                    <div className="lft">
                        <img src="images/pererab-button.svg" alt="Ico"/>
                        <span>Переработать</span>
                    </div>
                    <div className="rht">
                        <img src="images/header__coins.svg" alt="Ico"/>
                        <span>
                            {props.states.sumOfPererab}
                        </span>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default RightsProcessor;