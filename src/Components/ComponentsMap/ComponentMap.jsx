import React, {useEffect} from 'react';

const ComponentMap = () => {

    function moveSleepers(sleeper) {

        let currentDroppable = null;

        sleeper.querySelector('button').addEventListener('mousedown', function (event) {

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

                let droppableBelow = elemBelow.closest('.section-map__map')

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

                // currentDroppable.append(item)
            }

            function overMap(item) {
                currentDroppable.classList.add('point-inner')

                document.querySelector('body').append(sleeper);
            }

            document.addEventListener('mousemove', onMouseMove)

            document.onmouseup = function () {
                document.removeEventListener('mousemove', onMouseMove);
                sleeper.onmouseup = null;

                sleeper.style.left = cX - currentDroppable.getBoundingClientRect().left + 'px';
                sleeper.style.top = cY - currentDroppable.getBoundingClientRect().top + 'px';
                currentDroppable.append(ii);

            }

            sleeper.ondragstart = function () {
                return false;
            };

        })
    }

    let pointXOfScale = 0
    let pointYOfScale = 0

    let boundingTop = null
    let boundingLeft = null
    let sum = null

    useEffect(() => {
    boundingTop = document.querySelector('.section-map__map').getBoundingClientRect().top
    boundingLeft = document.querySelector('.section-map__map').getBoundingClientRect().left
    sum = 1;

    })

    let mousemovePointScale = function (event) {
        pointXOfScale = event.offsetX
        pointYOfScale = event.offsetY
    }

    // document.querySelector('.section-map__map').addEventListener('wheel', function (event) {
    //
    //
    //     this.style.transformOrigin = `${pointXOfScale}px ${pointYOfScale}px`;
    //
    //     let count = event.deltaY / 100;
    //
    //     boundingTop = document.querySelector('.section-map__map').getBoundingClientRect().top;
    //     boundingLeft = document.querySelector('.section-map__map').getBoundingClientRect().left;
    //
    //     sum -= count;
    //
    //     if (sum > 0.99) {
    //         this.style.transform = `scale(${sum})`;
    //     } else if (sum < 0.8) {
    //         sum = 1
    //         this.style.transform = `scale(${sum})`;
    //     }
    //     return;
    // })

    let mouseDownMap = function (event) {

        if (!event.target.closest('.sleepers__item')) {

            let map = event.target.closest('.section-map__map');

            let shiftX = event.clientX - map.getBoundingClientRect().left;
            let shiftY = event.clientY - map.getBoundingClientRect().top;

            moveAt(event.clientX, event.clientY);

            function onMouseMove(event) {
                moveAt(event.clientX, event.clientY)
            }

            function moveAt(pageX, pageY) {

                let coodX = pageX - shiftX - boundingLeft;
                let coodY = pageY - shiftY - boundingTop;

                map.style.left = coodX + 'px';
                map.style.top = coodY + 'px';

                // map.style.transform = `translate(${-coodX}px, ${-coodY}px)`

            }

            document.addEventListener('mousemove', onMouseMove);

            document.onmouseup = function () {
                document.removeEventListener('mousemove', onMouseMove);
                document.onmouseup = null;
            }

            map.ondragstart = function () {
                return false;
            };

        }
    }


    return (
        <div
            className="section-map__map"
            onMouseDown={mouseDownMap}
        >
            <img className="map-img" src="images/map.png" alt="Map"/>
            <div
                className="map__points"
                onMouseMove={mousemovePointScale}
            >
                <div
                    className="point"
                    style={
                        {
                            left: '500px',
                            top: '200px',
                        }
                    }
                >
                    <div className="point__winner">
                        <div className="line"></div>
                        <div
                            className="circle1"
                            style={
                                {
                                    background: 'radial-gradient(50% 50% at 50% 50%, rgba(245, 173, 87, 0) 0%, rgba(245, 173, 87, 0.4) 100%)'
                                }
                            }
                        >

                        </div>
                        <div
                            className="circle2"
                            style={
                                {
                                    background: 'radial-gradient(50% 50% at 50% 50%, rgba(245, 173, 87, 0) 0%, rgba(245, 173, 87, 0.1) 100%)'
                                }
                            }
                        >

                        </div>
                        <div
                            className="dot"
                            style={
                                {
                                    background: '#92C145'
                                }
                            }
                        >

                        </div>
                    </div>
                    <div className="point__group">
                        <div className="point__photo">
                            <img src="images/user2.png" alt="Photo"/>
                            <svg width="44" height="50" viewBox="0 0 44 50" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.08361 7.08363C15.4141 -1.24683 28.9204 -1.24683 37.2509 7.08363C45.5813 15.4141 45.5813 28.9204 37.2509 37.2509L26.4099 48.0919C24.0667 50.435 20.2677 50.435 17.9246 48.0919L7.08361 37.2509C-1.24685 28.9204 -1.24685 15.4141 7.08361 7.08363Z"
                                    fill="#92C145"/>
                            </svg>
                        </div>
                        <div className="point__dot">
                            <div
                                className="line"
                                style={
                                    {
                                        background: '#92C145'
                                    }
                                }
                            >

                            </div>
                            <div
                                className="dot"
                                style={
                                    {
                                        background: '#92C145'
                                    }
                                }
                            >

                            </div>
                        </div>
                    </div>
                </div>
                <div className="point"
                     style={
                         {
                             left: '600px',
                             top: '400px',
                         }
                     }
                >
                    <div className="point__winner">
                        <div className="line">

                        </div>
                        <div
                            className="circle1"
                            style={
                                {
                                    background: 'radial-gradient(50% 50% at 50% 50%, rgba(245, 173, 87, 0) 0%, rgba(245, 173, 87, 0.4) 100%)'
                                }
                            }
                        >

                        </div>
                        <div
                            className="circle2"
                            style={
                                {
                                    background: 'radial-gradient(50% 50% at 50% 50%, rgba(245, 173, 87, 0) 0%, rgba(245, 173, 87, 0.1) 100%)'
                                }
                            }
                        >

                        </div>
                        <div className="dot"
                             style={
                                 {
                                     background: '#F5AD57',
                                 }
                             }
                        >

                        </div>
                    </div>
                    <div className="point__group">
                        <div className="point__photo">
                            <img src="images/user.jpeg" alt="Photo"/>
                            <svg width="44" height="50" viewBox="0 0 44 50" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.08361 7.08363C15.4141 -1.24683 28.9204 -1.24683 37.2509 7.08363C45.5813 15.4141 45.5813 28.9204 37.2509 37.2509L26.4099 48.0919C24.0667 50.435 20.2677 50.435 17.9246 48.0919L7.08361 37.2509C-1.24685 28.9204 -1.24685 15.4141 7.08361 7.08363Z"
                                    fill="#F5AD57"/>
                            </svg>
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
                </div>
            </div>
            <div className="trajectory">
                <div className="plane">
                    <img src="images/plane.png" alt="Plane" width="54"/>
                </div>
            </div>
        </div>
    );
};

export default ComponentMap;