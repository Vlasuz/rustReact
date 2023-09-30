import { styled } from 'styled-components';

export const EmptyInventoryStyle = styled.div`
    
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;

    h3 {
        color: #fff;
        font-size: 14px;
        font-weight: 500;
        line-height: 13px;
        margin-bottom: 20px;
        text-align: center;
    }
    
    p {
        color: #a2abc5;
        font-size: 14px;
        font-weight: 400;
        line-height: 17px;
        margin: 0 auto 40px;
        max-width: 324px;
        text-align: center;
    }

    a {
        align-items: center;
        background: rgba(85,98,221,.8);
        border: none;
        border-radius: 8px;
        color: #fff;
        cursor: pointer;
        display: flex;
        font-size: 14px;
        font-weight: 500;
        line-height: 13px;
        padding: 18px 44px;
        transition: all .3s ease;
        &:hover {
            background-color: rgba(85,98,221,.6);
        }
    }
    
`
