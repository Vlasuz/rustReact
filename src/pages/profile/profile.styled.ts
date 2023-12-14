import { styled } from 'styled-components';

import arrPF from './../../assets/images/arr-td.svg'

export const ProfileStyle = styled.section`


  margin: -14px;

  .section-block {
    background: #202232;
    border-radius: 10px;
    padding: 20px;
    margin: 14px;
    height: calc(100vh - 423px);

    &-information {
      display: grid;
      grid-gap: 14px;
      grid-template-columns: repeat(4, 1fr);
      height: auto;
    }

    &-newcomer {
      .top-gamer {
        grid-column-end: 5;
      }

      .balance {
        display: none;
      }
    }
  }

  .top-gamer {
    background: linear-gradient(90deg, #26293B 0%, rgba(38, 41, 59, 0.5) 100%);
    border-radius: 10px;
    display: flex;
    align-items: center;
    min-height: 130px;
    width: 100%;
    padding: 10px 14px;
    padding-left: 0;
    grid-column-start: 1;
    grid-column-end: 4;

    &__trade-link {
      background: linear-gradient(90deg, rgba(63, 84, 194, 0.3) 0%, rgba(64, 78, 156, 0.2) 100%);
      border-radius: 10px;
      margin-left: auto;
      padding: 14px;
      display: flex;

      .trade-link__check {
        background: rgba(63, 84, 194, 0.5);
        border-radius: 10px;
        text-align: center;
        padding: 14px 10px;
        height: 82px;
        display: flex;
        flex-direction: column;
        max-width: 74px;
        margin-left: 68px;

        img {
          display: block;
          margin: auto;
        }

        span {
          font-weight: 500;
          font-size: 10px;
          line-height: 11px;
          color: #FFFFFF;
          display: block;
          margin-top: 10px;
        }
      }

      .trade-link__block {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      h3 {
        font-weight: 500;
        font-size: 13px;
        line-height: 14px;
        color: #FFFFFF;
      }

      button {
        background: rgba(162, 171, 197, 0.1);
        border-radius: 8px;
        font-weight: 500;
        font-size: 11px;
        line-height: 11px;
        padding: 14px 33px;
        text-transform: uppercase;
        color: #A2ABC5;
        border: none;
        cursor: pointer;
      }

      &_nonactive {
        background: linear-gradient(90deg, rgba(194, 79, 63, 0.3) 0%, rgba(156, 64, 64, 0.2) 100%);

        .trade-link__check {
          background: rgba(224, 90, 90, 0.5);
          text-align: left;
        }
      }
    }

    &__vertical {
      height: 30px;
      width: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 30px;
      background: transparent;
      border: none;
      cursor: pointer;
      span {
        display: flex;
        align-items: center;
        justify-content: center;
        transform: rotate(-90deg);
        background: linear-gradient(-90deg, rgba(146, 193, 69, 0.05) 0%, rgba(146, 193, 69, 0.3) 100%);
        border-radius: 10px 10px 0 0;
        min-width: 130px;
        height: 30px;
        font-weight: 500;
        font-size: 11px;
        line-height: 12px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: #FFFFFF;
      }
    }

    &__info {
      display: flex;

      .info__block {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 20px;
      }

      .info__profile {
        background: linear-gradient(90deg, rgba(35, 123, 255, 0.8) 0%, rgba(56, 132, 247, 0.8) 100%);
        border-radius: 8px;
        padding: 10px 14px;
        display: flex;
        align-items: center;
        width: fit-content;

        span {
          font-weight: 700;
          font-size: 11px;
          line-height: 11px;
          margin-left: 14px;
          color: #FFFFFF;
        }
      }

      .info__name {
        font-weight: 500;
        font-size: 15px;
        line-height: 17px;
        color: #FFFFFF;
      }

      .info__photo {
        width: 70px;
        height: 70px;
        border-radius: 10px;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }

  .balance {
    width: 100%;
    background: linear-gradient(90deg, rgba(245, 173, 87, 0.05) 0%, rgba(245, 173, 87, 0.125) 100%);
    backdrop-filter: blur(5px);
    border-radius: 10px;
    padding: 22px 14px 10px;
    display: flex;
    flex-direction: column;

    &__top {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__history {
      background: rgba(162, 171, 197, 0.1);
      border-radius: 8px;
      margin-top: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 13px;
      cursor: pointer;

      span {
        font-weight: 400;
        font-size: 13px;
        color: rgba(162, 171, 197, 0.5);
        margin-left: 10px;
        margin-bottom: -2px;
      }
    }

    &__coins {
      display: flex;
      align-items: center;
      white-space: nowrap;
      margin-right: 5px;

      span {
        margin-left: 6px;
        font-weight: 700;
        font-size: 16px;
        line-height: 15px;
        color: #FFFFFF;
      }
    }

    h3 {
      margin-bottom: 8px;
      font-weight: 500;
      font-size: 13px;
      line-height: 12px;
      color: #FFFFFF;
    }

    &__add {
      background: #E8A14E;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 14px;
      border: none;
      cursor: pointer;
      transition: all .3s ease;

      &:hover {
        transform: scale(1.1);
      }

      &:active {
        transform: scale(.9);
      }

      span {
        font-weight: 700;
        font-size: 13px;
        line-height: 12px;
        color: #FFFFFF;
        margin-right: 10px;
      }
    }
  }

  .stats {
    background: #26293B;
    border-radius: 10px;
    height: 130px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 14px;

    h3 {
      font-weight: 700;
      font-size: 16px;
      line-height: 15px;
      color: #A2ABC5;
    }

    p {
      font-weight: 700;
      font-size: 24px;
      line-height: 23px;
      color: #FFFFFF;
    }

    sup {
      font-weight: 700;
      font-size: 14px;
      line-height: 13px;
      color: #92C145;
      margin-left: 5px;
    }

    .lines {
      margin: 0 -3px;
      display: flex;
      align-items: center;
    }

    .load {
      margin-bottom: auto;
      margin-top: auto;
    }

    .line__stats {
      background: rgba(162, 171, 197, 0.15);
      border-radius: 2px;
      width: 100%;
      height: 4px;
      margin: 0 3px;

      &.line_active {
        background: #92C145;
      }
    }

    &_disabled {
      border: 1px dashed rgba(162, 171, 197, 0.15);
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      background: transparent;

      h3 {
        position: absolute;
        top: 14px;
        left: 14px;
      }

      p {
        font-weight: 400;
        font-size: 16px;
        line-height: 18px;
        color: rgba(162, 171, 197, 0.5);
      }
    }
  }

  .load {
    margin-top: 50px;
  }

  .tabs {
    border-bottom: 1px solid rgba(162, 171, 197, 0.05);
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;

    &__block {
      overflow: auto;
      height: 90%;
    }

    &__item {
      width: 100%;
      height: 90%;
      transition: all .3s ease;
      opacity: 0;
      position: absolute;
      top: -10000%;
      left: -10000%;
      z-index: -1;

      big {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;
        font-size: 16px;
        line-height: 18px;
        color: rgba(162, 171, 197, 0.5);
        border: 1px dashed rgba(162, 171, 197, 0.15);
        border-radius: 10px;
        margin-top: 40px;
        height: 100%;
      }

      &_active {
        opacity: 1;
        position: static;
      }

      &_hide {
        opacity: 0;
      }

      &-fight {
        .td {
          &:nth-child(1) {
            padding-left: 20px;
            // min-width: 180px;
            max-width: 180px;
          }

          &:nth-child(2) {
            max-width: 100%;
          }

          &:last-child {
            margin-left: auto;
            text-align: right;
            width: fit-content;
            padding-right: 20px;
          }
        }
      }

      &-airdrop {
        .td {
          &:nth-child(1) {
            padding-left: 20px;
            // min-width: 180px;
            max-width: 180px;
          }

          &:nth-child(2) {
            // min-width: 150px;
            max-width: 150px;
          }

          &:nth-child(3) {
            // min-width: 290px;
            max-width: 290px;
          }

          &:nth-child(4) {
            // min-width: 170px;
            max-width: 170px;
          }

          &:nth-child(5) {
            // min-width: 190px;
            max-width: 190px;
          }

          &:nth-child(6) {
            // min-width: 140px;
            max-width: 140px;
          }

          &:last-child {
            margin-left: auto;
            text-align: right;
            width: fit-content;
            padding-right: 20px;
          }
        }
      }
    }

    a,
    button {
      font-weight: 500;
      background: transparent;
      border: none;
      font-size: 16px;
      line-height: 18px;
      position: relative;
      color: #61667C;
      padding-bottom: 23px;
      transition: all .3s ease;
      display: block;
      cursor: pointer;

      &:after {
        content: '';
        background: #196BD8;
        height: 3px;
        border-radius: 10px;
        width: 100%;
        position: absolute;
        left: 0;
        bottom: -2px;
        opacity: 0;
        transition: all .3s ease;
      }

      &:hover {
        color: #fff;
      }
    }

    li {
      margin-right: 70px;

      &.li_active {
        button,
        a {
          color: #fff;

          &:after {
            opacity: 1;
          }
        }
      }
    }
  }

  .table {
    .td {
      width: 100%;

      &__coins {
        display: flex;
        align-items: center;

        span {
          font-weight: 500;
          font-size: 14px;
          line-height: 15px;
          color: #F8F8F8;
          margin-left: 6px;
        }
      }
    }
  }

  .thead {
    padding: 20px 0;

    .td {
      font-weight: 400;
      font-size: 10px;
      line-height: 11px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: rgba(162, 171, 197, 0.3);
    }
  }

  .list-players {
    display: flex;
    align-items: center;

    .count {
      border: 1px solid rgba(162, 171, 197, 0.1);
      border-radius: 8px;
      font-weight: 500;
      font-size: 12px;
      line-height: 13px;
      color: #A2ABC5;
      margin-left: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 34px;
      height: 34px;
      opacity: 0;

      &_active {
        opacity: 1;
      }
    }

    ul {
      display: flex;
      align-items: center;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    li {
      width: 34px;
      height: 34px;
      border-radius: 8px;
      overflow: hidden;
      border: 3px solid transparent;

      &:not(li:first-child) {
        margin-left: -12px;
        border: 3px solid #202232;
      }
    }
  }

  .tr {
    display: flex;
  }

  .tbody {
    .tr {
      padding: 14px 0;
      align-items: center;

      img {
        display: block;
      }
    }

    .tr:nth-child(2n + 1) {
      background: #26293B;
      border-radius: 8px;

      .list-players {
        li {
          &:not(li:first-child) {
            border: 3px solid #26293B;
          }
        }
      }
    }

    .shield {
      margin-left: -5px;

      &:hover {
        img {
          opacity: 1;
        }

        a {
          opacity: 1;
          visibility: visible;
        }
      }

      img {
        opacity: 0.5;
        transition: all .3s ease;
      }

      a {
        position: absolute;
        background: rgba(162, 171, 197, 0.3);
        backdrop-filter: blur(5px);
        border-radius: 10px;
        padding: 16px 14px;
        position: absolute;
        left: -65px;
        width: 150px;
        top: 50%;
        font-weight: 400;
        font-size: 12px;
        line-height: 11px;
        text-transform: uppercase;
        color: #FFFFFF;
        display: flex;
        align-items: center;
        opacity: 0;
        visibility: hidden;
        transition: all .3s ease;
        cursor: pointer;
        
        &:after {
          content: '';
          background: url(${arrPF}) no-repeat;
          width: 5px;
          height: 10px;
          margin-left: auto;
          background-size: 5px;
          background-position: center;
          display: block;
          margin-top: -2px;
        }
      }
    }

    .td {
      &:nth-child(1) {
        font-weight: 500;
        font-size: 14px;
        line-height: 15px;
        color: #A2ABC5;

        span {
          color: #646A80;
          display: block;
          font-size: 12px;
          line-height: normal;
        }
      }

      &:nth-child(2) {
        font-weight: 500;
        font-size: 14px;
        line-height: 15px;
        color: #FFFFFF;
      }

      &:nth-child(6) {
        position: relative;
      }

      &:nth-child(7) {
        img {
          margin-left: auto;
        }
      }
    }
  }

`
