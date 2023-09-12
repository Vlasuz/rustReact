import { styled } from 'styled-components';

export const SteamLoginStyle = styled.a`
    

    display: flex;
    align-items: center;
    background: linear-gradient(90deg, rgba(35, 123, 255, 0.8) 0%, rgba(56, 132, 247, 0.8) 100%);
    border-radius: 8px;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    span{
        margin-right: 38px;
        font-weight: 700;
        font-size: 14px;
        line-height: 13px;
        color: #FFFFFF;

    }
    &:hover{
        background: linear-gradient(90deg, rgba(35, 123, 255, 0.5) 0%, rgba(56, 132, 247, 0.8) 100%);
    }
    
`
