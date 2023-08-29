import { styled } from 'styled-components';

export const RightStyled = styled.section`
    
    max-width: 456px;
    margin-left: 14px;
    width: 100%;
    overflow: hidden;
    border-radius: 10px;
    height: calc(100vh - 96px);
    display: flex;
    flex-direction: column;
    position: relative;
    padding-bottom: 130px;
    margin-top: -5px;

    .storage{

        &__empty{
            height: calc(100vh - 315px);
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            border: 1px dashed rgba(162, 171, 197, 0.15);
            border-radius: 10px;
            h3{
                font-weight: 500;
                font-size: 14px;
                line-height: 13px;
                text-align: center;
                color: #FFFFFF;
                margin-bottom: 20px;
            }
            p{
                font-weight: 500;
                font-size: 14px;
                line-height: 22px;
                text-align: center;
                color: #A2ABC5;
            }
            a{
                background: rgba(85, 98, 221, 0.8);
                border-radius: 8px;
                padding: 19px 43px;
                font-weight: 500;
                font-size: 14px;
                line-height: 13px;
                color: #FFFFFF;
                display: block;
                margin-top: 43px;
                transition: all .3s ease;
                &:hover{
                    transform: scale(1.05);
                }
                &:active{
                    transform: scale(.95);
                }
            }
        }


        .postamat__block{
            height: calc(100vh - 390px);
        }
        .postamat__item{
            &:hover{
                .item__photo{
                    opacity: 1;
                }
            }
            .item__check{
                position: absolute;
                top: 6px;
                right: 6px;
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 3;
                opacity: 0;

                transition: all .3s ease;
                &:after{
                    content: '';
                    width: 20px;
                    height: 20px;
                    background: rgba(146, 193, 69, 0.2);
                    filter: blur(5px);
                    display: block;
                    position: absolute;
                    border-radius: 50%;
                }
            }
            &_active{
                background: rgba(162, 171, 197, 0.15);
                .item__count{
                    opacity: 0;
                }
                .item__check{
                    opacity: 1;
                }
            }
        }
        &__zone{
            margin-top: 20px;
        }
        .zone__button{
            display: none;
            height: 60px;
            background: rgba(85, 98, 221, 0.8);
            border-radius: 8px;
            border: none;
            width: 100%;
            cursor: pointer;
            padding: 0 20px;
            align-items: center;
            span{
                font-weight: 500;
                font-size: 14px;
                line-height: 15px;
                color: #FFFFFF;
                margin-left: 10px;
            }
        }
        .zone__count{
            margin-left: auto;
            width: 30px;
            height: 30px;
            background: rgba(217, 217, 217, 0.3);
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 500;
            font-size: 14px;
            line-height: 13px;
            color: #FFFFFF;
        }
        .zone__empty{
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px dashed rgba(162, 171, 197, 0.15);
            border-radius: 10px;
            height: 60px;
            p{
                font-weight: 500;
                font-size: 14px;
                line-height: 13px;
                color: rgba(136, 144, 168, 0.5);
            }
        }
        }

    .pererab{
        &__item:hover .item__photo{
            opacity: 1;
        }
        .zone__list{
            display: flex;
            align-items: center;
            margin: 0 auto;
            overflow: auto;
            ul{
                display: flex;
                align-items: center;
                margin: 0 auto;
                height: 98px;
                width: fit-content;
            }
            .item__count{
                display: none;
            }
            .postamat__item{
                position: relative;
                padding: 0;
                min-width: 60px;
                width: 60px;
                height: 60px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 3px;
            }
            .item__photo{
                max-width: 36px;
                width: 36px;
                height: 36px;
            }
            .item__price{
                display: none;
            }
        }
        &__item{
            &_moved{
                transition: all .0s ease;
                background: #282A3B;
                &:active,
                &:hover{
                    transform: scale(1);
                    background: #282A3B;
                }
                .item__photo{
                    width: 100px;
                }
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
        &__zone{
            border: 1px dashed rgba(162, 171, 197, 0.15);
            border-radius: 10px;
            height: 98px;
            margin-bottom: 10px;
            margin-top: 10px;
        }
        .postamat__block{
            height: calc(100vh - 490px);
        }
        .zone__done{
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: rgba(85, 98, 221, 0.8);
            border-radius: 8px;
            padding: 0 20px;
            display: none;
            border: none;
            width: 100%;
            cursor: pointer;
            img{
                margin-right: 10px;
            }
            span{
                font-weight: 500;
                font-size: 14px;
                line-height: 13px;
                color: #FFFFFF;
            }
            .rht,
            .lft{
                display: flex;
                align-items: center;
            }
        }
        &__button{
            border: 1px dashed rgba(162, 171, 197, 0.15);
            border-radius: 10px;
            height: 60px;
        }
    }

    .postamat{
        padding-top: 24px;
        background: #202232;
        padding: 15px;
        border-radius: 0 0px 10px 10px;

        user-select: none;

        .notice__add-cart{
            bottom: 100px;
        }

        &__cart{
            border: 1px dashed rgba(162, 171, 197, 0.15);
            border-radius: 10px;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 14px;
            display: none;
            &_show{
                display: flex;
            }
            img{
                width: 15px;
            }
            span{
                font-weight: 400;
                font-size: 14px;
                line-height: 15px;
                color: rgba(136, 144, 168, 0.5);
                margin-left: 10px;
            }
            &_full{
                background: rgba(85, 98, 221, 0.4);
                border: none;
                padding: 0 20px;
                cursor: pointer;
                .sum{
                    margin-left: auto;
                }
                span{
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 13px;
                    color: #FFFFFF;
                }
            }
        }

        hr{
            border: 1px solid rgba(162, 171, 197, 0.05);
            margin: 14px 0;
        }

        &__block{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 6px;
            overflow: auto;
            height: calc(100vh - 420px);
        }

        &__item{
            background: rgba(162, 171, 197, 0.06);
            border-radius: 8px;
            padding: 20px 15px 16px;
            max-height: 145px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            position: relative;
            transition: all .3s ease;
            cursor: pointer;
            &:active{
                transform: scale(.9);
            }
            &:hover{
                background: rgba(162, 171, 197, 0.15);
                .item__buy{
                    opacity: 1;
                }
                .item__photo{
                    opacity: 0;
                }
            }
            .item__buy{
                position: absolute;
                background: rgba(162, 171, 197, 0.1);
                backdrop-filter: blur(7.5px);
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                transition: all .3s ease;
                opacity: 0;
                z-index: 2;
                margin-bottom: 20px;
            }
            .item__count{
                background: rgba(119, 119, 139, 0.1);
                backdrop-filter: blur(2px);
                border-radius: 5px;
                font-weight: 700;
                font-size: 12px;
                line-height: 15px;
                width: 25px;
                height: 25px;
                position: absolute;
                top: 0;
                right: 0;
                color: rgba(255, 255, 255, 0.5);
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .item__cool{
                width: 10px;
                height: 10px;
                top: 8px;
                left: 8px;
                position: absolute;
                border-radius: 50%;
            }
            .item__price{
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: 20px;
                span{
                    font-weight: 700;
                    font-size: 12px;
                    line-height: 11px;
                    color: #FFFFFF;
                    margin-left: 6px;
                }
            }
            .item__photo{
                max-width: 100px;
                height: 70px;
                text-align: center;
                width: 100%;
                opacity: 1;
                transition: all .3s ease;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    display: block;
                }
            }
        }

        &__filter{
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
        }

        &__range{
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            .range__text{
                display: flex;
                align-items: center;
                position: absolute;
            }
            p{
                font-weight: 500;
                font-size: 13px;
                line-height: 12px;
                margin-left: 6px;
                color: #FFFFFF;
            }
            input[type=range]{
                width: 100%;
                cursor: pointer;
            }
            input[type=range] {
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
                outline: none;
                overflow: hidden;
                height: 40px;
                border-radius: 0px 0px 6px 6px;
                background: #26293B;
            }
            input[type=range]::-webkit-slider-runnable-track {
                // height: 3px;
                // border: 3px solid #393C4E;
                border-right-width: 0px;
                border-left-width: 0px;
                border-radius: 10px;
            }

            input[type=range]::-webkit-slider-thumb {
                -webkit-appearance: none;
                cursor: pointer;
                width: 0px;
                height: 40px;
                box-shadow: -300px  0 0 300px rgba(85, 98, 221, 0.3);
                border-right: 2px solid #5562DD;
            }
        }
        &__search{
            background: #26293B;
            border-radius: 8px 8px 0px 0px;
            display: flex;
            align-items: center;
            input{
                width: 100%;
                height: 100%;
                background: transparent;
                border: none;
                height: 55px;
                outline: none;
                padding: 0 20px;
                font-weight: 400;
                font-size: 13px;
                line-height: 12px;
                color: #fff;
                &::placeholder{
                    color: rgba(162, 171, 197, 0.5);
                }
            }
            button{
                margin-right: 20px;
                background: transparent;
                border: none;
                cursor: pointer;
            }
        }
    }

    .section-right{
    
        &__smiles{
            position: absolute;
            bottom: 84px;
            left: 10px;
            width: calc(100% - 20px);
            padding: 20px;
            background: rgba(38, 41, 59, 0.96);
            box-shadow: 0px 12px 30px rgba(15, 17, 28, 0.2);
            backdrop-filter: blur(5px);
            border-radius: 10px;
            z-index: 3;

            transition: all .3s ease;
            opacity: 0;
            visibility: hidden;
            &_active{
                opacity: 1;
                visibility: visible;
            }
            .smiles__block{
                img{
                    width: 50px;
                    height: 50px;
                }
                ul{
                    display: flex;
                    align-items: center;
                    overflow: auto;
                    padding-bottom: 15px;
                }
                li{
                    margin-right: 15px;
                }
                button{
                    background: transparent;
                    border: none;
                    cursor: pointer;
                    transition: all .3s ease;
                    &:hover{
                        transform: scale(1.1);
                    }
                    &:active{
                        transform: scale(.9);
                    }
                }
            }
            .smiles__switches{
                position: relative;
                margin-top: 20px;
                &:after{
                    content: '';
                    background: linear-gradient(270deg, #26293B 33.06%, rgba(38, 41, 59, 0) 100%);
                    width: 60px;
                    height: 50px;
                    position: absolute;
                    top: 0;
                    right: 0;
                }
                ul{
                    display: flex;
                    align-items: center;
                    overflow: auto;
                    margin-bottom: -20px;
                    margin-top: -20px;
                    &::-webkit-scrollbar {
                        width: 0;
                        height: 0;
                        background: rgba(#04B8AD, .1);
                    }
                }
                button{
                    font-weight: 400;
                    font-size: 13px;
                    line-height: 12px;
                    color: #A2ABC5;
                    background: transparent;
                    padding-top: 20px;
                    border: none;
                    cursor: pointer;
                    white-space: nowrap;
                    padding-bottom: 20px;
                }
                li{
                    margin-right: 35px;
                    position: relative;
                    &:after{
                        content: '';
                        background: #F5AD57;
                        border-radius: 2px;
                        width: 40px;
                        height: 3px;
                        position: absolute;
                        bottom: 0;
                        left: 50%;
                        transform: translateX(-50%);
                        opacity: 0;
                    }
                    &.li_active{
                        &:after{
                            opacity: 1;
                        }
                        button{
                            color: #fff;
                        }
                    }
                    &:last-child{
                        padding-right: 60px;
                    }
                }
            }
        }

        &__rules{
            position: absolute;
            bottom: 130px;
            left: 10px;
            width: calc(100% - 20px);
            background: rgba(38, 41, 59, 0.96);
            box-shadow: 0px 12px 30px rgba(15, 17, 28, 0.2);
            backdrop-filter: blur(5px);
            border-radius: 10px;
            padding: 30px 16px;
            max-height: 464px;
            overflow: auto;

            transition: all .3s ease;
            opacity: 0;
            visibility: hidden;
            &_active{
                opacity: 1;
                visibility: visible;
            }
            h2{
                font-weight: 700;
                font-size: 20px;
                line-height: 19px;
                color: #FFFFFF;
                text-align: center;
                margin-bottom: 30px;
            }
            h3{
                font-weight: 500;
                font-size: 15px;
                line-height: 17px;
                margin: 20px 0;
                color: #FC6C6C;
            }
            p{
                font-weight: 400;
                font-size: 13px;
                line-height: 24px;
                color: #FFFFFF;
            }
        }

        &__cart-bought,
        &__cart{
            position: absolute;
            top: 74px;
            left: 10px;
            width: calc(100% - 20px);
            height: calc(100% - 74px - 80px);
            background: #26293B;
            box-shadow: 0px 12px 30px rgba(15, 17, 28, 0.2);
            backdrop-filter: blur(5px);
            border-radius: 10px;
            z-index: 4;
            padding: 20px 14px;
            display: flex;
            flex-direction: column;

            transition: all .3s ease;
            opacity: 0;
            visibility: hidden;
            &_active{
                opacity: 1;
                visibility: visible;
            }
            .buttons{
                display: flex;
                align-items: center;
                margin: 0 -4px;
                margin-top: auto;
                button{
                    width: 100%;
                    margin: 0 4px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 8px;
                    height: 50px;
                    border: none;
                    cursor: pointer;
                    transition: all .3s ease;
                    &:hover{
                        transform: scale(1.05);
                    }
                    &:active{
                        transform: scale(.95);
                    }
                }
                span{
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 13px;
                    text-transform: capitalize;
                    color: #FFFFFF;
                }
                &__back{
                    background: #2E3145;
                    position: relative;
                    img{
                        display: block;
                        opacity: 0.7;
                        position: absolute;
                        left: 20px;
                        top: 50%;
                        transform: scaleX(-1) translateY(-50%);
                    }
                    span{
                        color: #8890A8;
                    }
                }
                &__buy{
                    background: rgba(85, 98, 221, 0.8);
                }
            }
            h2{
                font-weight: 700;
                font-size: 20px;
                line-height: 19px;
                color: #FFFFFF;
                margin-bottom: 20px;
            }
            .cart__item{
                background: rgba(162, 171, 197, 0.06);
                border-radius: 8px;
                padding: 15px 20px;
                display: flex;
                align-items: center;
                margin-bottom: 8px;
                transition: all .3s ease;
                &_deleted{
                    opacity: 0;
                }
            }
            .item__delete{
                background: #363A51;
                border-radius: 20px;
                width: 24px;
                height: 24px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-left: auto;
                cursor: pointer;
                &:hover{
                    img{
                        opacity: 1;
                    }
                }
                img{
                    width: 7px;
                    opacity: 0.5;
                    transition: all .3s ease;
                }
            }
            .item__name{
                font-weight: 400;
                font-size: 12px;
                line-height: 11px;
                margin-bottom: 6px;
                color: #FFFFFF;
            }
            .item__price{
                display: flex;
                align-items: center;
                span{
                    font-weight: 700;
                    font-size: 12px;
                    line-height: 11px;
                    color: #FFFFFF;
                }
                img{
                    margin-right: 6px;
                }
            }
            .item__photo{
                margin-right: 14px;
                img{
                    width: 50px;
                    height: 50px;
                    object-fit: contain;
                }
            }
        }

        &__cart-bought{
            z-index: 5;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            h3{
                font-weight: 700;
                font-size: 20px;
                line-height: 19px;
                color: #FFFFFF;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            p{
                font-weight: 500;
                font-size: 14px;
                line-height: 13px;
                text-align: center;
                color: #A2ABC5;
                margin-top: 20px;
            }
            button{
                background: #2E3145;
                border-radius: 8px;
                width: 100%;
                height: 50px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: 500;
                border: none;
                font-size: 14px;
                line-height: 13px;
                text-transform: capitalize;
                color: #8890A8;
                transition: all .3s ease;
                cursor: pointer;
                &:hover{
                    transform: scale(1.05);
                }
                &:active{
                    transform: scale(.95);
                }
            }
            .img{
                display: flex;
                align-items: center;
                justify-content: center;
                margin-left: 10px;
                &:after{
                    content: '';
                    position: absolute;
                    background: rgba(146, 193, 69, 0.2);
                    filter: blur(12.5px);
                    width: 34px;
                    height: 34px;
                }
            }
            img{
                display: block;
            }
            .text{
                margin: auto 0;
            }
        }

        &__notice{
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            z-index: 4;
            bottom: 30px;
            width: 100%;
            max-width: 360px;
            .notice__item{
                height: 50px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-weight: 500;
                font-size: 12px;
                line-height: 13px;
                color: #FFFFFF;
                padding: 5px 20px;
                background: rgba(162, 171, 197, 0.3);
                backdrop-filter: blur(5px);
                border-radius: 10px;

                display: none;
                opacity: 0;
                visibility: hidden;
                margin-top: 10px;
                transition: opacity .3s ease, visibility .3s ease;
                &_active{
                    opacity: 1;
                    visibility: visible;
                    display: flex;
                }
            }
            .notice__add-cart{
                bottom: 85px;
                z-index: 2;
            }
        }

        &__players{
            overflow: auto;
            height: calc(100vh - 370px);
            margin-top: 14px;
            background: #202232;
            border-radius: 10px;
            padding: 20px 14px 25px;
            .players__top{
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 17px;
            }
            h3{
                font-weight: 700;
                font-size: 15px;
                line-height: 14px;
                color: #FFFFFF;
            }
            .count{
                display: flex;
                align-items: center;
                span{
                    margin-left: 8px;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 15px;
                    color: #A2ABC5;
                }
            }
            .players__item{
                display: flex;
                align-items: center;
                padding: 5px;
                background: linear-gradient(-90deg, rgba(232, 161, 78, 0.1) 0%, #26293B 30%);
                border-radius: 8px;
                &:not(:last-child){
                    margin-bottom: 6px;
                }
            }
            .item__name{
                font-weight: 500;
                font-size: 13px;
                line-height: 14px;
                color: #FFFFFF;
                margin-left: 10px;
            }
            .item__coins{
                margin-left: auto;
                display: flex;
                align-items: center;
                max-width: 75px;
                width: 100%;
                span{
                    font-weight: 700;
                    font-size: 14px;
                    line-height: 13px;
                    color: #E8A14E;
                    margin-left: 6px;
                }
            }
            .item__photo{
                width: 45px;
                height: 45px;
                border-radius: 10px;
                overflow: hidden;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            &_none{
                border: 1px dashed rgba(162, 171, 197, 0.15);
                border-radius: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: 14px;
                height: 397px;
                big{
                    font-weight: 400;
                    font-size: 13px;
                    line-height: 14px;
                    color: rgba(162, 171, 197, 0.5);
                }
            }
        }
        &__airdrop{
            background: #202232;
            padding: 24px 14px 14px;

            .airdrop__member{
                background: rgba(85, 98, 221, 0.5);
                border-radius: 10px;
                height: 60px;
                display: flex;
                align-items: center;
                overflow: hidden;
                margin-top: 20px;
                span{
                    margin-left: 20px;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 13px;
                    color: #FFFFFF;
                }
            }
            .member__ico{
                position: relative;
                width: 72px;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                img{
                    position: relative;
                    z-index: 2;
                }
                &:after{
                    content: '';
                    background: url('../img/half-circle.svg') no-repeat;
                    border-radius: 10px;
                    display: block;
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    left: 0;
                    top: 0;
                }
            }

            .sleepers__buy{
                background: #2E3145;
                border-radius: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                padding: 16px;
                border: none;
                cursor: pointer;
                transition: all .3s ease;
                &:active{
                    transform: scale(.9);
                }
                &:hover{
                    background: rgba(#2E3145, .5);
                }
                span{
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 13px;
                    text-transform: capitalize;
                    color: #FFFFFF;
                }
                img{
                    width: 20px;
                    margin-left: 8px;
                    margin-right: 6px;
                }
            }

            .move__buttons{
                display: flex;
                align-items: center;
            }
            .move__submit{
                background: #5562DD;
                border-radius: 8px;
                border: none;
                cursor: pointer;
                transition: all .3s ease;
                height: 50px;
                width: 100%;
                &:active{
                    transform: scale(.9);
                }
                span{
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 13px;
                    text-transform: capitalize;
                    color: #FFFFFF;
                }
            }
            .move__random{
                background: #2E3145;
                border-radius: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 50px;
                border: none;
                cursor: pointer;
                width: 100%;
                transition: all .3s ease;
                margin-right: 8px;
                &:active{
                    transform: scale(.9);
                }
                span{
                    margin-right: 10px;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 13px;
                    text-transform: capitalize;
                    color: #FFFFFF;
                }
            }
            .airdrop__move{
                padding: 16px 14px 20px;
                background: #26293B;
                border-radius: 10px;
                margin-top: 20px;
                h3{
                    font-weight: 700;
                    font-size: 15px;
                    line-height: 14px;
                    color: #FFFFFF;
                }
                ul{
                    border: 1px dashed rgba(162, 171, 197, 0.15);
                    border-radius: 41px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0 40px;
                    margin: 30px 0;
                    height: 60px;
                    
                }
            }

            .airdrop__sleepers{
                padding: 16px 14px 20px;
                background: #26293B;
                border-radius: 10px;
                margin-top: 20px;
                ul{
                    background: #202232;
                    border-radius: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin: 28px 0 26px;
                    height: 44px;
                    li{
                        width: 100%;
                        height: calc(100% + 6px);
                        margin-top: -3px;
                        margin-bottom: -3px;
                    }
                    button{
                        width: 100%;
                        height: 100%;
                        background: transparent;
                        border-radius: 8px;
                        border: none;
                        font-weight: 500;
                        font-size: 15px;
                        line-height: 17px;
                        color: rgba(162, 171, 197, 0.7);
                        text-align: center;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        transition: all .3s ease;
                        position: relative;
                        &.button_active{
                            background: linear-gradient(0deg, rgba(232, 161, 78, 0.1) 0%, rgba(232, 161, 78, 0) 100%);
                            color: #fff;
                            &:after{
                                opacity: 1;
                            }
                        }
                        &:after{
                            content: '';
                            background: #F5AD57;
                            border-radius: 2px;
                            width: 20px;
                            height: 3px;
                            display: block;
                            position: absolute;
                            bottom: 0;
                            left: 50%;
                            transform: translateX(-50%);
                            opacity: 0;
                            transition: all .3s ease;
                        }
                        &:hover{
                            background: linear-gradient(0deg, rgba(232, 161, 78, 0.1) 0%, rgba(232, 161, 78, 0) 100%);
                            color: #fff;
                        }
                        &:active{
                            transform: scale(.9);
                        }
                    }
                }
                h3{
                    font-weight: 700;
                    font-size: 15px;
                    line-height: 14px;
                    color: #FFFFFF;
                }
            }
            .fly__top{
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .fly__bottom{
                margin-top: 12px;
            }
            .fly__timer{
                img{
                    width: 100%;
                }
                .line{
                    background: rgba(162, 171, 197, 0.2);
                    border-radius: 2px;
                    height: 2px;
                    width: 100%;
                    &_done{
                        background: #F5AD57;
                        border-radius: 2px;
                        height: 100%;
                        width: 40%;
                    }
                }
            }
            .airdrop__fly{
                border: 1px dashed rgba(162, 171, 197, 0.15);
                border-radius: 10px;
                width: 100%;
                padding: 14px 14px 20px;
                p{
                    font-weight: 400;
                    font-size: 13px;
                    line-height: 14px;
                    color: #A2ABC5;
                }
                .timer{
                    display: flex;
                    small.dot,
                    span{
                        font-weight: 400;
                        font-size: 24px;
                        line-height: 23px;
                        color: #FFFFFF;
                    }
                    small.dot,
                    .sec span{
                        color: #3A3D4F;
                    }
                    .sec{
                        min-width: 40px
                    }
                }
            }
            .airdrop__block{
                display: flex;
            }
            .airdrop__bank{
                background: linear-gradient(90deg, rgba(245, 173, 87, 0.2) 0%, rgba(245, 173, 87, 0.1) 100%);
                border-radius: 8px;
                padding: 10px 14px 20px;
                width: 100%;
                max-width: 160px;
                margin-left: 14px;
                p{
                    font-weight: 400;
                    font-size: 13px;
                    line-height: 14px;
                    color: #A2ABC5;
                }
                span{
                    font-weight: 700;
                    font-size: 20px;
                    line-height: 19px;
                    margin-left: 6px;
                    color: #E8A14E;
                }
                .coins{
                    display: flex;
                    align-items: center;
                    margin-top: 16px;
                }
            }

        }


        &__chatting{
            border-radius: 10px 0 10px 10px;
            padding: 10px;
            height: 100%;
            padding: 10px;
            display: flex;
            flex-direction: column;
            overflow: auto;
            padding-top: 100px;
            &:before{
                content: '';
                top: 57px;
                left: 0;
                position: absolute;
                width: 100%;
                height: calc(100% - 57px);
                background: #202232;
                border-radius: 10px;
            }
            &:after{
                content: '';
                background: linear-gradient(180deg, #202232 0%, rgba(32, 34, 50, 0) 100%);
                width: 100%;
                height: 100px;
                top: 57px;
                left: 0;
                position: absolute;
            }

            .item__dropdown{
                position: absolute;
                top: 28px;
                left: 0;
                background: #33374B;
                box-shadow: 0px 7px 15px rgba(0, 0, 0, 0.1);
                backdrop-filter: blur(5px);
                border-radius: 10px;
                padding: 10px;
                opacity: 0;
                visibility: hidden;
                transition: all .3s ease;
                z-index: 2;
                &_active{
                    opacity: 1;
                    visibility: visible;
                }
                a{
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 13px;
                    color: #A2ABC5;
                    padding: 10px;
                    display: block;
                    &:hover{
                        background: rgba(162, 171, 197, 0.07);
                        border-radius: 6px;
                        color: #6F758C;
                    }
                }
            }
            .li__delete{
                a{
                    color: #FC6C6C;
                }
            }
            .item__inner{
                position: relative;
            }
            .item__top{
                display: flex;
                align-items: center;
            }
            .item__name{
                font-weight: 500;
                font-size: 13px;
                line-height: 14px;
                color: #A2ABC5;
                margin-right: 10px;
            }
            .item__muted{
                margin-right: 10px;
                display: none;
            }
            .item__menu{
                background: transparent;
                border: none;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                padding: 5px 0;
            }
            .item__text{
                margin-top: 12px;
                background: #26293C;
                border-radius: 8px;
                p{
                    font-weight: 400;
                    font-size: 13px;
                    line-height: 18px;
                    color: #FFFFFF;
                    padding: 14px 10px;
                    width: 100%;
                }
            }
            .item__time{
                margin-left: auto;
                font-weight: 500;
                font-size: 10px;
                line-height: 11px;
                color: rgba(162, 171, 197, 0.3);
            }
            img{
                display: block;
            }
            .item__photo{
                position: relative;
                width: fit-content;
                border-radius: 50%;
                min-width: 40px;
                width: 40px;
                height: 40px;
                margin-right: 12px;
                .photo{
                    width: 100%;
                    height: 100%;
                }
                .mark{
                    position: absolute;
                    bottom: -11px;
                    left: 50%;
                    transform: translateX(-50%);
                    border: 3px solid #202232;
                    border-radius: 50%;
                    width: 22px;
                    height: 22px;
                }
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 8px;
                }
            }

            .chatting__block{
                height: 100%;
            }

            .chatting__item{
                display: flex;
                align-items: flex-start;
                margin-bottom: 14px;
                &:last-child{
                    .item__dropdown{
                        top: auto;
                        bottom: calc(100% + 8px);
                    }
                }
                &_system{
                    .item__menu{
                        display: none;
                    }
                    .item__text{
                        background: rgba(85, 98, 221, 0.3);
                        position: relative;
                        &:after{
                            content: '';
                            background: #5562DD;
                            width: 40px;
                            height: 3px;
                            left: 20px;
                            top: 0;
                            position: absolute;
                            display: block;
                            border-radius: 10px;
                        }
                    }
                }
                &_muted{
                    .item__muted{
                        display: block;
                    }
                    .item__text{
                        p{
                            color: rgba(255, 255, 255, 0.1);
                            filter: blur(2px);
                            user-select: none;
                        }
                    }
                }
            }
        }
        &__resources{
            margin: 0 -5px;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            position: absolute;
            bottom: 84px;
            left: 10px;
            right: 10px;
            .resources__button{
                background: #26293B;
                border-radius: 8px;
                font-weight: 400;
                font-size: 12px;
                line-height: 11px;
                color: rgba(162, 171, 197, 0.5);
                padding: 10px 14px;
                margin: 0 5px;
                display: block;
                transition: all .3s ease;
                border: none;
                cursor: pointer;
                &_active,
                &:hover{
                    background: #26293B;
                    color: #A2ABC5;
                }
            }
        }
        &__bottom{
            display: flex;
            background: #26293B;
            border-radius: 8px;
            margin-top: auto;
            padding: 12px 20px;
            padding-left: 0;
            position: absolute;
            bottom: 10px;
            left: 10px;
            right: 10px;
            .smiles{
                min-width: 40px;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                padding: 8px;
                background: #363A51;
                cursor: pointer;
                border: none;
                transition: all .3s ease;
                &:active{
                    transform: scale(.9);
                }
                img{
                    display: block;
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
            }
            .send{
                background: #363A51;
                border-radius: 20px;
                width: 40px;
                min-width: 40px;
                height: 40px;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-left: 10px;
                border: none;
            }
            input{
                font-weight: 400;
                font-size: 13px;
                line-height: 12px;
                padding: 0 14px;
                background: transparent;
                outline: none;
                border: none;
                color: #fff;
                width: 100%;
                &::placeholder{
                    color: rgba(162, 171, 197, 0.5);
                }
            }
            .textarea{
                display: flex;
                align-items: center;
                width: 100%;
                margin-right: 20px;
                span{
                    font-weight: 400;
                    font-size: 10px;
                    line-height: 10px;
                    color: rgba(162, 171, 197, 0.3);
                }
            }
        }
        &__top{
            display: flex;
            align-items: center;
            background: #202232;
            margin: 0 -4px;
            .top__item{
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                background: #202232;
                border: 4px solid #191A29;
                padding: 16px;
                cursor: pointer;
                position: relative;
                &:first-child{
                    border-radius: 10px;
                }
                &:before{
                    content: '';
                    height: 5px;
                    width: 120%;
                    position: absolute;
                    background: #191A29;
                    top: -5px;
                }
                &_active:first-child{
                    &:after{
                        content: '';
                        border-radius: 0 10px 0 0;
                        width: 25px;
                        height: 25px;
                        position: absolute;
                        top: -4px;
                        right: -8px;
                        border: 4px solid #191A29;
                        border-bottom: none;
                        border-left: none;
                    }
                }
                &:last-child{
                    border-radius: 10px;
                    width: 90px;
                    background: linear-gradient(270deg, rgba(146, 193, 69, 0.1) 0%, rgba(32, 34, 50, 0) 100%);
                    transition: all .3s ease;
                    & > span {
                        display: none;
                    }
                }
                &_active:last-child{
                    border-radius: 10px 10px 0px 10px;
                    background: #202232;
                    width: 100%;
                    & > span {
                        display: block;
                        color: #fff;
                    }
                    &:after{
                        content: '';
                        border-radius: 10px 0 0 0;
                        width: 25px;
                        height: 25px;
                        position: absolute;
                        top: -4px;
                        left: -8px;
                        border: 4px solid #191A29;
                        border-bottom: none;
                        border-right: none;
                    }
                }
                span{
                    font-weight: 500;
                    font-size: 15px;
                    line-height: 17px;
                    color: #A2ABC5;
                }
                .people{
                    display: flex;
                    align-items: center;
                    margin-left: auto;
                    span{
                        font-weight: 500;
                        margin-left: 8px;
                        font-size: 14px;
                        line-height: 15px;
                        color: #92C145;
                    }
                }
                &_active{
                    border: 4px solid #202232;
                }
            }
        }

        &__switcher{
            height: 100%;
        }
        &__item{
            display: none;
            height: 90%;
        }
        &_active{
            display: block;
        }

    }
    
`
