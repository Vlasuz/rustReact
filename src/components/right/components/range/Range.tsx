import React, { useEffect, useState } from 'react'
import coin from './../../../../assets/images/header__coins.svg'
import ReactSlider from 'react-slider'
import { RangeStyle } from './range.styled'

interface IRangeProps {
    min: number
    max: number
    rangeValue: any
}

export const Range: React.FC<IRangeProps> = ({ min, max, rangeValue }) => {

    const [valueMin, setValueMin] = useState(+min)
    const [valueMax, setValueMax] = useState(+max)

    const handleChangeValue = (value: number[]) => {
        setValueMin(20 + max * value[0] / 100)
        setValueMax(0 + max * value[1] / 100)

        rangeValue([+(20 + max * value[0] / 100).toFixed(), +(max * value[1] / 100).toFixed()])
    }

    useEffect(() => {
        setValueMin(min)
        setValueMax(max)
    }, [min, max])

    return (
        <RangeStyle className="postamat__range">
            <ReactSlider
                className="horizontal-slider"
                thumbClassName="example-thumb"
                trackClassName="example-track"
                defaultValue={[0, 100]}
                renderThumb={(props, state) => <div {...props} />}
                pearling
                minDistance={10}
                onChange={(value, index) => handleChangeValue(value)}
            />
            <div className="range__text">
                <img src={coin} alt="Coin" />
                <p>{valueMin?.toFixed()} — {valueMax?.toFixed()}</p>
            </div>
        </RangeStyle>
    )
}
