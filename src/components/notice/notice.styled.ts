import { styled } from 'styled-components';

export const NoticeStyle = styled.ul`
    
    bottom: 29px;
    left: 40%;
    max-width: 425px;
    position: absolute;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    transition: opacity .3s ease,visibility .3s ease;
    visibility: hidden;
    opacity: 0;
    width: 100%;
    z-index: 999;

    .notice__item {
        align-items: center;
        backdrop-filter: blur(15px);
        background: rgba(162,171,197,.3);
        border-radius: 10px;
        bottom: 0;
        color: #fff;
        display: flex;
        font-size: 12px;
        font-weight: 500;
        height: 60px;
        justify-content: space-between;
        line-height: 13px;
        margin-top: 10px;
        padding: 5px 20px;
        position: absolute;
        transition: opacity .3s ease,visibility .3s ease;
        opacity: 0;
        visibility: hidden;
        width: 100%;
    }

    &.active {
        opacity: 1;
        visibility: visible;
        .notice__item {
            opacity: 1;
            visibility: visible;
        }
    }
    
`
