import { styled } from 'styled-components';

export const LoadingStyled = styled.div`
    

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 14px;
    .line{
        width: 2px;
        background: #4B92FF;
        &:nth-child(1){
            height: 10px;
            margin-bottom: auto;
            animation: lineLoad .4s linear 0s infinite alternate;
        }
        &:nth-child(2){
            height: 14px;
            margin: 0 4px;
            animation: lineLoad .4s linear .2s infinite alternate;
        }
        &:nth-child(3){
            height: 10px;
            margin-top: auto;
            animation: lineLoad .4s linear .4s infinite alternate;
        }
    }

    
    @keyframes lineLoad {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
    
`
