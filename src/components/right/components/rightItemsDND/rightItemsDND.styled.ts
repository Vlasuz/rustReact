import { styled } from 'styled-components';

export const RightItemsDNDStyle = styled.div`
    
    .zone__item:hover .item__photo{
        opacity: 1;
    }
    .zone__list{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        overflow: auto;
        .zone__empty,
        ul{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            margin: 0 auto;
            height: 98px;
        }
    }
    .zone__empty{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        img{
            position: absolute;
        }
        p{
            font-weight: 500;
            font-size: 14px;
            line-height: 13px;
            color: rgba(136, 144, 168, 0.5);
        }
    }
    .zone{
        border: 1px dashed rgba(162, 171, 197, 0.15);
        border-radius: 10px;
        height: 98px;
        margin-bottom: 10px;
        margin-top: 10px;
    }
    .postamat__block{
        height: calc(100vh - 490px);
    }
    .pererab__button{
        border: 1px dashed rgba(162, 171, 197, 0.15);
        border-radius: 10px;
        height: 60px;
        margin-top: 10px;
    }
    
`
