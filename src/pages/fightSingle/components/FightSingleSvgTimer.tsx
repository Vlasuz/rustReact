import React, {useEffect, useState} from 'react'

interface IFightSingleSvgTimerProps {
    seconds: number
    gameState: any
}

export const FightSingleSvgTimer:React.FC<IFightSingleSvgTimerProps> = ({seconds, gameState}) => {

    const [startFrom, setStartFrom] = useState(seconds + .5)

    useEffect(() => {
        setStartFrom(seconds + .5)
    }, [seconds])

    return (
        <div className={"svg_timer"}>

            {gameState === "prepare" && <svg className={"svgTimer"} width="110" height="110" viewBox="-1 -1 110 110">

                <mask id="msk1">
                    <rect className="maskCircle maskCircle__inner" strokeOpacity=".1" rx="20">
                        {gameState === "prepare" && <animate
                            attributeName="stroke-dashoffset"
                            dur={startFrom * 1.35 + "s"}
                            begin=".9s"
                            values={`${520 - ((startFrom - 1) * 37)};520`}
                            repeatCount="indefinite"
                        />}
                    </rect>
                </mask>
                <mask id="msk2">
                    <rect className="maskCircle maskCircle__inner" strokeOpacity=".2" rx="20">
                        {gameState === "prepare" && <animate
                            attributeName="stroke-dashoffset"
                            dur={startFrom * 1.35 + "s"}
                            begin=".8s"
                            values={`${520 - ((startFrom - 1) * 37)};520`}
                            repeatCount="indefinite"
                        />}
                    </rect>
                </mask>
                <mask id="msk3">
                    <rect className="maskCircle maskCircle__inner" strokeOpacity=".3" rx="20">
                        {gameState === "prepare" && <animate
                            attributeName="stroke-dashoffset"
                            dur={startFrom * 1.35 + "s"}
                            begin=".7s"
                            values={`${520 - ((startFrom - 1) * 37)};520`}
                            repeatCount="indefinite"
                        />}
                    </rect>
                </mask>
                <mask id="msk4">
                    <rect className="maskCircle maskCircle__inner" strokeOpacity=".4" rx="20">
                        {gameState === "prepare" && <animate
                            attributeName="stroke-dashoffset"
                            dur={startFrom * 1.35 + "s"}
                            begin=".6s"
                            values={`${520 - ((startFrom - 1) * 37)};520`}
                            repeatCount="indefinite"
                        />}
                    </rect>
                </mask>
                <mask id="msk5">
                    <rect className="maskCircle maskCircle__inner" strokeOpacity=".5" rx="20">
                        {gameState === "prepare" && <animate
                            attributeName="stroke-dashoffset"
                            dur={startFrom * 1.35 + "s"}
                            begin=".5s"
                            values={`${520 - ((startFrom - 1) * 37)};520`}
                            repeatCount="indefinite"
                        />}
                    </rect>
                </mask>
                <mask id="msk6">
                    <rect className="maskCircle maskCircle__inner" strokeOpacity=".6" rx="20">
                        {gameState === "prepare" && <animate
                            attributeName="stroke-dashoffset"
                            dur={startFrom * 1.35 + "s"}
                            begin=".4s"
                            values={`${520 - ((startFrom - 1) * 37)};520`}
                            repeatCount="indefinite"
                        />}
                    </rect>
                </mask>
                <mask id="msk7">
                    <rect className="maskCircle maskCircle__inner" strokeOpacity=".7" rx="20">
                        {gameState === "prepare" && <animate
                            attributeName="stroke-dashoffset"
                            dur={startFrom * 1.35 + "s"}
                            begin=".3s"
                            values={`${520 - ((startFrom - 1) * 37)};520`}
                            repeatCount="indefinite"
                        />}
                    </rect>
                </mask>
                <mask id="msk8">
                    <rect className="maskCircle maskCircle__inner" strokeOpacity=".8" rx="20">
                        {gameState === "prepare" && <animate
                            attributeName="stroke-dashoffset"
                            dur={startFrom * 1.35 + "s"}
                            begin=".2s"
                            values={`${520 - ((startFrom - 1) * 37)};520`}
                            repeatCount="indefinite"
                        />}
                    </rect>
                </mask>
                <mask id="msk9">
                    <rect className="maskCircle maskCircle__inner" strokeOpacity=".9" rx="20">
                        {gameState === "prepare" && <animate
                            attributeName="stroke-dashoffset"
                            dur={startFrom * 1.35 + "s"}
                            begin=".1s"
                            values={`${520 - ((startFrom - 1) * 37)};520`}
                            repeatCount="indefinite"
                        />}
                    </rect>
                </mask>
                <mask id="msk10">
                    <rect className="maskCircle maskCircle__inner" strokeOpacity="1" rx="20">
                        {gameState === "prepare" && <animate
                            attributeName="stroke-dashoffset"
                            dur={startFrom * 1.35 + "s"}
                            begin="0s"
                            values={`${520 - ((startFrom - 1) * 37)};520`}
                            repeatCount="indefinite"
                        />}
                    </rect>
                </mask>

                <rect className="maskCircle" rx="20" mask="url(#msk1)"/>
                <rect className="maskCircle" rx="20" mask="url(#msk2)"/>
                <rect className="maskCircle" rx="20" mask="url(#msk3)"/>
                <rect className="maskCircle" rx="20" mask="url(#msk4)"/>
                <rect className="maskCircle" rx="20" mask="url(#msk5)"/>
                <rect className="maskCircle" rx="20" mask="url(#msk6)"/>
                <rect className="maskCircle" rx="20" mask="url(#msk7)"/>
                <rect className="maskCircle" rx="20" mask="url(#msk8)"/>
                <rect className="maskCircle" rx="20" mask="url(#msk9)"/>
                <rect className="maskCircle" rx="20" mask="url(#msk10)"/>

            </svg>}

            {(gameState === "duel" || gameState === "ended") && <svg className={"svgTimer"} width="110" height="110" viewBox="-1 -1 110 110">

                <mask id="msk1">
                    <rect className="maskCircle maskCircle__inner" strokeOpacity=".1" rx="20">
                        {gameState === "prepare" && <animate
                            attributeName="stroke-dashoffset"
                            dur={startFrom * 1.35 + "s"}
                            begin=".9s"
                            values={`${520 - ((startFrom - 1) * 37)};520`}
                            repeatCount="indefinite"
                        />}
                    </rect>
                </mask>
                <mask id="msk2">
                    <rect className="maskCircle maskCircle__inner" strokeOpacity=".2" rx="20">
                        {gameState === "prepare" && <animate
                            attributeName="stroke-dashoffset"
                            dur={startFrom * 1.35 + "s"}
                            begin=".8s"
                            values={`${520 - ((startFrom - 1) * 37)};520`}
                            repeatCount="indefinite"
                        />}
                    </rect>
                </mask>
                <mask id="msk3">
                    <rect className="maskCircle maskCircle__inner" strokeOpacity=".3" rx="20">
                        {gameState === "prepare" && <animate
                            attributeName="stroke-dashoffset"
                            dur={startFrom * 1.35 + "s"}
                            begin=".7s"
                            values={`${520 - ((startFrom - 1) * 37)};520`}
                            repeatCount="indefinite"
                        />}
                    </rect>
                </mask>
                <mask id="msk4">
                    <rect className="maskCircle maskCircle__inner" strokeOpacity=".4" rx="20">
                        {gameState === "prepare" && <animate
                            attributeName="stroke-dashoffset"
                            dur={startFrom * 1.35 + "s"}
                            begin=".6s"
                            values={`${520 - ((startFrom - 1) * 37)};520`}
                            repeatCount="indefinite"
                        />}
                    </rect>
                </mask>
                <mask id="msk5">
                    <rect className="maskCircle maskCircle__inner" strokeOpacity=".5" rx="20">
                        {gameState === "prepare" && <animate
                            attributeName="stroke-dashoffset"
                            dur={startFrom * 1.35 + "s"}
                            begin=".5s"
                            values={`${520 - ((startFrom - 1) * 37)};520`}
                            repeatCount="indefinite"
                        />}
                    </rect>
                </mask>
                <mask id="msk6">
                    <rect className="maskCircle maskCircle__inner" strokeOpacity=".6" rx="20">
                        {gameState === "prepare" && <animate
                            attributeName="stroke-dashoffset"
                            dur={startFrom * 1.35 + "s"}
                            begin=".4s"
                            values={`${520 - ((startFrom - 1) * 37)};520`}
                            repeatCount="indefinite"
                        />}
                    </rect>
                </mask>
                <mask id="msk7">
                    <rect className="maskCircle maskCircle__inner" strokeOpacity=".7" rx="20">
                        {gameState === "prepare" && <animate
                            attributeName="stroke-dashoffset"
                            dur={startFrom * 1.35 + "s"}
                            begin=".3s"
                            values={`${520 - ((startFrom - 1) * 37)};520`}
                            repeatCount="indefinite"
                        />}
                    </rect>
                </mask>
                <mask id="msk8">
                    <rect className="maskCircle maskCircle__inner" strokeOpacity=".8" rx="20">
                        {gameState === "prepare" && <animate
                            attributeName="stroke-dashoffset"
                            dur={startFrom * 1.35 + "s"}
                            begin=".2s"
                            values={`${520 - ((startFrom - 1) * 37)};520`}
                            repeatCount="indefinite"
                        />}
                    </rect>
                </mask>
                <mask id="msk9">
                    <rect className="maskCircle maskCircle__inner" strokeOpacity=".9" rx="20">
                        {gameState === "prepare" && <animate
                            attributeName="stroke-dashoffset"
                            dur={startFrom * 1.35 + "s"}
                            begin=".1s"
                            values={`${520 - ((startFrom - 1) * 37)};520`}
                            repeatCount="indefinite"
                        />}
                    </rect>
                </mask>
                <mask id="msk10">
                    <rect className="maskCircle maskCircle__inner" strokeOpacity="1" rx="20">
                        {gameState === "prepare" && <animate
                            attributeName="stroke-dashoffset"
                            dur={startFrom * 1.35 + "s"}
                            begin="0s"
                            values={`${520 - ((startFrom - 1) * 37)};520`}
                            repeatCount="indefinite"
                        />}
                    </rect>
                </mask>

                <rect className="maskCircle" rx="20" mask="url(#msk1)"/>
                <rect className="maskCircle" rx="20" mask="url(#msk2)"/>
                <rect className="maskCircle" rx="20" mask="url(#msk3)"/>
                <rect className="maskCircle" rx="20" mask="url(#msk4)"/>
                <rect className="maskCircle" rx="20" mask="url(#msk5)"/>
                <rect className="maskCircle" rx="20" mask="url(#msk6)"/>
                <rect className="maskCircle" rx="20" mask="url(#msk7)"/>
                <rect className="maskCircle" rx="20" mask="url(#msk8)"/>
                <rect className="maskCircle" rx="20" mask="url(#msk9)"/>
                <rect className="maskCircle" rx="20" mask="url(#msk10)"/>

            </svg>}

        </div>
    )
}
