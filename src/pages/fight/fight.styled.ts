import { styled } from 'styled-components';

export const FightStyled = styled.section`

    height: 87vh;
    
    .fight-page{

        &__list-games{
            max-height: calc(100vh - 80px - 76px - 34px);
            height: 100%;
            overflow: auto;
            background: #202232;
            border-radius: 10px;
            padding: 20px;
            margin-top: 14px;
        }

        &__skins{
            background: #202232;
            border-radius: 10px;
            margin-top: 14px;
            padding: 32px 30px 30px;
            max-height: calc(100vh - 80px - 76px - 34px);
            height: 100%;
            overflow: auto;
            .skins__block{
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                margin: 0 auto;
                grid-gap: 10px;
                margin-top: 47px;
                max-width: 1034px;
            }
            .skins__item{
                background: #26293B;
                border-radius: 10px;
                text-align: center;
                padding: 20px;
                padding-bottom: 0;
                position: relative;
                .item__check{
                    position: absolute;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    top: 17px;
                    right: 17px;
                    opacity: 0;
                    transition: all .3s ease;
                    &:after{
                        content: '';
                        width: 34px;
                        height: 34px;
                        background: rgba(146, 193, 69, 0.1);
                        filter: blur(12.5px);
                        border-radius: 50%;
                        position: absolute;
                    }
                }
                .item__skin{
                    max-width: 176px;
                    margin: 0 auto;
                    img{
                        display: block;
                        margin: 0 auto;
                        width: 100%;
                    }
                }
                &_active{
                    .item__check{
                        opacity: 1;
                    }
                }
                p{
                    font-weight: 500;
                    font-size: 13px;
                    line-height: 14px;
                    color: rgba(162, 171, 197, 0.5);
                    margin-top: 6px;
                    margin-bottom: 9px;
                }
                .item__buy{
                    width: 140px;
                    height: 50px;
                    position: absolute;
                    bottom: 20px;
                    left: 50%;
                    transform: translateX(-50%);
                    background: #4A55BB;
                    border-radius: 8px;
                    &:hover button{
                        &.buy__price{
                            opacity: 0;
                            visibility: hidden;
                        }
                        &.buy__buy{
                            opacity: 1;
                            visibility: visible;
                        }
                    }
                    .sale{
                        position: absolute;
                        top: 0;
                        right: 0;
                        background: rgba(219, 71, 82, 0.8);
                        backdrop-filter: blur(5px);
                        padding: 7px 9px;
                        border-radius: 6px;
                        font-weight: 700;
                        font-size: 12px;
                        line-height: 11px;
                        top: -12px;
                        color: #FFFFFF;
                    }
                    button{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 100%;
                        height: 100%;
                        border: none;
                        transition: all .3s ease;
                        position: absolute;
                        border-radius: 8px;
                        cursor: pointer;
                        span{
                            font-weight: 700;
                            font-size: 14px;
                            line-height: 13px;
                            color: #FFFFFF;
                        }
                        img{
                            margin-right: 6px;
                        }
                    }
                    .buy__set{
                        background: rgba(162, 171, 197, 0.4);
                        backdrop-filter: blur(5px);
                        opacity: 0;
                        visibility: hidden;
                    }
                    .buy__price{
                        background: #4A55BB;
                    }
                    .buy__buy{
                        background: #5562DD;
                        opacity: 0;
                        visibility: hidden;
                    }
                    &_bought{
                        background: transparent;
                        button{
                            display: none;
                        }
                        .buy__set{
                            display: block;
                            opacity: 1;
                            visibility: visible;
                        }
                    }
                }
                h2{
                    font-weight: 700;
                    font-size: 16px;
                    line-height: 15px;
                    color: #FFFFFF;
                }
            }
            .skins__top{
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
            }
            .skins__back{
                display: flex;
                align-items: center;
                position: absolute;
                left: 0px;
                span{
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 15px;
                    color: #A2ABC5;
                    margin-left: 14px;
                }
            }
            h1{
                text-align: center;
                font-weight: 700;
                font-size: 24px;
                line-height: 23px;
                text-align: center;
                color: #FFFFFF;
            }
        }

        &__top{
            display: flex;
            height: 80px;
            .clothes-shop{
                background: linear-gradient(270deg, rgba(109, 69, 193, 0.4) 0%, rgba(109, 69, 193, 0.3) 100%);
                border-radius: 10px;
                padding: 0 20px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                max-width: 360px;
                width: 100%;
                margin-left: 14px;
                p{
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 13px;
                    color: #FFFFFF;
                }
            }
            .create-game{
                display: flex;
                align-items: center;
                width: 100%;
                background: linear-gradient(-90deg, rgba(146, 193, 69, 0.1) 0%, #202232 20%);
                border-radius: 10px;
                padding: 0 20px;
                &__button{
                    margin-left: 20px;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 13px;
                    text-transform: capitalize;
                    color: #FFFFFF;
                    background: rgba(146, 193, 69, 0.6);
                    border-radius: 8px;
                    padding: 17px 25px;
                    cursor: pointer;
                    border: none;
                    transition: all .3s ease;
                    &:hover{
                        transform: scale(1.05);
                    }
                    &:active{
                        transform: scale(0.9);
                    }
                }
                p{
                    font-weight: 400;
                    font-size: 15px;
                    line-height: 14px;
                    color: #A2ABC5;
                    margin-right: auto;
                }
            }
            .players{
                display: flex;
                align-items: center;
                span{
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 15px;
                    color: #92C145;
                    margin-left: 8px;
                }
            }
        }
    }


    
`
