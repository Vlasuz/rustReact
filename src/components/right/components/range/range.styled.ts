import { styled } from 'styled-components';

export const RangeStyle = styled.div`
    

    overflow: hidden;
    border-radius: 0 0 8px 8px;
    background-color: #26293B;

    .range__text {
        z-index: 2;
    }

    .horizontal-slider {
        width: 100%;
        height: 40px;
    }

    .horizontal-slider .example-track {
        top: 0px;
        height: 40px;
        position: relative;
    }

    .example-track.example-track-0 {
        background: transparent;
    }

    .example-track.example-track-1 {
        background: linear-gradient(90deg, rgba(85, 98, 221, 0.30) 0%, rgba(85, 98, 221, 0.60) 100%);
        z-index: 2;
        border-right: 2px solid #5562DD;
        border-left: 2px solid #5562DD;
    }

    .example-track.example-track-2 {
        background: transparent;
    }

    .horizontal-slider .example-thumb {
        top: 10px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #5562DD;
        cursor: grab;
        margin-left: -9px;
        &:after {
            content: '';
            background-color: #D9D9D9;
            width: 1px;
            height: 8px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 8px;
        }
        &:before {
            content: '';
            background-color: #D9D9D9;
            width: 1px;
            height: 8px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 8px;
        }
    }

    .example-thumb.example-thumb-1 {
        margin-left: 9px;
    }

    
`
