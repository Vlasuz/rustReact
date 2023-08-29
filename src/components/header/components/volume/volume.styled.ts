import { styled } from 'styled-components';

export const VolumeStyled = styled.div`
    
    display: flex;
    align-items: center;
    .volume__block{
        background: #202232;
        border-radius: 6px;
        display: flex;
        align-items: center;
        height: 30px;
        margin-left: 10px;
        padding: 0 10px;
        opacity: 0;
        visibility: hidden;
        transition: all .3s ease;
        cursor: pointer;
        
        img{
            margin-right: 10px;
        }
        input{
            max-width: 80px;
            cursor: pointer;
        }
        input[type=range]  {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            outline: none;
            overflow: hidden;
            height: 3px;
            border-radius: 10px;
        }
        input[type=range]::-webkit-slider-runnable-track {
            height: 3px;
            border: 3px solid #393C4E;
            border-right-width: 0px;
            border-left-width: 0px;
            border-radius: 10px;
        }

        input[type=range]::-webkit-slider-thumb {
            -webkit-appearance: none;
            background: #A2ABC5;
            cursor: pointer;
            width: 0px;
            height: 10px;
            margin-top: -4px;
            box-shadow: -200px  0 0 200px  #A2ABC5;
        }
    }
    &:hover{
        .volume__block{
            opacity: 1;
            visibility: visible;
        }
    }
    img{
        display: block;
    }
    button{
        padding: 8px 10px;
        background: #202232;
        cursor: pointer;
        border-radius: 6px;
        border: none;
    }

    
`
