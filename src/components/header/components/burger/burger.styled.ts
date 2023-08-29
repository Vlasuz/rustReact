import { styled } from 'styled-components';

export const BurgerStyled = styled.div`
    
    .burger__menu{
        background: #26293B;
        box-shadow: 0px 7px 15px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5px);
        border-radius: 10px;
        min-width: 206px;
        position: absolute;
        top: 100%;
        right: 30px;
        z-index: 10;
        padding: 10px;
        opacity: 0;
        visibility: hidden;
        transition: all .3s ease;

        .header__user,
        .header__coins,
        .header__socials,
        .header__support,
        .header__volume{
            display: none;
        }

        .music-volume {
            display: none;
        }

        &_active{
            opacity: 1;
            visibility: visible;
        }
        li{
            margin-right: 0;
            &.li_notice{
                position: relative;
                &:after{
                    content: '';
                    background: #E8A14E;
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    top: 50%;
                    transform: translateY(-50%);
                    right: 18px;
                    position: absolute;
                }
            }
        }
        a{
            padding: 13px 10px;
            font-weight: 500;
            font-size: 13px;
            line-height: 14px;
            color: #A2ABC5;
            border-radius: 6px;
            display: block;
            &:hover{
                color: #676D83;
                background: rgba(162, 171, 197, 0.05);
            }
        }
    }
    
`
