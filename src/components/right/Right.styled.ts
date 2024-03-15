import { styled } from 'styled-components';
import halfCircle from './../../assets/images/half-circle.svg'

export const RightStyled = styled.section`

  max-width: 456px;
  margin-left: 14px;
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
  height: calc(100vh - 90px);
  display: flex;
  flex-direction: column;
  position: relative;
  padding-bottom: 0;
  margin-top: -5px;

  .item__cool {
    width: 10px;
    height: 10px;
    top: 8px;
    left: 8px;
    position: absolute;
    border-radius: 50%;

    &:hover + .item__title {
      opacity: 1;
      visibility: visible;
    }
  }
  
  .item__is-lock {
    display: none;

    &_active {
      display: block;
    }

    img {
      position: absolute;
      top: 5px;
      right: 5px;
      z-index: 2;
      &:hover + p {
        opacity: 1;
        visibility: visible;
      }
    }

    p {
      position: absolute;
      left: 0;
      width: 100%;
      top: 0;
      border-radius: 8px 8px 0px 0px;
      background: #313344;
      padding: 7px 0;
      color: #FFF;
      font-size: 12px;
      font-weight: 400;
      z-index: 3;
      text-align: center;
      transition: all .3s ease;

      opacity: 0;
      visibility: hidden;

      &:hover {
        opacity: 1;
        visibility: visible;
      }
    }
  }

  .item__title {
    position: absolute;
    left: 0;
    width: 100%;
    top: 0;
    border-radius: 8px 8px 0px 0px;
    background: #313344;
    padding: 7px 0;
    color: #FFF;
    font-size: 12px;
    font-weight: 400;
    z-index: 3;
    text-align: center;
    transition: all .3s ease;

    opacity: 0;
    visibility: hidden;

    &:hover {
      opacity: 1;
      visibility: visible;
    }
  }

  .postamat__block {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(10, 1fr);
    grid-gap: 6px;
    overflow: auto;

    &_empty {
      display: flex;
    }
  }

  .postamat {
    background: #202232;
    padding: 15px;
    height: 100%;
    border-radius: 10px;

    opacity: 0;

    user-select: none;

    transition: all .3s ease;

    &_hide {
      opacity: 0;
    }

    &_active {
      opacity: 1;
    }

    .notice__add-cart {
      bottom: 100px;
    }

    &__cart {
      border: 1px dashed rgba(162, 171, 197, 0.15);
      border-radius: 10px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 14px;
      display: none;

      &_show {
        display: flex;
      }

      img {
        width: 15px;
      }

      span {
        font-weight: 400;
        font-size: 14px;
        line-height: 15px;
        color: rgba(136, 144, 168, 0.5);
        margin-left: 10px;
      }

      &_full {
        background: rgba(85, 98, 221, 0.4);
        border: none;
        padding: 0 20px;
        cursor: pointer;

        .sum {
          margin-left: auto;
        }

        span {
          font-weight: 500;
          font-size: 14px;
          line-height: 13px;
          color: #FFFFFF;
        }
      }
    }

    hr {
      border: 1px solid rgba(162, 171, 197, 0.05);
      margin: 14px 0;
    }

    &__block {

    }

    &__item {
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

      &:active {
        transform: scale(.9);
      }

      &:hover {
        background: rgba(162, 171, 197, 0.15);

        .item__buy {
          opacity: 1;
        }

        .item__photo {
          /* opacity: 0; */
        }
      }
      
      .item__buy {
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

      .item__count {
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

      .item__price {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 20px;

        span {
          font-weight: 700;
          font-size: 12px;
          line-height: 11px;
          color: #FFFFFF;
          margin-left: 6px;
        }
      }

      .item__photo {
        max-width: 100px;
        height: 70px;
        text-align: center;
        width: 100%;
        opacity: 1;
        transition: all .3s ease;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }
      }
    }

    &__filter {

    }

    &__range {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;

      .range__text {
        display: flex;
        align-items: center;
        position: absolute;
        pointer-events: none;
      }

      p {
        font-weight: 500;
        font-size: 13px;
        line-height: 12px;
        margin-left: 6px;
        color: #FFFFFF;
      }

      input[type=range] {
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
        box-shadow: -300px 0 0 300px rgba(85, 98, 221, 0.3);
        border-right: 2px solid #5562DD;
      }
    }

    &__search {
      background: #26293B;
      border-radius: 8px 8px 0px 0px;
      display: flex;
      align-items: center;

      input {
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

        &::placeholder {
          color: rgba(162, 171, 197, 0.5);
        }
      }

      button {
        margin-right: 20px;
        background: transparent;
        border: none;
        cursor: pointer;
      }
    }
  }

  .item__check {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 10px;
    right: 10px;
    opacity: 0;
    z-index: 2;
    transition: all .3s ease;

    &:after {
      content: '';
      width: 34px;
      height: 34px;
      background: rgba(146, 193, 69, 0.1);
      filter: blur(12.5px);
      border-radius: 50%;
      position: absolute;
    }
  }

  .postamat__item_checked {
    .item__check {
      opacity: 1;
    }
  }

  &.section-right_chat {
    border-radius: 10px 0 0 10px;
    
    .section-right__switcher,
    .section-right__item,
    .section-right__item:before,
    .section-right__item:after {
      -webkit-border-radius: 10px 0 10px 10px;-moz-border-radius: 10px 0 10px 10px;border-radius: 10px 0 10px 10px;
    }
    .section-right__top {
      background: linear-gradient(to left, #202232 85%, transparent);
    }
  }
  
  .section-right {

    &__rules {
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

      &_active {
        opacity: 1;
        visibility: visible;
      }

      h2 {
        font-weight: 700;
        font-size: 20px;
        line-height: 19px;
        color: #FFFFFF;
        text-align: center;
        margin-bottom: 30px;
      }

      h3 {
        font-weight: 500;
        font-size: 15px;
        line-height: 17px;
        margin: 20px 0;
        color: #FC6C6C;
      }

      p {
        font-weight: 400;
        font-size: 13px;
        line-height: 24px;
        color: #FFFFFF;
      }
    }

    &__cart-bought,
    &__cart {
      position: absolute;
      top: 74px;
      left: 10px;
      width: calc(100% - 20px);
      height: calc(100vh - 180px);
      overflow: auto;
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

      &_active {
        opacity: 1;
        visibility: visible;
      }

      .buttons {
        display: flex;
        align-items: center;
        margin: 0 -4px;
        margin-top: auto;

        button {
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

          &:hover {
            transform: scale(1.05);
          }

          &:active {
            transform: scale(.95);
          }
        }

        span {
          font-weight: 500;
          font-size: 14px;
          line-height: 13px;
          text-transform: capitalize;
          color: #FFFFFF;
        }

        &__back {
          background: #2E3145;
          position: relative;

          img {
            display: block;
            opacity: 0.7;
            position: absolute;
            left: 20px;
            top: 50%;
            transform: scaleX(-1) translateY(-50%);
          }

          span {
            color: #8890A8;
          }
        }

        &__buy {
          background: rgba(85, 98, 221, 0.8);
        }
      }

      h2 {
        font-weight: 700;
        font-size: 20px;
        line-height: 19px;
        color: #FFFFFF;
        margin-bottom: 20px;
      }

      .cart__item {
        background: rgba(162, 171, 197, 0.06);
        border-radius: 8px;
        padding: 15px 20px;
        display: flex;
        align-items: center;
        margin-bottom: 8px;
        transition: all .3s ease;

        &_deleted {
          opacity: 0;
        }
      }

      .item__delete {
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

        &:hover {
          img {
            opacity: 1;
          }
        }

        img {
          width: 7px;
          opacity: 0.5;
          transition: all .3s ease;
        }
      }

      .item__name {
        font-weight: 400;
        font-size: 12px;
        line-height: 11px;
        margin-bottom: 6px;
        color: #FFFFFF;
      }

      .item__price {
        display: flex;
        align-items: center;

        span {
          font-weight: 700;
          font-size: 12px;
          line-height: 11px;
          color: #FFFFFF;
        }

        img {
          margin-right: 6px;
        }
      }

      .item__photo {
        margin-right: 14px;

        img {
          width: 50px;
          height: 50px;
          object-fit: contain;
        }
      }
    }

    &__cart-bought {
      z-index: 5;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      h3 {
        font-weight: 700;
        font-size: 20px;
        line-height: 19px;
        color: #FFFFFF;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      p {
        font-weight: 500;
        font-size: 14px;
        line-height: 13px;
        text-align: center;
        color: #A2ABC5;
        margin-top: 20px;
      }

      button {
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

        &:hover {
          transform: scale(1.05);
        }

        &:active {
          transform: scale(.95);
        }
      }

      .img {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 10px;

        &:after {
          content: '';
          position: absolute;
          background: rgba(146, 193, 69, 0.2);
          filter: blur(12.5px);
          width: 34px;
          height: 34px;
        }
      }

      img {
        display: block;
      }

      .text {
        margin: auto 0;
      }
    }

    &__notice {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      z-index: 4;
      bottom: 30px;
      width: 100%;
      max-width: 360px;

      .notice__item {
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

        &_active {
          opacity: 1;
          visibility: visible;
          display: flex;
        }
      }

      .notice__add-cart {
        bottom: 85px;
        z-index: 2;
      }
    }

    &__players {
      overflow: auto;
      height: calc(100vh - 370px);
      margin-top: 14px;
      background: #202232;
      border-radius: 10px;
      padding: 20px 14px 25px;

      .players__top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 17px;
      }

      h3 {
        font-weight: 700;
        font-size: 15px;
        line-height: 14px;
        color: #FFFFFF;
      }

      .count {
        display: flex;
        align-items: center;

        span {
          margin-left: 8px;
          font-weight: 400;
          font-size: 14px;
          line-height: 15px;
          color: #A2ABC5;
        }
      }

      .players__item {
        display: flex;
        align-items: center;
        padding: 5px;
        background: linear-gradient(-90deg, rgba(232, 161, 78, 0.1) 0%, #26293B 30%);
        border-radius: 8px;

        &:not(:last-child) {
          margin-bottom: 6px;
        }
      }

      .item__name {
        font-weight: 500;
        font-size: 13px;
        line-height: 14px;
        color: #FFFFFF;
        margin-left: 10px;
      }

      .item__coins {
        margin-left: auto;
        display: flex;
        align-items: center;
        max-width: 75px;
        width: 100%;

        p, 
        span {
          font-weight: 700;
          font-size: 14px;
          line-height: 13px;
          color: #E8A14E;
          margin-left: 6px;
        }
      }

      .item__photo {
        width: 45px;
        height: 45px;
        border-radius: 10px;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      &_none {
        border: 1px dashed rgba(162, 171, 197, 0.15);
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 14px;
        height: 397px;

        big {
          font-weight: 400;
          font-size: 13px;
          line-height: 14px;
          color: rgba(162, 171, 197, 0.5);
        }
      }
    }
    
    &__airdrop {
      background: #202232;
      padding: 24px 14px 14px;

      .airdrop__member {
        background: rgba(85, 98, 221, 0.5);
        border-radius: 10px;
        height: 60px;
        display: flex;
        align-items: center;
        overflow: hidden;
        margin-top: 20px;

        span {
          margin-left: 20px;
          font-weight: 500;
          font-size: 14px;
          line-height: 13px;
          color: #FFFFFF;
        }
      }

      .member__ico {
        position: relative;
        width: 72px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          position: relative;
          z-index: 2;
        }

        &:after {
          content: '';
          background: url(${halfCircle}) no-repeat;
          border-radius: 10px;
          display: block;
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
        }
      }

      .sleepers__buy {
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
        height: 45px;

        &.move__submit {
          height: 45px;
        }
        
        &:active {
          transform: scale(.9);
        }

        &:hover {
          background: rgba(#2E3145, .5);
        }

        span {
          font-weight: 500;
          font-size: 14px;
          line-height: 13px;
          text-transform: capitalize;
          color: #FFFFFF;
        }

        img {
          width: 20px;
          margin-left: 8px;
          margin-right: 6px;
        }
      }

      .move__buttons {
        display: flex;
        align-items: center;
      }

      .move__submit {
        background: #5562DD;
        border-radius: 8px;
        border: none;
        cursor: pointer;
        transition: all .3s ease;
        height: 50px;
        width: 100%;
        &.move__random {
          margin-right: 0;
          span {
            margin: 0;
          }
        }

        &:active {
          transform: scale(.9);
        }

        span {
          font-weight: 500;
          font-size: 14px;
          line-height: 13px;
          text-transform: capitalize;
          color: #FFFFFF;
        }
      }

      .move__random {
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

        &:active {
          transform: scale(.9);
        }

        span {
          margin-right: 10px;
          font-weight: 500;
          font-size: 14px;
          line-height: 13px;
          text-transform: capitalize;
          color: #FFFFFF;
        }
      }

      .airdrop__move {
        padding: 16px 14px 20px;
        background: #26293B;
        border-radius: 10px;
        margin-top: 20px;

        h3 {
          font-weight: 700;
          font-size: 15px;
          line-height: 14px;
          color: #FFFFFF;
        }

        ul {
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

      .airdrop__sleepers {
        padding: 16px 14px 20px;
        background: #26293B;
        border-radius: 10px;
        margin-top: 20px;

        ul {
          background: #202232;
          border-radius: 30px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 28px 0 26px;
          height: 44px;

          li {
            width: 100%;
            height: calc(100% + 6px);
            margin-top: -3px;
            margin-bottom: -3px;

            &.button_active button {
              background: linear-gradient(0deg, rgba(232, 161, 78, 0.1) 0%, rgba(232, 161, 78, 0) 100%);
              color: #fff;

              &:after {
                opacity: 1;
              }
            }
          }

          button {
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

            &:after {
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

            &:hover {
              background: linear-gradient(0deg, rgba(232, 161, 78, 0.1) 0%, rgba(232, 161, 78, 0) 100%);
              color: #fff;
            }

            &:active {
              transform: scale(.9);
            }
          }
        }

        h3 {
          font-weight: 700;
          font-size: 15px;
          line-height: 14px;
          color: #FFFFFF;
        }
      }

      .fly__top {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .fly__bottom {
        margin-top: 12px;
      }

      .fly__timer {
        img {
          width: 100%;
        }

        .line {
          background: rgba(162, 171, 197, 0.2);
          border-radius: 2px;
          height: 2px;
          width: 100%;

          &_done {
            background: #F5AD57;
            border-radius: 2px;
            height: 100%;
            width: 0%;
            transition: all 1s linear;
          }
        }
      }

      .airdrop__fly {
        border: 1px dashed rgba(162, 171, 197, 0.15);
        border-radius: 10px;
        width: 100%;
        padding: 14px 14px 20px;

        p {
          font-weight: 400;
          font-size: 13px;
          line-height: 14px;
          color: #A2ABC5;
        }

        .timer {
          display: flex;

          small.dot,
          span {
            font-weight: 400;
            font-size: 24px;
            line-height: 23px;
            color: #FFFFFF;
          }

          small.dot,
          .sec span {
            color: #3A3D4F;
          }

          .sec {
            min-width: 40px
          }
        }
      }

      .airdrop__block {
        display: flex;
      }

      .airdrop__bank {
        background: linear-gradient(90deg, rgba(245, 173, 87, 0.2) 0%, rgba(245, 173, 87, 0.1) 100%);
        border-radius: 8px;
        padding: 10px 14px 20px;
        width: 100%;
        max-width: 160px;
        margin-left: 14px;

        p {
          font-weight: 400;
          font-size: 13px;
          line-height: 14px;
          color: #A2ABC5;
        }

        span {
          font-weight: 700;
          font-size: 20px;
          line-height: 19px;
          margin-left: 6px;
          color: #E8A14E;
        }

        .coins {
          display: flex;
          align-items: center;
          margin-top: 16px;
        }
      }

    }

    &__top {
      display: flex;
      align-items: center;
      //background: #202232;
      margin: 0 -4px;
      background: linear-gradient(to right, #202232 85%, transparent);

      .top__item {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #202232;
        border: 4px solid #191A29;
        padding: 16px;
        cursor: pointer;
        position: relative;

        &:first-child {
          border-radius: 10px;
        }

        &:before {
          content: '';
          height: 5px;
          width: 120%;
          position: absolute;
          background: #191A29;
          top: -5px;
        }

        &_active:first-child {
          &:after {
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

        &:last-child {
          border-radius: 10px;
          width: 90px;
          background: linear-gradient(270deg, rgba(146, 193, 69, 0.1) 0%, rgba(32, 34, 50, 0) 100%);
          transition: all .3s ease;

          & > span {
            display: none;
          }
        }

        &_active:last-child {
          border-radius: 10px 10px 0px 10px;
          background: #202232;
          width: 100%;

          & > span {
            display: block;
            color: #fff;
          }

          &:after {
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

        span {
          font-weight: 500;
          font-size: 15px;
          line-height: 17px;
          color: #A2ABC5;
        }

        .people {
          display: flex;
          align-items: center;
          margin-left: auto;

          span {
            font-weight: 500;
            margin-left: 8px;
            font-size: 14px;
            line-height: 15px;
            color: #92C145;
          }
        }

        &_active {
          border: 4px solid #202232;
        }
      }
    }

    &__switcher {
      height: 100%;
      background: #202232;
      transition: all .3s ease;
      border-radius: 0 10px 10px 0;
    }

    &__item {
      transition: all .3s ease;
      opacity: 0;

      &_hide {
        opacity: 0 !important;
      }
    }

    &_active {
      opacity: 1;
    }
    
  }
  
  .crates .item__price {
    margin-top: 5px;
  }
  .crates .item__photo {
    height: 100px;
  }
  
  
  
  @media screen and (max-width: 1250px) {
    max-width: 100%;
    margin: 0;
  }

`
