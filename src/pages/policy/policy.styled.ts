import { styled } from 'styled-components';

export const PolicyStyle = styled.section`
    
    padding: 20px;
    background: #202232;
    border-radius: 10px;

    h2{
        font-weight: 700;
        font-size: 16px;
        line-height: 15px;
        color: #FFFFFF;
        margin: 30px 0;
        &:first-child{
            margin-top: 0;
        }
    }
    p{
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        text-transform: lowercase;
        color: #FFFFFF;
    }
    .section-terms{
        &__content{
            max-height: calc(100vh - 287px);
            height: 100%;
            overflow: auto;
            margin-top: 30px;
        }
        &__top{
            background: linear-gradient(90deg, #26293B 0%, rgba(38, 41, 59, 0.7) 100%);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 20px;
            padding-right: 48px;
            img{
                margin-bottom: -30px;
            }
            h1{
                font-weight: 700;
                font-size: 20px;
                line-height: 19px;
                color: #FFFFFF;
            }
        }
    }
    
`
