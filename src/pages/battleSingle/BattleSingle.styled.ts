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
    
    &__back {
      position: absolute;
      top: 20px;
      left: 20px;
      z-index: 2;
      display: flex;
      align-items: center;
      
      svg {
        display: block;
      }
      
      span {
        color: rgba(162, 171, 197, 0.50);
        font-size: 14px;
        font-weight: 500;
        margin-left: 10px;
        margin-bottom: -2px;
      }
    }

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
        background: rgba(85, 98, 221, 0.8);
        &:hover {
          transform: scale(1.02);
        }
        &:active {
          transform: scale(0.98);
        }
        &:disabled {
          background: rgba(54, 58, 81, 0.70);
          &:active,
          &:hover {
            transform: scale(1);
          }
          span {
            color: #8088A8;
          }
        }

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
          color: #fff;
          font-size: 16px;
          font-weight: 700;
          -webkit-transition: all .3s ease;
          -moz-transition: all .3s ease;
          -ms-transition: all .3s ease;
          -o-transition: all .3s ease;
          transition: all .3s ease;
        }
      }
    }

    .general-block {
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
        justify-content: space-between;
        margin: 0 165px;
      }

      &.area-group-3p {
        justify-content: space-between;
        margin: 0 90px;
      }

      &.area-group-4p {
        justify-content: space-between;
        margin: 0 55px;
      }

      .crate:not(.crate:last-child) {
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
      
      &-end {
        position: relative;
        
        &:after {
          content: '';
          height: 2px;
          //background: linear-gradient(to right, transparent 33.3%, rgba(245, 173, 87, 0.50) calc(33.3% + 1px), rgba(245, 173, 87, 0.50) calc(50% + 1px), transparent 50%);
          //background: linear-gradient(to left, transparent 33.3%, rgba(245, 173, 87, 0.50) calc(33.3% + 1px), rgba(245, 173, 87, 0.50) calc(50% + 1px), transparent 50%);
          //background: linear-gradient(to right, rgba(245, 173, 87, 0.50) calc(50% + 1px), transparent 50%);
          //background: linear-gradient(to left, rgba(245, 173, 87, 0.50) calc(50% + 1px), transparent 50%);
          //background: rgba(245, 173, 87, 0.50);
          position: absolute;
          top: 50px;
          left: 50%;
          transform: translateX(-50%);
          width: calc(100% - 210px);
        }
        
        &_left-half-side {
          &:after {
            background: linear-gradient(to right, transparent 33.3%, rgba(245, 173, 87, 0.50) calc(33.3% + 1px), rgba(245, 173, 87, 0.50) calc(50% + 1px), transparent 50%);
          }
        }
        &_right-half-side {
          &:after {
            background: linear-gradient(to left, transparent 33.3%, rgba(245, 173, 87, 0.50) calc(33.3% + 1px), rgba(245, 173, 87, 0.50) calc(50% + 1px), transparent 50%);
          }
        }
        &_left-side {
          &:after {
            background: linear-gradient(to right, rgba(245, 173, 87, 0.50) calc(50% + 1px), transparent 50%);
          }
        }
        &_right-side {
          &:after {
            background: linear-gradient(to left, rgba(245, 173, 87, 0.50) calc(50% + 1px), transparent 50%);
          }
        }
        &_all-side {
          &:after {
            background: rgba(245, 173, 87, 0.50);
          }
        }
        
        .crate__final {
          background: rgba(245, 173, 87, 0.25);
          .coins {
            span {
              color: #F5AD57;
            }
          }
        }
        .crate__final:before {
          content: '';
          background: rgba(245, 173, 87, 0.50);
          width: 2px;
          height: 120px;
          position: absolute;
          bottom: -120px
        }
        .crate__final:after {
          height: 50px;
          top: -50px;
          background: rgba(245, 173, 87, 0.50);
        }
      }
    }

    &__center {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      min-height: 100%;
      padding: 200px;
      margin: -100px;
      user-select: none;
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
      
      &__lock {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        -webkit-border-radius: 8px;-moz-border-radius: 8px;border-radius: 8px;
        overflow: hidden;
        img {
          position: relative;
          z-index: 2;
        }
        &:after {
          content: '';
          background: #26293B;
          opacity: .9;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      }

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
        margin-bottom: 7px;

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

      .loading {
        p {
          color: #A2ABC5;
          font-family: Gotham Pro;
          font-size: 13px;
          font-weight: 500;
          margin-top: 23px;
          margin-bottom: -10px;
        }
        .load {
          -webkit-transform: scale(1.8);-moz-transform: scale(1.8);-ms-transform: scale(1.8);-o-transform: scale(1.8);transform: scale(1.8);
        }
      }
      &__single {
        -webkit-border-radius: 20px;-moz-border-radius: 20px;border-radius: 20px;
      }
      &__end,
      &__single {
        margin: 0 auto;
        margin-bottom: 50px;
        margin-top: -7px;
        z-index: 2;
        background: #26293B;
        position: relative;
        width: 120px;
        height: 120px;
      }

      &__end {
        margin-top: 42px;
        margin-bottom: 0;
        width: 150px;
        height: 150px;
        
        &:after {
          content: '';
          background: rgba(245, 173, 87, 0.50);
          width: 2px;
          height: 50px;
          position: absolute;
          left: 50%;
          -webkit-transform: translateX(-50%);-moz-transform: translateX(-50%);-ms-transform: translateX(-50%);-o-transform: translateX(-50%);transform: translateX(-50%);
          top: 100%;
          opacity: 0;
        }
        
        &_bottom {
          &:after {
            opacity: 1;
          }
        }
      }

      &__end {
        span {
          color: #FFF;
          text-align: center;
          font-size: 14px;
          font-weight: 500;
        }

        .coins {
          display: flex;
          align-items: center;
          margin-top: 10px;

          span {
            margin-left: 5px;
          }
        }
      }

      &__final {
        margin-top: 100px;
        position: relative;

        span {
          color: #FFF;
          text-align: center;
          font-size: 12px;
          font-weight: 500;
        }

        .coins {
          display: flex;
          align-items: center;
          margin-top: 10px;

          span {
            margin-left: 5px;
          }
        }

        &:after {
          content: '';
          background: rgba(162, 171, 197, 0.50);
          width: 2px;
          height: 70px;
          position: absolute;
          top: -70px;
        }
      }

      &__empty {
        &:after {
          display: none;
        }
      }
    }

    .lines-for-crate {
      position: absolute;
      width: calc(100% - 509px);
      height: 120px;
      background: transparent;
      top: 255px;
      left: 50%;
      transform: translateX(-50%);

      .big-line {
        height: 2px;
        background: rgba(162, 171, 197, 0.50);
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: calc(100% - 100px);
      }

      &.area-group-2p .big-line {
        width: calc(100% - 430px);
      }

      &.area-group-3p .big-line {
        width: calc(100% - 283px);
      }

      &.area-group-4p .big-line {
        width: calc(100% - 210px);
      }

      .lines {
        display: flex;
        justify-content: space-between;

        .area__line {
          background: rgba(162, 171, 197, 0.50);
          width: 2px;
          height: 120px;
        }
      }

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

      &.area-group-2p {
        .area__line:nth-child(2) {
          display: none;
        }

        .area__line:nth-child(3) {
          display: none;
        }
      }

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

      &.area-group-3p {
        .area__line:nth-child(2) {
          display: none;
        }
      }

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

      &.area-regular-4way {
        .area__line:nth-child(1) {
          margin-left: 50px;
        }

        .area__line:nth-child(4) {
          margin-right: 50px;
        }
      }

      &.area-group-2p .lines {
        justify-content: space-between;
        margin: 0 215px;
      }

      &.area-group-3p .lines {
        justify-content: space-between;
        margin: 0 140px;
      }

      &.area-group-4p .lines {
        justify-content: space-between;
        margin: 0 105px;
      }

      &-end {
        top: auto;
        //bottom: 120px;

        .big-line {
          bottom: 0;
          top: auto;
        }
      }
    }

    .area__line {
      &_disabled {
        opacity: 0;
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
        
        .textToCall {
          opacity: 0;
          position: absolute;
          right: 0;
          z-index: 2;
          transition: all .3s ease;
        }
        .load {
          transition: all .3s ease;
        }
        .botIcon {
          position: absolute;
          opacity: 0;
          transition: all .3s ease;
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
          
          &:hover {
            cursor: pointer;
            
            .load {
              opacity: 0;
            }
            .botIcon {
              opacity: 1;
            }
            .textToCall {
              opacity: 1;
            }
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

    &__start {

      .crate__final,
      .area__line:not(.area__line:first-child),
      .lines-for-crate,
      .crate__end,
      .crate__single {
        display: none;
      }
      
    }
  }


  .svg_timer {
    position: absolute;
    top: 8px;
    left: 8px;
  }

  .maskCircle{
    width: 100px;
    height: 100px;
    fill: none;
    stroke: #F5AD57;
    stroke-width: 2;
    stroke-dasharray: 3;
    stroke-dashoffset: 110;
  }
  .maskCircle__inner{
    fill: none;
    stroke: white;
    stroke-width: 2;
    stroke-dashoffset: 0;
    stroke-dasharray: 370;
  }
  
  
  
  @media screen and (max-width: 1250px) {
    max-width: 100%;
  }
  @media screen and (max-width: 1024px) {
    zoom: .5
  }
  @media screen and (max-width: 576px) {
    zoom: .3
  }

`
