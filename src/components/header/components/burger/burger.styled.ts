import { styled } from 'styled-components';

export const BurgerStyled = styled.div`

  .burger__menu {
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
    .header__volume {
      display: none;
    }

    .music-volume {
      display: none;
    }

    &_active {
      opacity: 1;
      visibility: visible;
    }

    li {
      margin-right: 0;

      &.li_notice {
        position: relative;

        &:after {
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

    a {
      padding: 13px 10px;
      font-weight: 500;
      font-size: 13px;
      line-height: 14px;
      color: #A2ABC5;
      border-radius: 6px;
      display: block;

      &:hover {
        color: #676D83;
        background: rgba(162, 171, 197, 0.05);
      }
    }
  }
  
  @media screen and (max-width: 1250px) {
    .burger__menu .header__support {
      display: flex;
      padding: 10px 20px;
    }

    .burger__menu .volume__block {
      position: static;
      opacity: 1;
      visibility: hidden;
      margin-left: 10px;
    }
    
    .burger__menu_active {
      .volume__block {
        visibility: visible;
      }
    }

    .burger__menu .header__socials {
      display: flex;
      margin-left: 0;
      margin-top: 10px;
      a {
        color: #676D83;
        background: rgba(162, 171, 197, 0.05);
        margin-right: 5px;
        height: 40px;
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      svg {
        display: block;
      }
    }
    
    .burger__menu .music-volume {
      display: flex;
      margin-bottom: 10px;
    }
  }

  @media screen and (max-width: 650px) {
    .burger__menu .header__coins {
      display: flex;
      margin: 10px 0;
      width: 100%;
    }
    .burger__menu .header__user {
      display: flex;
      padding: 5px;
      margin-top: 10px;
      color: #676D83;
      background: rgba(162, 171, 197, 0.05);
      img {
        display: block;
      }
    }
  }

`
