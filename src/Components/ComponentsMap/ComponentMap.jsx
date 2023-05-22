import React, {useEffect, useState} from 'react';
import {useSpring, animated} from "@react-spring/web";
import {useDrag} from "react-use-gesture";
import {useDispatch, useSelector} from "react-redux";
import {reducerAirdropMembers} from "../../Redux/Reducers/reducerAirdropMembers";
import Translate from "../../Hooks/Translate";
import {reducerCoodsSwipeMap, setCoods} from "../../Redux/Reducers/reducerCoodsSwipeMap";
import {logDOM} from "@testing-library/react";


const ComponentMap = () => {

    const seconds = useSelector(state => state.reducerAirdropTimerSecond.seconds)
    const step = useSelector(state => state.reducerAirdropStep.step)
    const coodsPlane = useSelector(state => state.reducerAirdropTrajectoryPlane.data)
    const drop = useSelector(state => state.reducerAirdropDrop.drop)
    const members = useSelector(state => state.reducerAirdropMembers.list)
    const response = useSelector(state => state.reducerAirdropSocket.response)
    const session = useSelector(state => state.reducerSession.session)
    const newCoods = useSelector(state => state.reducerCoodsSwipeMap.coods)
    const [off, setOff] = useState([])
    const [{x, y}, api] = useSpring(() => ({
        x: 0,
        y: 0
    }))

    useEffect(() => {
        if (step === 'ended' || step === 'skipped') {
            api({
                x: newCoods.x,
                y: newCoods.y,
            })
        } else {
            api({
                x: off[0],
                y: off[1],
            })
        }
    }, [step])

    const bindDrag = useDrag(({offset}) => {
        setOff(offset)

        document.querySelector('.section-map__map_disabled')?.classList.remove('section-map__map_disabled')
        document.querySelector('.lock-map')?.classList.add('lock-map_hidden')

        api({
            x: offset[0],
            y: offset[1],
        })

    });


    useEffect(() => {

        if (step === 'ended' || step === 'skipped') {
            let intervalConfetti = setInterval(() => {

                if (document.getElementById('canvas')) {

                    const button = document.querySelector('.button_boom');

                    var disabled = false;
                    const canvas = document.getElementById('canvas');
                    const ctx = canvas.getContext('2d');
                    canvas.width = 300;
                    canvas.height = 300;
                    let confetti = [];
                    let sequins = [];
                    const confettiCount = 20;
                    const sequinCount = 10;
                    const gravityConfetti = 0.3;
                    const gravitySequins = 0.55;
                    const dragConfetti = 0.075;
                    const dragSequins = 0.02;
                    const terminalVelocity = 3;
                    const colors = [
                        {front: '#222333', back: '#F5AD57'}, // Purple
                        {front: '#222333', back: '#F5AD57'}, // Light Blue
                        {front: '#222333', back: '#F5AD57'}  // Darker Blue
                    ];
                    const randomRange = (min, max) => Math.random() * (max - min) + min;
                    const initConfettoVelocity = (xRange, yRange) => {
                        const x = randomRange(xRange[0], xRange[1]);
                        const range = yRange[1] - yRange[0] + 1;
                        let y = yRange[1] - Math.abs(randomRange(0, range) + randomRange(0, range) - range);
                        if (y >= yRange[1] - 1) {
                            // Occasional confetto goes higher than the max
                            y += (Math.random() < .25) ? randomRange(1, 3) : 0;
                        }
                        return {x: x, y: -y};
                    }

                    function Confetto() {
                        this.randomModifier = randomRange(0, 99);
                        this.color = colors[Math.floor(randomRange(0, colors.length))];
                        this.dimensions = {
                            x: randomRange(5, 4),
                            y: randomRange(8, 5),
                        };
                        this.position = {
                            x: randomRange(canvas.width / 2 - button.offsetWidth / 4, canvas.width / 2 + button.offsetWidth / 4),
                            y: randomRange(canvas.height / 2 + button.offsetHeight / 2 + 8, canvas.height / 2 + (1.5 * button.offsetHeight) - 8),
                        };
                        this.rotation = randomRange(0, 2 * Math.PI);
                        this.scale = {
                            x: 1,
                            y: 1,
                        };
                        this.velocity = initConfettoVelocity([-9, 9], [6, 11]);
                    }

                    Confetto.prototype.update = function () {
                        // apply forces to velocity
                        this.velocity.x -= this.velocity.x * dragConfetti;
                        this.velocity.y = Math.min(this.velocity.y + gravityConfetti, terminalVelocity);
                        this.velocity.x += Math.random() > 0.5 ? Math.random() : -Math.random();

                        // set position
                        this.position.x += this.velocity.x;
                        this.position.y += this.velocity.y;

                        // spin confetto by scaling y and set the color, .09 just slows cosine frequency
                        this.scale.y = Math.cos((this.position.y + this.randomModifier) * 0.09);
                    }

                    function Sequin() {
                        // eslint-disable-next-line no-unused-expressions
                        this.color = colors[Math.floor(randomRange(0, colors.length))].back,
                            this.radius = randomRange(1, 2),
                            this.position = {
                                x: randomRange(canvas.width / 2 - button.offsetWidth / 3, canvas.width / 2 + button.offsetWidth / 3),
                                y: randomRange(canvas.height / 2 + button.offsetHeight / 2 + 8, canvas.height / 2 + (1.5 * button.offsetHeight) - 8),
                            },
                            this.velocity = {
                                x: randomRange(-6, 6),
                                y: randomRange(-8, -12)
                            }
                    }

                    Sequin.prototype.update = function () {
                        // apply forces to velocity
                        this.velocity.x -= this.velocity.x * dragSequins;
                        this.velocity.y = this.velocity.y + gravitySequins;

                        // set position
                        this.position.x += this.velocity.x;
                        this.position.y += this.velocity.y;
                    }
                    const initBurst = () => {
                        for (let i = 0; i < confettiCount; i++) {
                            confetti.push(new Confetto());
                        }
                        for (let i = 0; i < sequinCount; i++) {
                            sequins.push(new Sequin());
                        }
                    }
                    const render = () => {
                        ctx.clearRect(0, 0, canvas.width, canvas.height);

                        confetti.forEach((confetto, index) => {
                            let width = (confetto.dimensions.x * confetto.scale.x);
                            let height = (confetto.dimensions.y * confetto.scale.y);

                            // move canvas to position and rotate
                            ctx.translate(confetto.position.x, confetto.position.y);
                            ctx.rotate(confetto.rotation);

                            // update confetto "physics" values
                            confetto.update();

                            // get front or back fill color
                            ctx.fillStyle = confetto.scale.y > 0 ? confetto.color.front : confetto.color.back;

                            // draw confetto
                            ctx.fillRect(-width / 2, -height / 2, width, height);

                            // reset transform matrix
                            ctx.setTransform(1, 0, 0, 1, 0, 0);

                            // clear rectangle where button cuts off
                            if (confetto.velocity.y < 0) {
                                ctx.clearRect(canvas.width / 2 - button.offsetWidth / 2, canvas.height / 2 + button.offsetHeight / 2, button.offsetWidth, button.offsetHeight);
                            }
                        })

                        sequins.forEach((sequin, index) => {
                            // move canvas to position
                            ctx.translate(sequin.position.x, sequin.position.y);

                            // update sequin "physics" values
                            sequin.update();

                            // set the color
                            ctx.fillStyle = sequin.color;

                            // draw sequin
                            ctx.beginPath();
                            ctx.arc(0, 0, sequin.radius, 0, 2 * Math.PI);
                            ctx.fill();

                            // reset transform matrix
                            ctx.setTransform(1, 0, 0, 1, 0, 0);

                            // clear rectangle where button cuts off
                            if (sequin.velocity.y < 0) {
                                ctx.clearRect(canvas.width / 2 - button.offsetWidth / 2, canvas.height / 2 + button.offsetHeight / 2, button.offsetWidth, button.offsetHeight);
                            }
                        })

                        // remove confetti and sequins that fall off the screen
                        // must be done in seperate loops to avoid noticeable flickering
                        confetti.forEach((confetto, index) => {
                            if (confetto.position.y >= canvas.height) confetti.splice(index, 1);
                        });
                        sequins.forEach((sequin, index) => {
                            if (sequin.position.y >= canvas.height) sequins.splice(index, 1);
                        });

                        window.requestAnimationFrame(render);
                    }
                    initBurst();

                    render()
                }

            }, 2000)

            setTimeout(() => {
                clearInterval(intervalConfetti)
            }, 10000)
            confetti()
        }

    }, [response?.airdrop?.game_state])


    const el = document?.querySelector('.map__container')

    el?.addEventListener('touchstart', () => {
        document.querySelector('body')?.classList.add('disabled_touch')
    });
    el?.addEventListener('touchend', () => {
        setTimeout(() => {
            document.querySelector('body')?.classList.remove('disabled_touch')
        }, 500)
    });
    el?.addEventListener('touchmove', () => {
        document.querySelector('body').classList.add('disabled_touch')
    });
    el?.addEventListener('touchcancel', () => {
    });

    function confetti() {
        // eslint-disable-next-line no-undef
        $.each($(".particletext.confetti"), function () {
            // eslint-disable-next-line no-undef
            var confetticount = ($(this).width() / 50) * 10;
            for (var i = 0; i <= confetticount; i++) {
                // eslint-disable-next-line no-undef
                $(this).append('<span class="particle c' + $.rnd(1, 2) + '" style="top:' + $.rnd(50, 50) + '%; left:' + $.rnd(0, 100) + '%;width:' + $.rnd(6, 8) + 'px; height:' + $.rnd(3, 4) + 'px;animation-delay: ' + ($.rnd(0, 30) / 10) + 's;"></span>');
            }
        });
    }

    // eslint-disable-next-line no-undef
    jQuery.rnd = function (m, n) {
        m = parseInt(m);
        n = parseInt(n);
        return Math.floor(Math.random() * (n - m + 1)) + m;
    }

    return (
        <animated.div
            style={{x, y}}
            {...bindDrag()}
            className="section-map__map"
        >

            {drop.isDropDown &&
                <div className="airdrop-drop-sent" style={{top: coodsPlane + 20 + "px", left: drop.coodDrop + "px"}}>
                    <div className='point' />
                    <div className='line-to-winner' />
                </div>}

            <img className="map-img" src="../images/map.png" alt="Map"/>
            <ul className="map__points">

                {
                    members?.map((item, itemNum) =>
                        item?.bags?.map((bag, bagNum) =>

                            <li key={item.user.id + bagNum} data-bag={bag.map_pos} data-x={bag.x_pos}
                                data-y={bag.y_pos}
                                className={"point" + (item.user.id === session.id ? " my_point" : "")}
                                style={{left: (bag.x_pos * 1500) + 'px', top: (bag.y_pos * 1500) + 'px'}}>
                                <div className="point__group">
                                    <div className="point__photo">
                                        <img src={item.user.avatar} alt="Photo"/>
                                        <svg width="44" height="50" viewBox="0 0 44 50" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7.08361 7.08363C15.4141 -1.24683 28.9204 -1.24683 37.2509 7.08363C45.5813 15.4141 45.5813 28.9204 37.2509 37.2509L26.4099 48.0919C24.0667 50.435 20.2677 50.435 17.9246 48.0919L7.08361 37.2509C-1.24685 28.9204 -1.24685 15.4141 7.08361 7.08363Z"
                                                fill={item.user.id !== session.id ? "#CD402A" : "#92C145"}/>
                                        </svg>
                                    </div>
                                    <div
                                        className={"point__winner-table" + ((step === 'ended' || step === 'skipped') && (response.airdrop.win_bag.x_pos === bag.x_pos && response.airdrop.win_bag.y_pos === bag.y_pos ) ? ' button_boom' : "")}>
                                        {/*<img className={'confetti-image'} src="../images/confetti-map.gif"*/}
                                        {/*     alt="Ico"/>*/}
                                        {
                                            (step === 'ended' || step === 'skipped') && (response.airdrop.win_bag.x_pos === bag.x_pos && response.airdrop.win_bag.y_pos === bag.y_pos ) ?
                                                <canvas id="canvas"></canvas> : ""
                                        }
                                        <div className="table__left"
                                             style={{background: item.user.id !== session.id ? "linear-gradient(89.07deg, #CD402A 0.69%, #371414 99.35%)" : "linear-gradient(89.07deg, #92C145 0.69%, #546742 99.35%)"}}>
                                            <img src={item.user.avatar} alt="Photo"/>
                                            <span
                                                className={((step === 'ended' || step === 'skipped') && (response.airdrop.win_bag.x_pos === bag.x_pos && response.airdrop.win_bag.y_pos === bag.y_pos ) ? " particletext confetti" : "")}>{item.user.name}</span>
                                            <div className="line"
                                                 style={{background: item.user.id !== session.id ? "#CD402A" : "#92C145"}}></div>
                                        </div>
                                        <div className="table__right">
                                            <p>
                                                <Translate>get_bank</Translate>:
                                            </p>
                                            <div className="right__bottom">
                                                <img src="../images/header__coins.svg" alt="Coins"/>
                                                <span>
                                                            {response.airdrop.bank}
                                                        </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="point__dot">
                                        <div className="line"
                                             style={{background: item.user.id !== session.id ? '#CD402A' : "#92C145"}}/>
                                        <div className="dot"
                                             style={{background: item.user.id !== session.id ? '#CD402A' : "#92C145"}}/>
                                    </div>
                                </div>
                            </li>
                        )
                    )
                }

            </ul>
            <div
                className={step === "process" || step === "drop" ? "trajectory trajectory_active" : "trajectory"}
                style={
                    {
                        width: (step === "process" ? -((seconds * 50) - 1500) : step === "drop" ? "1500" : "0") + "px",
                        transition: step === "process" ? "width 1s linear" : step === "drop" ? "width 5s linear" : "",
                        top: coodsPlane + "px"
                    }
                }>
                <div className="plane">
                    <img src="../images/plane_new.svg" alt="Plane" width="54"/>
                </div>
            </div>
            <div className="hide-map"/>
        </animated.div>
    );
};


export default ComponentMap;