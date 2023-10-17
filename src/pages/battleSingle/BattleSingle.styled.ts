import styled from "styled-components";

export const BattleSingleStyled = styled.section`

  max-width: calc(100% - 114px - 470px);

  .battle-area {
    height: calc(100% - 104px);
    position: relative;
    overflow: hidden;
    margin-top: 14px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;

    &__create {
      position: absolute;
      top: 20px;
      right: 20px;
      border-radius: 8px;
      background: rgba(38, 41, 59, 0.90);
      padding: 20px;
      z-index: 2;

      .option {
        margin-bottom: 20px;

        &-group {
          li {
            &.active,
            &:hover {
              color: #92C145;
              background: rgba(146, 193, 69, 0.10);
            }
          }
        }

        &-team {
          li {
            &.active,
            &:hover {
              color: #5562DD;
              background: rgba(85, 98, 221, 0.10);
            }
          }
        }

        &-regular {
          li {
            &.active,
            &:hover {
              color: #F5AD57;
              background: rgba(245, 173, 87, 0.10);
            }
          }
        }

        &:last-child {
          margin-bottom: 0;
        }

        &__top {
          display: flex;
          align-items: center;
          margin-bottom: 15px;

          .img {
            width: 25px;
            height: 25px;
            position: relative;
            margin-right: 10px;

            &_active {
              img:last-child {
                opacity: 0;
              }
            }

            img {
              width: 100%;
              height: 100%;
              object-fit: contain;
              position: absolute;
              top: 0;
              left: 0;
              -webkit-transition: all .3s ease;
              -moz-transition: all .3s ease;
              -ms-transition: all .3s ease;
              -o-transition: all .3s ease;
              transition: all .3s ease;
            }
          }
        }

        li {
          border-radius: 10px;
          background: rgba(128, 136, 168, 0.10);
          padding: 10px 20px;
          color: #8088A8;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          -webkit-transition: all .3s ease;
          -moz-transition: all .3s ease;
          -ms-transition: all .3s ease;
          -o-transition: all .3s ease;
          transition: all .3s ease;
        }

        ul {
          display: flex;
          gap: 10px
        }

        h3 {
          color: #8088A8;
          font-size: 16px;
          font-weight: 500;
        }
      }

      .create-game__button {
        border-radius: 8px;
        background: rgba(54, 58, 81, 0.70);
        padding: 16px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        cursor: pointer;
        -webkit-transition: all .3s ease;
        -moz-transition: all .3s ease;
        -ms-transition: all .3s ease;
        -o-transition: all .3s ease;
        transition: all .3s ease;

        img {
          margin-left: 15px;
          margin-right: 10px;
        }

        p {
          color: #FFF;
          font-size: 14px;
          font-weight: 700;
        }

        span {
          color: #8088A8;
          font-size: 16px;
          font-weight: 700;
          -webkit-transition: all .3s ease;
          -moz-transition: all .3s ease;
          -ms-transition: all .3s ease;
          -o-transition: all .3s ease;
          transition: all .3s ease;
        }

        &:hover {
          background: #363A51;

          span {
            color: #FFF;
          }
        }

        &:active {
          -webkit-transform: scale(0.95);
          -moz-transform: scale(0.95);
          -ms-transform: scale(0.95);
          -o-transform: scale(0.95);
          transform: scale(0.95);
        }
      }
    }

    &__center {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      padding: 200px;
      margin: -100px;
      min-height: 100%;
      user-select: none;
      display: flex;
      justify-content: space-between;

      &.area-team-2v2 {
        .area__line:nth-child(1) {
          margin-left: 50px;
        }

        .area__line:nth-child(2) {
          margin-right: 50px;
        }

        .area__line:nth-child(3) {
          margin-left: 50px;
        }

        .area__line:nth-child(4) {
          margin-right: 50px;
        }
      }

      &.area-group-2p,
      &.area-regular-1v1 {
        .area__line:nth-child(1) {
          margin-left: 50px;
        }

        .area__line:nth-child(2) {
          display: none;
        }

        .area__line:nth-child(3) {
          display: none;
        }

        .area__line:nth-child(4) {
          margin-right: 50px;
        }
      }

      &.area-group-3p,
      &.area-regular-1v1v1 {
        .area__line:nth-child(1) {
          margin-left: 50px;
        }
        .area__line:nth-child(2) {
          display: none;
        }
        .area__line:nth-child(4) {
          margin-right: 50px;
        }
      }

      &.area-group-4p,
      &.area-regular-4way {
        .area__line:nth-child(1) {
          margin-left: 50px;
        }
        .area__line:nth-child(4) {
          margin-right: 50px;
        }
      }

      &.area-group-2p {
        justify-content: space-around;
      }
      &.area-group-3p {
        justify-content: space-around;
      }
      &.area-group-4p {
        justify-content: space-around;
      }
    }

    .crate {
      border-radius: 8px;
      background: rgba(38, 41, 59, 0.80);
      width: 110px;
      height: 110px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      &__image {
        width: 50px;
        margin: auto 0;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }

      .price {
        display: flex;
        align-items: center;
        justify-content: center;

        span {
          color: #FFF;
          font-size: 12px;
          font-weight: 700;
          margin-left: 8px;
        }
      }

      .top {
        border-radius: 8px;
        background: rgba(38, 41, 57, 0.80);
        display: flex;
        align-items: center;
        justify-content: space-between;

        button {
          padding: 5px 10px;
          background: transparent;
          border: none;
          cursor: pointer;
          height: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;

          &.minus {
            &:after {
              content: '';
              width: 1px;
              -webkit-border-radius: 5px;
              -moz-border-radius: 5px;
              border-radius: 5px;
              height: 15px;
              background: rgba(162, 171, 197, 0.05);
              position: absolute;
              right: 0;
            }
          }

          &.plus {
            &:after {
              content: '';
              width: 1px;
              -webkit-border-radius: 5px;
              -moz-border-radius: 5px;
              border-radius: 5px;
              height: 15px;
              background: rgba(162, 171, 197, 0.05);
              position: absolute;
              left: 0;
            }
          }

          svg {
            display: block;
          }
        }

        input {
          width: 100%;
          background: transparent;
          border: none;
          outline: none;
          text-align: center;
          color: #FFF;
          font-size: 12px;
          font-weight: 500;
          height: 100%;

          &::-webkit-outer-spin-button,
          &::-webkit-inner-spin-button {
            -webkit-appearance: none
          }
        }
      }

      &:not(&:last-child) {
        margin-bottom: 30px;
        position: relative;

        &:after {
          content: '';
          background: rgba(162, 171, 197, 0.50);
          width: 2px;
          height: 30px;
          position: absolute;
          bottom: -30px;
        }
      }

    }

    &__bottom {
      position: absolute;
      bottom: 20px;
      left: 20px;
      right: 20px;
      height: 100px;
      display: flex;
      align-items: center;

      strong {
        position: relative;
        color: #A2ABC5;
        text-align: center;
        font-size: 16px;
        font-weight: 700;
        margin-top: 25px;
        display: block;
      }

      .bgd {
        position: absolute;
        bottom: 0;
        left: 0;
      }

      .bottom__people {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: 100px;
        padding-right: 100px;
        width: 100%;
        margin-top: -20px;

        &.bottom__group-4p,
        &.bottom__group-3p,
        &.bottom__group-2p {
          justify-content: space-around;
        }
      }

      .person {
        position: relative;
        display: flex;
        align-items: flex-end;

        .user__photo {
          background: #212232;
          width: 65px;
          height: 65px;
          -webkit-border-radius: 8px;
          -moz-border-radius: 8px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        &:before {
          content: '';
          width: 35px;
          height: 3px;
          -webkit-border-radius: 5px;
          -moz-border-radius: 5px;
          border-radius: 5px;
          position: absolute;
          left: 15px;
          bottom: -10px;
        }

        img {
          width: 65px;
          height: 65px;
          border-radius: 8px 8px 0px 8px;
        }

        span {
          padding: 7px 15px;
          border-radius: 8px;
          background: #363A51;
          color: #8088A8;
          text-align: center;
          font-size: 14px;
          font-weight: 500;
          display: block;
          margin-left: -5px;
          min-width: 110px;
        }

        &_left {
          span {
            transform: rotate(-2deg);
          }
        }

        &_right {
          span {
            transform: rotate(2deg);
          }
        }

        &_blue {
          &:before {
            background: #5562DD;
            box-shadow: 0 0 10px #5562DD;
          }
        }

        &_red {
          &:before {
            background: #EC5555;
            box-shadow: 0 0 10px #EC5555;
          }
        }

        &_green {
          &:before {
            background: #92C145;
            box-shadow: 0 0 10px #92C145;
          }
        }

        &_orange {
          &:before {
            background: #F5AD57;
            box-shadow: 0 0 10px #F5AD57;
          }
        }

        &_loading {
          .user__photo {
            border: 2px dashed #343748;
          }
        }
      }

      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }

    &__bgd {
      position: relative;
      width: 100%;
      height: 100%;
      -webkit-border-radius: 10px;
      -moz-border-radius: 10px;
      border-radius: 10px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      &:after {
        content: '';
        border-radius: 10px;
        background: rgba(32, 34, 50, 0.75);
        backdrop-filter: blur(10px);
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
      }
    }
  }

`
