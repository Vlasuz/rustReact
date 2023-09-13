import { styled } from 'styled-components';

export const HistoryStyle = styled.section`
    

    .section-history__all{
        max-width: 142px;
    }
    .section-history__pull{
        background: linear-gradient(270deg, rgba(146, 193, 69, 0.1) 0%, #202232 40%);
    }
    
    .section-history{
        &__top{
            display: flex;
            margin-bottom: 14px;
            button{
                background: #202232;
                border-radius: 10px;
                width: 100%;
                border: none;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 30px 20px;
                margin-right: 10px;
                position: relative;
                cursor: pointer;
                transition: all .3s ease;
                &:last-child{
                    margin-right: 0;
                }
                &:after{
                    content: '';
                    top: 0;
                    left: 20px;
                    position: absolute;
                    background: rgba(162, 171, 197, 0.5);
                    border-radius: 2px;
                    width: 60px;
                    height: 3px;
                }
                &.button_active{
                    background: #26293B;
                    &:after{
                        background: #5562DD;
                    }
                }
            }
            p{
                font-weight: 700;
                font-size: 16px;
                line-height: 15px;
                color: #FFFFFF;
            }
            .cost{
                font-weight: 700;
                font-size: 20px;
                line-height: 19px;
                color: #FFFFFF;
            }
            span{
                color: #61667C;
            }
        }

        &__block {
            height: 100%;
            max-height: calc(100vh - 249px);
            overflow: auto;
            transition: all .3s ease;
            &_hide {
                opacity: 0;
            }
        }

        &__center{
            background: #202232;
            border-radius: 6px;
            display: flex;
            align-items: center;
            padding: 11px 20px;
            margin-bottom: 14px;
        }
        &__switcher{
            display: flex;
            align-items: center;
            margin: 0 -15px;
            li{
                position: relative;
            }
            button,
            a{
                font-weight: 500;
                font-size: 13px;
                line-height: 14px;
                color: rgba(162, 171, 197, 0.5);
                padding: 0 15px;
                background-color: transparent;
                border: none;
                cursor: pointer;
                transition: all .3s ease;
                &:after{
                    content: '';
                    width: 40px;
                    height: 3px;
                    background: #5562DD;
                    border-radius: 2px;
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    bottom: -11px;
                    opacity: 0;
                    transition: all .3s ease;
                }
            }
            .li_active{
                button,
                a{
                    color: #A2ABC5;
                    &:after{
                        opacity: 1;
                    }
                }
            }
        }
        &__sort{
            margin-left: auto;
            display: flex;
            align-items: center;
            span{
                font-weight: 500;
                font-size: 13px;
                line-height: 14px;
                color: rgba(162, 171, 197, 0.5);
                margin-right: 10px;
            }
            .select{
                appearance: none;
                font-weight: 500;
                font-size: 13px;
                line-height: 14px;
                color: rgba(162, 171, 197, 0.8);
                background: transparent;
                outline: none;
                border: none;
                position: relative;
                z-index: 1;
                padding-right: 20px;
                margin-right: -20px;
                &__head {
                    cursor: pointer;
                }
                &__body {
                    position: absolute;
                    backdrop-filter: blur(5px);
                    background: #26293b;
                    border-radius: 10px;
                    box-shadow: 0 7px 15px rgba(0,0,0,.1);
                    min-width: 100px;
                    opacity: 0;
                    padding: 10px;
                    position: absolute;
                    right: 0;
                    top: 150%;
                    transition: all .3s ease;
                    visibility: hidden;
                    z-index: 3;
                }
                &_active {
                    .select__body {
                        visibility: visible;
                        opacity: 1;
                    }
                }
                &__item {
                    background: transparent;
                    border: none;
                    border-radius: 6px;
                    color: #a2abc5;
                    display: block;
                    font-size: 13px;
                    font-weight: 500;
                    line-height: 14px;
                    padding: 7px 10px;
                    text-align: left;
                    transition: all .3s ease;
                    width: 100%;
                    cursor: pointer;
                }
            }
        }

        &__item{
            background: #202232;
            border-radius: 10px;
            display: flex;
            align-items: center;
            padding: 0 20px;
            transition: all .3s ease;
            &_deleted{
                opacity: 0;
            }
            &:not(:last-child){
                margin-bottom: 8px;
            }
            &:first-child {
                .item__list .li__name {
                    bottom: auto;
                    top: 100%;
                }
            }
            &:hover{
                .item__delete{
                    opacity: 1;
                }
            }
            .item__type{
                border: 1px dashed rgba(162, 171, 197, 0.2);
                border-radius: 8px;
                min-width: 36px;
                width: 36px;
                height: 36px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 20px;
            }
            .item__price{
                margin-left: auto;
                white-space: nowrap;
                margin-right: 20px;
                span{
                    font-weight: 700;
                    font-size: 14px;
                    line-height: 13px;
                    color: #FFFFFF;
                    margin-left: 6px;
                }
            }
            .item__delete{
                min-width: 50px;
                width: 50px;
                height: 50px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: rgba(162, 171, 197, 0.04);
                border-radius: 10px;
                margin-left: auto;
                opacity: 0;
                transition: all .3s ease;
                cursor: pointer;
                border: none;
                &:active{
                    transform: scale(.9);
                }
                &:hover{
                    background: rgba(162, 171, 197, 0.1);
                }
            }
            .item__status{
                border-radius: 10px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 16px 20px;
                width: 100%;
                max-width: 160px;
                margin-left: 8px;
                white-space: nowrap;
                span{
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 13px;
                    color: #FFFFFF;
                }
                &_good{
                    background: linear-gradient(90deg, rgba(127, 232, 78, 0.1) 0%, rgba(32, 34, 50, 0) 100%);
                }
                &_grey{
                    background: linear-gradient(90deg, rgba(162, 171, 197, 0.1) 0%, rgba(32, 34, 50, 0) 100%);
                }
            }
            .item__date{
                font-weight: 500;
                font-size: 14px;
                line-height: 15px;
                color: #A2ABC5;
                margin-right: 36px;
                span{
                    color: #61667C;
                    display: block;
                }
            }
            .item__list{
                max-width: 600px;
                width: 100%;
                height: 80px;
                display: flex;
                align-items: center;
                border-radius: 10px;
                margin-right: 20px;
                .li__name{
                    position: absolute;
                    bottom: 100%;
                    background: rgba(162, 171, 197, 0.3);
                    backdrop-filter: blur(5px);
                    border-radius: 10px;
                    padding: 14px;
                    text-align: center;
                    margin-bottom: 6px;
                    opacity: 0;
                    visibility: hidden;
                    transition: all .3s ease;
                    z-index: 1;
                    p{
                        font-weight: 400;
                        font-size: 12px;
                        line-height: 11px;
                        color: #FFFFFF;
                        margin-bottom: 5px;
                        white-space: nowrap;
                    }
                    b{
                        font-weight: 700;
                        font-size: 12px;
                        line-height: 11px;
                        color: #FFFFFF;
                    }
                }
                p.pin{
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 15px;
                    color: #A2ABC5;
                    white-space: nowrap;
                    span{
                        color: #E8A14E;
                    }
                }
                ul{
                    background: #26293B;
                    border-radius: 10px;
                    padding: 10px;
                    width: fit-content;
                    display: flex;
                    align-items: center;
                }
                li{
                    background: rgba(162, 171, 197, 0.06);
                    border-radius: 8px;
                    width: 60px;
                    height: 60px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-right: 6px;
                    position: relative;
                    &:hover{
                        .li__name{
                            opacity: 1;
                            visibility: visible;
                        }
                    }
                    &:last-child{
                        margin-right: 0;
                    }
                }
                .count{
                    background: rgba(162, 171, 197, 0.12);
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 13px;
                    color: #A2ABC5;
                    cursor: pointer;
                    border: 1px solid transparent;
                    transition: all .3s ease;
                    display: none;
                    &_active{
                        display: flex !important;
                    }
                    &:hover{
                        border: 1px solid rgba(162, 171, 197, 0.1);
                        background: transparent;
                    }
                }
                .clothes__cool{
                    width: 8px;
                    height: 8px;
                    top: 6px;
                    left: 6px;
                    position: absolute;
                    border-radius: 50%;
                }
                img{
                    width: 36px;
                    height: 36px;
                    object-fit: contain;
                }
            }
        }
    }
    
`
