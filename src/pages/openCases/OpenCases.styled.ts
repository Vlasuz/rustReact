import styled from "styled-components";
import bgdSpin from './../../assets/images/bgd-spin.jpg'

export const OpenCasesStyled = styled.section`

  max-width: calc(100% - 114px - 470px);

  .center {
    padding: 20px 28px 20px;
    border-radius: 10px;
    background: #202232;
    margin-top: 14px;

    &__spin {
      width: 100%;
      height: 210px;
      border-radius: 10px;
      position: relative;
      margin-bottom: 24px;
      display: flex;
      justify-content: center;
      align-items: center;

      &.active {
        .spin__item {
          &:nth-child(54) {
            
          }

          &:first-child {
            margin-left: calc(-1 * ((170.1px * 50) - 50vw));
            //transition-duration: 10s;
            transition-property: all;
            transition-timing-function: cubic-bezier(0.1, 0.4, 0.5, 1);
          }
        }
      }

      &.center__spin-won_item {
        &:before,
        &:after {
          width: 535px;
          transition: all .3s ease-in;
        }
      }

      .spin__arrow {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: -10px;
      }

      ul {
        display: flex;
        align-items: center;
        overflow: hidden;
      }

      .spin__item {
        border-radius: 8px;
        background: rgba(162, 171, 197, 0.06);
        width: 140px;
        height: 140px;
        min-width: 140px;
        min-height: 140px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        z-index: 2;
        padding: 20px;
        margin: 0 5px;

        &:first-child {
          margin-left: calc(-1 * (1005px - 50vw));
        }

        &.won_the_price {
          .price {
            opacity: 1;
          }
        }

        .price {
          position: absolute;
          border-radius: 5px;
          background: rgba(32, 34, 50, 0.60);
          backdrop-filter: blur(7.5px);
          padding: 3px 10px;
          display: flex;
          align-items: center;
          opacity: 0;
          transition: all .3s ease;
          cursor: pointer;

          &:hover {
            -webkit-transform: scale(1.2);
            -moz-transform: scale(1.2);
            -ms-transform: scale(1.2);
            -o-transform: scale(1.2);
            transform: scale(1.2);
          }

          &:active {
            -webkit-transform: scale(1.1);
            -moz-transform: scale(1.1);
            -ms-transform: scale(1.1);
            -o-transform: scale(1.1);
            transform: scale(1.1);
          }

          img {
            width: 25px;
            display: block;
          }

          span {
            margin-left: 10px;
            color: var(--Orange, #F5AD57);
            font-size: 16px;
            font-weight: 700;
          }
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }

      .spin__bgd {
        background-image: url(${bgdSpin});
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        border-radius: 10px;

        &:after {
          content: "";
          background-color: rgba(32, 34, 50, 0.75);
          backdrop-filter: blur(10px);
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          -webkit-border-radius: 10px;
          -moz-border-radius: 10px;
          border-radius: 10px;
        }
      }

      &:after {
        content: "";
        background: linear-gradient(90deg, #282A3B 0%, rgba(40, 42, 59, 0.90) 35.42%, rgba(40, 42, 59, 0.75) 63.02%, rgba(40, 42, 59, 0.50) 83.33%, rgba(40, 42, 59, 0.00) 100%);
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 200px;
        height: 100%;
        display: block;
        z-index: 3;
        border-radius: 10px 0 0 10px;
      }

      &:before {
        content: "";
        background: linear-gradient(270deg, #282A3B 0%, rgba(40, 42, 59, 0.90) 35.42%, rgba(40, 42, 59, 0.75) 63.02%, rgba(40, 42, 59, 0.50) 83.33%, rgba(40, 42, 59, 0.00) 100%);
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        width: 200px;
        height: 100%;
        display: block;
        z-index: 3;
        border-radius: 0 10px 10px 0;
      }


      &_more {
        position: relative;
        width: 100%;

        .spin__arrow_lft {
          top: 50%;
          transform: translateY(-50%) rotate(-90deg);
          left: -10px;
          position: absolute;
          z-index: 5;
        }

        .spin__arrow_rht {
          top: 50%;
          transform: translateY(-50%) rotate(90deg);
          right: -10px;
          position: absolute;
          z-index: 5;
        }

        .spins {
          display: flex;
          width: 100%;
          justify-content: space-around;
          overflow: hidden;
          height: 100%;
        }

        .spin__item:first-child {
          margin-left: 0;
          margin-top: -120px;
        }

        &.active {
          .spin__item:first-child {
            margin-left: 0;
            margin-top: calc(-1 * (146px * 50 + (15px * 51)));
          }
        }

        .spin__item {
          margin: 5px 0;
        }

        ul {
          flex-direction: column;
        }

        &:before,
        &:after {
          display: none;
        }
      }

    }

    &__buttons {
      display: flex;
      align-items: flex-start;
    }

    &__fast {
      border-radius: 5px;
      background: rgba(46, 49, 69, 0.70);
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;

      span {
        position: absolute;
        bottom: calc(100% + 10px);
        right: 0;
        z-index: 7;
        white-space: nowrap;
        padding: 7px 25px;
        color: #A2ABC5;
        font-size: 12px;
        font-weight: 500;
        border-radius: 10px;
        background: #33374B;
        box-shadow: 0 7px 15px 0 rgba(0, 0, 0, 0.10);
        backdrop-filter: blur(5px);
        
        opacity: 0;
        visibility: hidden;
        transition: all .3s ease;
      }
      &:hover {
        span {
          opacity: 1;
          visibility: visible;
        }
      }
      path{
        transition: all .3s ease;
      }
      svg {
        display: block;
      }
    }

    &__demo {
      margin-left: 15px;
      min-width: 135px;
      padding: 5px;
      border-radius: 5px;
      background: rgba(46, 49, 69, 0.70);
      display: flex;
      align-items: center;
      justify-content: center;
      height: 30px;

      span {
        margin-left: 10px;
        color: #737994;
        font-size: 14px;
        font-weight: 700;
      }
    }

    button {
      border: none;
      cursor: pointer;
    }

    &__buy {
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 295px;
      height: 50px;
      margin-right: 15px;
      background: rgba(85, 98, 221, 0.8);
      transition: all .3s ease;
      &:hover {
        transform: scale(1.02);
      }
      &:active {
        transform: scale(0.99);
      }
      &:disabled {
        background: rgba(46, 49, 69, 0.70);
        &:hover,
        &:active {
          transform: scale(1);
        }
      }

      span {
        color: #FFF;
        font-size: 16px;
        font-weight: 600;
      }

      p {
        color: #FFF;
        font-size: 16px;
        font-weight: 500;
      }

      img {
        margin: 0 5px;
      }
    }

    &__count {
      border-radius: 10px;
      background: rgba(46, 49, 69, 0.70);
      padding: 8px 15px 0;
      margin-right: auto;
      height: 50px;

      span {
        color: #A2ABC5;
        font-size: 14px;
        font-weight: 500;
      }

      ul {
        display: flex;
        gap: 10px;
        height: 25px;
      }

      li {
        height: 100%;
        display: flex;
        align-items: center;
        cursor: pointer;

        &:after {
          content: "";
          background: #3C4053;
          width: 30px;
          height: 3px;
          display: block;
          border-radius: 10px;
          transition: all .3s ease;
        }

        &:hover:after {
          background: #666C82;
          margin-top: -5px;
        }

        &.active:after {
          background: #F5AD57;
        }
      }
    }
  }

  .active-case {
    border-radius: 10px;
    background: #202232;
    padding: 22px 28px 22px;
    margin-top: 14px;

    ul {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      grid-gap: 15px;
    }

    h2 {
      color: #C8D3FF;
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 22px;
    }

    .case {
      border-radius: 10px;
      background: var(--LeftMenuDropBG, #2C2E3E);
      height: 140px;
      display: flex;
      align-items: center;
      justify-content: center;
      //max-width: 295px;
      position: relative;
      overflow: hidden;
      grid-column-start: 1;
      grid-column-end: 3;
      img {
        width: 80px;
      }

      .line__shadow {
        content: "";
        background: linear-gradient(0deg, rgba(232, 161, 78, 0.10) 0%, rgba(232, 161, 78, 0.00) 100%);
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 50%;
        display: block;
        opacity: .15;
      }

      .line {
        position: absolute;
        bottom: 0;
        width: 80%;
        height: 3px;
        background: #F5AD57;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        border-radius: 10px;
      }

      span {
        color: #C8D3FF;
        text-align: center;
        font-size: 16px;
        font-weight: 500;
        max-width: 122px;
        display: block;
        width: 100%;
        margin-left: 15px;
      }
    }
  }
  
  @media screen and (max-width: 1400px) {
    .center__buy {
      min-width: 155px;
    }
  }
  @media screen and (max-width: 1250px) {
    max-width: 100%;
    .center__spin .spin__item:first-child {
      margin-left: calc(-1 * (715px - 50vw));
    }
    .center__spin.active .spin__item:first-child {
      margin-left: calc(-1 * ((164.3px * 50) - 50vw));  
    }
  }
  @media screen and (max-width: 1024px) {
    .active-case ul {
      grid-template-columns: repeat(6, 1fr);
    }
  }
  @media screen and (max-width: 768px) {
    .center__buttons {
      flex-wrap: wrap;
    }
    .center__count {
      margin-bottom: 15px;
    }
    .center button {
      margin-left: 0;
      margin-right: 10px;
    }
    .center__buy {
      min-width: 255px;
      margin-bottom: 15px;
    }
    .center__count {
      margin-right: auto;
    }
    .active-case ul {
      grid-template-columns: repeat(5, 1fr);
    }
  }
  @media screen and (max-width: 576px) {
    .active-case ul {
      grid-template-columns: repeat(3, 1fr);
    }
    .center__spin:after,
    .center__spin:before {
      width: 50px;  
    }
    .center__spin.center__spin-won_item:before,
    .center__spin.center__spin-won_item:after {
      width: 80px;
    }
  }
  @media screen and (max-width: 480px) {
    .active-case ul {
      grid-template-columns: repeat(2, 1fr);
    }
    .active-case .case {
      width: 100%;
      max-width: 100%;
    }
  }

`
