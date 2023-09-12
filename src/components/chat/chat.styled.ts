import { styled } from 'styled-components';

export const ChatStyle = styled.div`
    

    border-radius: 10px 0 10px 10px;
    padding: 10px;
    height: calc(100vh - 225px);
    padding: 10px;
    display: flex;
    flex-direction: column;
    overflow: auto;
    padding-top: 20px;
    scroll-behavior: smooth;
    
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
        pointer-events: none;
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
        width: 100%;
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

    .chat__bottom {
        background-color: #202232;
        position: absolute;
        bottom: 10px;
        width: calc(100% - 20px);
        left: 10px;
        margin-top: 10px;
    }
    .section-right__resources{
        margin: 0 -5px;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        /* position: absolute; */
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
    .section-right__bottom{
        display: flex;
        background: #26293B;
        border-radius: 8px;
        margin-top: auto;
        padding: 12px 20px;
        padding-left: 0;
        /* position: absolute; */
        bottom: 10px;
        left: 10px;
        right: 10px;

        ._red {
            color: red !important;
        }
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
        
    
`
