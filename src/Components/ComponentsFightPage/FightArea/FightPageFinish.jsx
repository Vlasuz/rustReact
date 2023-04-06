import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import FightAreaTop from "./FightAreaTop";
import {logDOM} from "@testing-library/react";
import {userBalanceAddCoins} from "../../../Redux/Reducers/reducerUserBalance";
import {useNavigate} from "react-router-dom";
import {userInventoryAdd, userInventoryRemove} from "../../../Redux/actions";
import GlobalLink from "../../../Hooks/GlobalLink";
import Translate from "../../../Hooks/Translate";
import 'jquery'
import {setSound} from "../../../Redux/Reducers/reducerSound";

const FightPageFinish = (props) => {

    const navigate = useNavigate();
    const userData = useSelector(state => state.reducerUserData.data)
    const response = useSelector(state => state.reducerFightsResponse.response)
    const [isResults, setIsResults] = useState(false)
    const settings = useSelector(state => state.reducerSettings.settings);
    const [isActivePage, setIsActivePage] = useState('')
    const dispatch = useDispatch()

    const opponent = response?.fight?.first_player?.user.id === userData?.id ? response?.fight?.second_player : response?.fight?.first_player
    const myperson = response?.fight?.first_player?.user.id === userData?.id ? response?.fight?.first_player : response?.fight?.second_player


    const opponentDefense = () => {
        const armorHead = opponent?.defense.includes("head") ? "x" : "i"
        const armorBody = opponent?.defense.includes("body") ? "x" : "i"
        const armorLegs = opponent?.defense.includes("legs") ? "x" : "i"

        const skin = opponent?.user?.chosen_skin?.gallery ?
            "https://" + GlobalLink() + "/" + opponent?.user?.chosen_skin?.gallery[armorHead + armorBody + armorLegs] :
            "https://" + GlobalLink() + "/" + settings?.default_fight_skin?.gallery[armorHead + armorBody + armorLegs];

        return <img src={skin} alt="Persone"/>

    }
    const mypersonDefense = () => {
        const armorHead = myperson?.defense.includes("head") ? "x" : "i"
        const armorBody = myperson?.defense.includes("body") ? "x" : "i"
        const armorLegs = myperson?.defense.includes("legs") ? "x" : "i"

        const skin = myperson?.user?.chosen_skin?.gallery ?
            "https://" + GlobalLink() + "/" + myperson?.user?.chosen_skin?.gallery[armorHead + armorBody + armorLegs] :
            "https://" + GlobalLink() + "/" + settings?.default_fight_skin?.gallery[armorHead + armorBody + armorLegs];

        return <img src={skin} alt="Persone"/>
    }


    useEffect(() => {

        if (response?.fight?.first_player?.hit !== response?.fight?.second_player.hit) {

            if (response?.fight.game_state === 'ended') {

                if(response?.fight?.winner?.user?.id === userData?.id){
                    dispatch(setSound('sound13'))
                } else {
                    dispatch(setSound('sound17'))
                }

                setIsResults(true)

                setTimeout(() => {
                    navigate('/')
                }, 5000)

                if (userData.id === response.fight.winner.user.id) {
                    !!response?.fight?.first_player?.items?.length && dispatch(userInventoryAdd([...response?.fight?.first_player.items, ...response?.fight?.second_player.items]))
                }

            }

        } else {
            setTimeout(() => {
                setIsActivePage(' section-fight_hide')
            }, 6500)
        }

        setInterval(() => {
            setTimeout(() => {

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

            }, 500)
        }, 2000)

    }, [response])

    return (
        <section className={"section-fight" + isActivePage}>
            <div className="section-fight__lft">
                <div
                    className={"section-fight__confetti " + (isResults && response?.fight?.winner?.user?.id === userData?.id ? "section-fight__confetti_active" : "")}>
                    <img src="../images/confetti-fight.gif" alt="Confetti"/>
                </div>
                {<FightAreaTop
                    userInfo={response?.fight?.first_player?.user.id === userData?.id ? response?.fight?.first_player : response?.fight?.second_player}/>}
                <div className="section-fight__persone">
                    <div className="persone__attacked">
                        <div
                            className={
                                (opponent?.attack.includes('head') ? "attacked__bullet_active" : "") +
                                " attacked__bullet attacked__bullet-head" +
                                ((opponent?.attack.includes('head') === myperson?.defense.includes('head')) ? " attacked__bullet_good" : " attacked__bullet_bad")
                            }
                        >
                            <img src="../images/bullet.svg" alt="Ico"/>
                            <div className="line" />
                        </div>
                        <div
                            className={
                                (opponent?.attack.includes('body') ? "attacked__bullet_active" : "") +
                                " attacked__bullet attacked__bullet-head" +
                                ((opponent?.attack.includes('body') === myperson?.defense.includes('body')) ? " attacked__bullet_good" : " attacked__bullet_bad")
                            }
                        >
                            <img src="../images/bullet.svg" alt="Ico"/>
                            <div className="line">

                            </div>
                        </div>
                        <div
                            className={
                                (opponent?.attack.includes('legs') ? "attacked__bullet_active" : "") +
                                " attacked__bullet attacked__bullet-head" +
                                ((opponent?.attack.includes('legs') === myperson?.defense.includes('legs')) ? " attacked__bullet_good" : " attacked__bullet_bad")
                            }
                        >
                            <img src="../images/bullet.svg" alt="Ico"/>
                            <div className="line" />
                        </div>
                    </div>
                    <div className="persone__start">
                        {mypersonDefense()}
                    </div>
                </div>
                <div className="section-fight__bottom section-fight__bottom_finish">
                    {
                        isResults &&
                        <div
                            className={"bottom__status " + (response?.fight?.winner?.user?.id === userData?.id ? "bottom__status_winner button_boom" : "bottom__status_looser")}>
                            {
                                response?.fight?.winner?.user?.id === userData?.id ? <canvas id="canvas"></canvas> : ""
                            }
                            <img
                                src={"../images/" + (response?.fight?.winner?.user?.id === userData?.id ? "victory-cup.svg" : "fight-looser.svg")}
                                alt="Win"/>
                        </div>
                    }
                </div>
            </div>
            <div className="section-fight__center">
                <div className="center__finish">
                    <svg className={"svgTimer"} width="110" height="110" viewBox="-1 -1 110 110">

                        <mask id="msk1">
                            <rect className="maskCircle maskCircle__inner" strokeOpacity=".1" rx="20">

                            </rect>
                        </mask>
                        <mask id="msk2">
                            <rect className="maskCircle maskCircle__inner" strokeOpacity=".2" rx="20">

                            </rect>
                        </mask>
                        <mask id="msk3">
                            <rect className="maskCircle maskCircle__inner" strokeOpacity=".3" rx="20">

                            </rect>
                        </mask>
                        <mask id="msk4">
                            <rect className="maskCircle maskCircle__inner" strokeOpacity=".4" rx="20">

                            </rect>
                        </mask>
                        <mask id="msk5">
                            <rect className="maskCircle maskCircle__inner" strokeOpacity=".5" rx="20">

                            </rect>
                        </mask>
                        <mask id="msk6">
                            <rect className="maskCircle maskCircle__inner" strokeOpacity=".6" rx="20">

                            </rect>
                        </mask>
                        <mask id="msk7">
                            <rect className="maskCircle maskCircle__inner" strokeOpacity=".7" rx="20">

                            </rect>
                        </mask>
                        <mask id="msk8">
                            <rect className="maskCircle maskCircle__inner" strokeOpacity=".8" rx="20">

                            </rect>
                        </mask>
                        <mask id="msk9">
                            <rect className="maskCircle maskCircle__inner" strokeOpacity=".9" rx="20">

                            </rect>
                        </mask>
                        <mask id="msk10">
                            <rect className="maskCircle maskCircle__inner" strokeOpacity="1" rx="20">

                            </rect>
                        </mask>


                        <rect className="maskCircle" rx="20" mask="url(#msk1)"></rect>
                        <rect className="maskCircle" rx="20" mask="url(#msk2)"></rect>
                        <rect className="maskCircle" rx="20" mask="url(#msk3)"></rect>
                        <rect className="maskCircle" rx="20" mask="url(#msk4)"></rect>
                        <rect className="maskCircle" rx="20" mask="url(#msk5)"></rect>
                        <rect className="maskCircle" rx="20" mask="url(#msk6)"></rect>
                        <rect className="maskCircle" rx="20" mask="url(#msk7)"></rect>
                        <rect className="maskCircle" rx="20" mask="url(#msk8)"></rect>
                        <rect className="maskCircle" rx="20" mask="url(#msk9)"></rect>
                        <rect className="maskCircle" rx="20" mask="url(#msk10)"></rect>

                    </svg>
                    <img src="../images/fight-finish-icon.svg" alt="Ico"/>
                    <p>
                        <Translate>duel</Translate>
                    </p>
                </div>
            </div>
            <div className="section-fight__rht">
                <div
                    className={"section-fight__confetti " + (isResults && response?.fight?.winner?.user?.id !== userData?.id ? " section-fight__confetti_active" : "")}>
                    <img src="../images/confetti-fight.gif" alt="Confetti"/>
                </div>
                {<FightAreaTop
                    userInfo={response?.fight?.first_player?.user.id !== userData?.id ? response?.fight?.first_player : response?.fight?.second_player}/>}
                <div className="section-fight__persone section-fight__persone-hit">
                    <div className="persone__attacked">
                        <div
                            className={
                                (myperson?.attack.includes('head') ? "attacked__bullet_active" : "") +
                                " attacked__bullet attacked__bullet-head" +
                                ((opponent?.defense.includes('head') === myperson?.attack.includes('head')) ? " attacked__bullet_good" : " attacked__bullet_bad")
                            }
                        >
                            <img src="../images/bullet.svg" alt="Ico"/>
                            <div className="line"/>
                        </div>
                        <div
                            className={
                                (myperson?.attack.includes('body') ? "attacked__bullet_active" : "") +
                                " attacked__bullet attacked__bullet-body" +
                                ((opponent?.defense.includes('body') === myperson?.attack.includes('body')) ? " attacked__bullet_good" : " attacked__bullet_bad")
                            }
                        >
                            <img src="../images/bullet.svg" alt="Ico"/>
                            <div className="line"/>
                        </div>
                        <div
                            className={
                                (myperson?.attack.includes('legs') ? "attacked__bullet_active" : "") +
                                " attacked__bullet attacked__bullet-legs" +
                                ((opponent?.defense.includes('legs') === myperson?.attack.includes('legs')) ? " attacked__bullet_good" : " attacked__bullet_bad")
                            }
                        >
                            <img src="../images/bullet.svg" alt="Ico"/>
                            <div className="line"/>
                        </div>
                    </div>
                    <div className="persone__red">
                        <img className="head-hit" src="../images/head-hit.png" alt="Photo" width="72"/>
                        <img className="body-hit" src="../images/body-hit.png" alt="Photo" width="300"/>
                        <img className="legs-hit" src="../images/legs-hit.png" alt="Photo" width="300"/>
                    </div>
                    <div className="persone__start">
                        {opponentDefense()}
                    </div>
                </div>
                <div className="section-fight__bottom section-fight__bottom_finish">
                    {
                        isResults &&
                        <div
                            className={"bottom__status " + (response?.fight?.winner?.user?.id !== userData?.id ? "bottom__status_winner button_boom" : "bottom__status_looser")}>
                            {
                                response?.fight?.winner?.user?.id !== userData?.id ? <canvas id="canvas"></canvas> : ""
                            }
                            <img
                                src={"../images/" + (response?.fight?.winner?.user?.id !== userData?.id ? "victory-cup.svg" : "fight-looser.svg")}
                                alt="Win"/>
                        </div>
                    }
                </div>
            </div>
        </section>
    );
};

export default FightPageFinish;