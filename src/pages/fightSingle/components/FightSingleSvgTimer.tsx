import React, {useEffect, useState} from 'react'

interface IFightSingleSvgTimerProps {
    seconds: number
    gameState: any
    isFight?: boolean
}

export const FightSingleSvgTimer:React.FC<IFightSingleSvgTimerProps> = ({seconds, gameState, isFight = true}) => {

    const [startFrom, setStartFrom] = useState(15)

    useEffect(() => {
        setStartFrom(15)
    }, [seconds])

    return (
        <div className={"svg_timer"}>

            {(gameState === "prepare" || gameState === "ended" || gameState === "duel") && <svg className={"svgTimer"} width="110" height="110" viewBox="-1 -1 110 110">

                <mask id="msk1">
                    <rect className="maskCircle maskCircle__inner" strokeOpacity=".9" rx="20">
                        {gameState === "prepare" && <animate
                            attributeName="stroke-dashoffset"
                            dur={startFrom + "s"}
                            begin="0s"
                            values={`${450 - ((4.7 - 1) * 120)}; 374`}
                            fill="freeze"
                            repeatCount="1"
                        />}
                    </rect>
                </mask>
                <mask id="msk2">
                    <rect className="maskCircle maskCircle__inner" strokeOpacity="1" rx="20">
                        {gameState === "prepare" && <animate
                            attributeName="stroke-dashoffset"
                            dur={startFrom + "s"}
                            begin=".12s"
                            values={`${450 - ((4.7 - 1) * 120)}; 374`}
                            fill="freeze"
                            repeatCount="1"
                        />}
                    </rect>
                </mask>
                <mask id="msk3">
                    <rect className="maskCircle maskCircle__inner" strokeOpacity="1" rx="20">
                        {gameState === "prepare" && <animate
                            attributeName="stroke-dashoffset"
                            dur={startFrom + "s"}
                            begin=".24s"
                            values={`${450 - ((4.7 - 1) * 120)}; 374`}
                            fill="freeze"
                            repeatCount="1"
                        />}
                    </rect>
                </mask>
                <mask id="msk4">
                    <rect className="maskCircle maskCircle__inner" strokeOpacity="1" rx="20">
                        {gameState === "prepare" && <animate
                            attributeName="stroke-dashoffset"
                            dur={startFrom + "s"}
                            begin=".36s"
                            values={`${450 - ((4.7 - 1) * 120)}; 374`}
                            fill="freeze"
                            repeatCount="1"
                        />}
                    </rect>
                </mask>
                <mask id="msk5">
                    <rect className="maskCircle maskCircle__inner" strokeOpacity="1" rx="20">
                        {gameState === "prepare" && <animate
                            attributeName="stroke-dashoffset"
                            dur={startFrom + "s"}
                            begin=".48s"
                            values={`${450 - ((4.7 - 1) * 120)}; 374`}
                            fill="freeze"
                            repeatCount="1"
                        />}
                    </rect>
                </mask>
                <mask id="msk6">
                    <rect className="maskCircle maskCircle__inner" strokeOpacity="1" rx="20">
                        {gameState === "prepare" && <animate
                            attributeName="stroke-dashoffset"
                            dur={startFrom + "s"}
                            begin=".60s"
                            values={`${450 - ((4.7 - 1) * 120)}; 374`}
                            fill="freeze"
                            repeatCount="1"
                        />}
                    </rect>
                </mask>
                <mask id="msk7">
                    <rect className="maskCircle maskCircle__inner" strokeOpacity="1" rx="20">
                        {gameState === "prepare" && <animate
                            attributeName="stroke-dashoffset"
                            dur={startFrom + "s"}
                            begin=".72s"
                            values={`${450 - ((4.7 - 1) * 120)}; 374`}
                            fill="freeze"
                            repeatCount="1"
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

            </svg>}

        </div>
    )
}
