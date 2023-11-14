import { styled } from 'styled-components';

export const ShopStyle = styled.section`

  .section-shop {

    &__list-games {
      max-height: calc(100vh - 80px - 76px - 34px);
      height: 100%;
      overflow: auto;
      background: #202232;
      border-radius: 10px;
      padding: 20px;
      margin-top: 14px;

      .item__button {
        background: rgba(85, 98, 221, 0.8);
        border-radius: 10px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 260px;
        width: 100%;
        cursor: pointer;
        height: 50px;
        transition: all .3s ease;
        border: none;

        &:hover {
          transform: scale(1.05);
        }

        &:active {
          transform: scale(.95);
        }

        span {
          font-weight: 500;
          font-size: 14px;
          line-height: 15px;
          color: #FFFFFF;

          &:first-child {
            margin-right: 14px;
          }
        }

        img {
          margin-right: 6px;
        }
      }

      .item__type {
        border-radius: 0px 8px 8px 0px;
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 40px;
        width: 40px;
        height: 40px;
        margin-right: 30px;

        img {
          width: 24px;
        }

        &_clothes {
          background: rgba(127, 63, 209, 0.15);
          cursor: pointer;
        }

        &_coins {
          background: rgba(245, 173, 87, 0.1);
        }
      }

      .user__photo {
        width: 50px;
        height: 50px;
        margin: 0 5px;

        img {
          width: 100%;
          height: 100%;
          border-radius: 10px;
        }
      }

      .user__name {
        font-weight: 500;
        font-size: 14px;
        line-height: 15px;
        margin: 0 5px;
        color: #FFFFFF;
      }

      .item__user {
        display: flex;
        align-items: center;
        margin: 0 -5px;
        transition: all .3s ease;
        width: 100%;

        &:last-child {
          justify-content: flex-end;
        }

        &_load {
          height: 50px;

          .user__load {
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px dashed rgba(162, 171, 197, 0.15);
            border-radius: 10px;
          }

          .load {
            width: 100%;
            height: 14px;
          }

          .user__name,
          .user__photo {
            display: none;
          }
        }
      }

      .item__clothes {
        display: flex;
        align-items: center;
        position: absolute;
        left: 70px;
        opacity: 0;
        visibility: hidden;
        transition: all .3s ease;

        li {
          background: #2D3143;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          width: 60px;
          height: 60px;
          margin-right: 6px;
        }

        .clothes__cool {
          width: 8px;
          height: 8px;
          top: 6px;
          left: 6px;
          position: absolute;
          border-radius: 6px;
        }

        img {
          width: 36px;
          height: 36px;
        }
      }

      .list-games__item {
        background: #26293B;
        border-radius: 10px;
        padding: 15px;
        padding-left: 0;
        display: flex;
        align-items: center;
        position: relative;

        &_active {
          .item__button {
            opacity: 0;
            visibility: hidden;
          }

          .item__clothes + .item__user {
            opacity: 0;
            visibility: hidden;
          }

          .item__clothes {
            opacity: 1;
            visibility: visible;
          }
        }

        &:not(:last-child) {
          margin-bottom: 8px;
        }

        &_running {
          .item__button {
            background: #363A51;
          }
        }

        &_finish {
          .item__button {
            border-radius: 10px;
            overflow: hidden;
            background: #363A51;
          }

          .winner {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .looser {
            background: #232536;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .item__user_looser {
            opacity: .5;
          }
        }
      }
    }

    &__skins {
      background: #202232;
      border-radius: 10px;
      margin-top: 14px;
      padding: 32px 30px 30px;
      max-height: calc(100vh - 80px - 76px - 34px);
      height: 100%;
      overflow: auto;

      .skins__block {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        margin: 0 auto;
        grid-gap: 10px;
        margin-top: 47px;
        max-width: 1034px;
      }

      .skins__item {
        background: #26293B;
        border-radius: 10px;
        text-align: center;
        padding: 20px;
        padding-bottom: 0;
        position: relative;

        .item__check {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          top: 17px;
          right: 17px;
          opacity: 0;
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

        .item__skin {
          max-width: 176px;
          margin: 0 auto;
          height: 350px;
          display: flex;
          align-items: center;
          
          .load {
            margin-bottom: 50px;
          }

          img {
            display: block;
            margin: 0 auto;
            object-fit: cover;
            width: 100%;
            height: 350px;
          }
        }

        &_active {
          .item__check {
            opacity: 1;
          }
        }

        p {
          font-weight: 500;
          font-size: 13px;
          line-height: 14px;
          color: rgba(162, 171, 197, 0.5);
          margin-top: 6px;
          margin-bottom: 9px;
        }

        .item__buy {
          width: 140px;
          height: 50px;
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          /* background: #4A55BB; */
          border-radius: 8px;

          &:hover button {
            &.buy__price {
              /* opacity: 0;
              visibility: hidden; */
            }

            &.buy__buy {
              opacity: 1;
              visibility: visible;
            }
          }

          .sale {
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

          button {
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

            span {
              font-weight: 700;
              font-size: 14px;
              line-height: 13px;
              color: #FFFFFF;
            }

            img {
              margin-right: 6px;
            }
          }

          .buy__set {
            transition: all .3s ease;
            opacity: 1;
            visibility: visible;
            background-color: #5562dd;

            &:hover {
              transform: scale(1.05);
            }

            &:active {
              transform: scale(0.95);
            }
          }

          .buy__isset {
            backdrop-filter: blur(5px);
            background: rgba(162, 171, 197, 0.4);
            cursor: default;
          }

          .buy__price {
            background: #4A55BB;
          }

          .buy__buy {
            opacity: 0;
            visibility: hidden;
            background: #5562DD;
          }

          &_bought {
            background: transparent;

            button {
              display: none;
            }

            .buy__set {
              display: block;
              opacity: 1;
              visibility: visible;
            }
          }
        }

        h2 {
          font-weight: 700;
          font-size: 16px;
          line-height: 15px;
          color: #FFFFFF;
        }
      }

      .skins__top {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
      }

      .skins__back {
        display: flex;
        align-items: center;
        position: absolute;
        left: 0px;

        span {
          font-weight: 500;
          font-size: 14px;
          line-height: 15px;
          color: #A2ABC5;
          margin-left: 14px;
        }
      }

      h1 {
        text-align: center;
        font-weight: 700;
        font-size: 24px;
        line-height: 23px;
        text-align: center;
        color: #FFFFFF;
      }
    }

    &__top {
      display: flex;
      height: 80px;

      .clothes-shop {
        background: linear-gradient(270deg, rgba(109, 69, 193, 0.4) 0%, rgba(109, 69, 193, 0.3) 100%);
        border-radius: 10px;
        padding: 0 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 360px;
        width: 100%;
        margin-left: 14px;

        p {
          font-weight: 500;
          font-size: 14px;
          line-height: 13px;
          color: #FFFFFF;
        }
      }

      .create-game {
        display: flex;
        align-items: center;
        width: 100%;
        background: linear-gradient(-90deg, rgba(146, 193, 69, 0.1) 0%, #202232 20%);
        border-radius: 10px;
        padding: 0 20px;

        &__button {
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

          &:hover {
            transform: scale(1.05);
          }

          &:active {
            transform: scale(0.9);
          }
        }

        p {
          font-weight: 400;
          font-size: 15px;
          line-height: 14px;
          color: #A2ABC5;
          margin-right: auto;
        }
      }

      .players {
        display: flex;
        align-items: center;

        span {
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
