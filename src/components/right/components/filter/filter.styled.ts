import { styled } from 'styled-components';

export const FilterStyle = styled.form`
    
    display: flex;
    align-items: center;
    margin-top: 14px;
    input[type="radio"]{
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }
    .filter__item{
        padding: 7px 14px;
        background: rgba(46, 49, 69, 0.5);
        border-radius: 6px;
        margin-right: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        cursor: pointer;
        img{
            opacity: 0.5;
        }
        input[type="checkbox"]:checked + img{
            transform: scaleY(-1);
        }
        input[type="checkbox"]{
            position: absolute;
            width: 30%;
            height: 100%;
            right: 0;
            top: 0;
            z-index: 2;
            opacity: 0;
            cursor: pointer;
        }
        span{
            font-weight: 500;
            font-size: 13px;
            line-height: 12px;
            color: rgba(162, 171, 197, 0.5);
            margin-right: 10px;
        }

        &._active {
            span {
                color: #A2ABC5;
            }
            img{
                opacity: 1;
            }
        }
    }
    input:checked + .filter__item{
        img{
            opacity: 1;
        }
        span{
            color: #A2ABC5;
        }
    }
    .filter__reload{
        margin-left: auto;
        background: #2E3145;
        border-radius: 6px;
        cursor: pointer;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 8px 14px;
        transition: all .3s ease;
        &:hover{
            transform: scale(1.1);
        }
        &:active{
            transform: scale(0.9);
        }
        span{
            font-weight: 400;
            font-size: 13px;
            line-height: 12px;
            text-transform: capitalize;
            margin-left: 10px;
            color: rgba(162, 171, 197, 0.5);
        }
    }
    
`
