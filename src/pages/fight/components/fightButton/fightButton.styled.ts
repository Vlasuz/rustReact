import { styled } from 'styled-components';

export const FightButtonStyled = styled.button`
    
    background: rgba(85, 98, 221, 0.8);
    border-radius: 10px;
    overflow: hidden;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 260px;
    width: 100%;
    cursor: pointer;
    height: 50px;
    transition: all .3s ease;
    border: none;

    &.process {
        background: #363A51;
        span {
            color: #E8A14E;
        }
    }
    &.finish {
        background: #363A51;
        span {
            color: #E8A14E;
        }
        .item__button{
            border-radius: 10px;
            overflow: hidden;
            background: #363A51;
        }
        .winner{
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .looser{
            background: #232536;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    &:hover{
        transform: scale(1.05);
    }
    &:active{
        transform: scale(.95);
    }
    span{
        font-weight: 500;
        font-size: 14px;
        line-height: 15px;
        color: #FFFFFF;
        &:first-child{
            margin-right: 14px;
        }
    }
    img{
        margin-right: 6px;
    }
    
`
