import { styled } from 'styled-components';

export const FightUserStyled = styled.div`
    

    display: flex;
    align-items: center;
    margin: 0 -5px;
    transition: all .3s ease;
    width: 100%;
    &:last-child{
        flex-direction: row-reverse;
    }
    .load{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 14px;
        &__line{
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
    }

    .load {
        display: none;
    }
    
    @keyframes lineLoad {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
    
    &.user_looser {
        opacity: .5;
    }
    &.user_loading{
        height: 50px;
        .user__load{
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px dashed rgba(162, 171, 197, 0.15);
            border-radius: 10px;
        }
        .load{
            width: 100%;
            height: 14px;
            display: flex;
        }
        .user__name,
        .user__photo{
            display: none;
        }
    }
    .user__photo{
        width: 50px;
        height: 50px;
        margin: 0 5px;
        img{
            width: 100%;
            height: 100%;
            border-radius: 10px;
        }
    }
    .user__name{
        font-weight: 500;
        font-size: 14px;
        line-height: 15px;
        margin: 0 5px;
        color: #FFFFFF;
    }
    
`
