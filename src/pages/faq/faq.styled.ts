import { styled } from 'styled-components';

export const FaqStyle = styled.section`
    
    .section-faq{

        &__item{
            background: #26293B;
            border-radius: 10px;
            padding: 0px 30px;
            &:not(:last-child){
                margin-bottom: 10px;
            }
            .item__head{
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 20px 0;
                cursor: pointer;
                .arr{
                    width: 20px;
                    height: 20px;
                    border: 1px solid rgba(162, 171, 197, 0.1);
                    border-radius: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                img{
                    opacity: 0.5;
                }
                h2{
                    font-weight: 700;
                    font-size: 14px;
                    line-height: 13px;
                    color: #FFFFFF;
                }
            }
            .item__body{
                border-top: 1px solid rgba(162, 171, 197, 0.05);
                padding-top: 20px;
                display: none;
                padding-bottom: 20px;
            }
            p{
                font-weight: 400;
                font-size: 14px;
                line-height: 24px;
                color: #FFFFFF;
            }
            .vk{
                color: #7398F9;
            }
            .dis{
                color: #8589EE;
            }

            &_active{
                background: #2B2E42;
                .item__body{
                    display: block;
                }
                .item__head .arr{
                    background: rgba(162, 171, 197, 0.1);
                    transform: scaleY(-1);
                }
                .item__head img{
                    opacity: 1;
                }
            }
        }
        &__block{
            max-height: calc(100vh - 99px - 76px - 220px);
            height: 100%;
            overflow: auto;
            margin-right: -20px;
            padding-right: 20px;
            transition: all .3s ease;

            &_hide {
                opacity: 0;
            }
        }
        &__catalog{
            display: flex;
            margin: 0 -5px;
            margin-bottom: 14px;
            .catalog__item{
                background: linear-gradient(180deg, #2B2E42 54.06%, rgba(43, 46, 66, 0.8) 100%);
                border-radius: 10px;
                padding: 15px;
                width: 100%;
                margin: 0 5px;
                position: relative;
                border: none;
                cursor: pointer;
                transition: all .3s ease;
                &:active{
                    transform: scale(.9);
                }
                *{
                    position: relative;
                    z-index: 2;
                }
                &:after{
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 1;
                    background: linear-gradient(180deg, rgba(252, 179, 94, 0) 0%, rgba(252, 179, 94, 0.1) 100%);
                    opacity: 0;
                    transition: all .3s ease;
                    border-radius: 10px;
                }
                &_active,
                &:hover{
                    &:after{
                        opacity: 1;
                    }
                    h2{
                        color: #fff !important;
                    }
                }
                img{
                    width: 30px;
                    height: 30px;
                }
                h2{
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 18px;
                    color: #A2ABC5;
                    transition: all .3s ease;
                    margin-top: 15px;
                }
            }
        }
        &__content{
            margin-top: 10px;
            padding: 20px;
            background: #202232;
            border-radius: 10px;
            height: calc(100% - 114px);
        }
        &__top{
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 27px 30px 25px;
            background: #202232;
            border-radius: 10px;
            .top__rht{
                display: flex;
                align-items: center;
            }
            .vk,
            .dis{
                border-radius: 8px;
                height: 46px;
                width: 122px;
                display: flex;
                align-items: center;
                // justify-content: center;
                padding-left: 15px;
                margin-left: 10px;
                span{
                    font-weight: 700;
                    font-size: 13px;
                    line-height: 12px;
                    text-transform: uppercase;
                    color: #FFFFFF;
                    margin-left: 22px;
                }
            }
            .vk{
                background: #497FE9;
            }
            .dis{
                background: #434FB7;
            }
            p{
                font-weight: 400;
                font-size: 14px;
                line-height: 13px;
                color: #A2ABC5;
                margin-top: 15px;
            }
            h1{
                font-weight: 700;
                font-size: 20px;
                line-height: 19px;
                color: #FFFFFF;
            }
        }
    }

    hr{
        border: 1px solid rgba(162, 171, 197, 0.05);
        margin: 14px 0;
    }
    
  
  @media screen and (max-width: 1024px) {
    .section-faq__catalog {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 12px;
    }
  }
  @media screen and (max-width: 768px) {
    .section-faq__catalog {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 12px;
    }
    .section-faq__top {
      flex-direction: column;
      align-items: flex-start;
    }
    .section-faq__top a {
      margin-left: 0 !important;
      margin-right: 10px;
      margin-top: 10px;
    }
  }
  @media screen and (max-width: 480px) {
    .section-faq__catalog {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 10px;
    }

    .section-faq__item {
      padding-left: 10px;
      padding-right: 10px;
    }
    .section-faq__item .item__body {
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }
`
