import styled from "styled-components";
import bgBottomInfo from './../../assets/images/bgd-bottom-info.png'
import bgFight from './../../assets/images/bgd-fight.svg'
import lineBullet from './../../assets/images/line-bullet.svg'

export const FightSingleStyled = styled.section`

  display: flex;
  align-items: center;
  justify-content: center;
  
  .section-fight__user_call-bot {
    -webkit-transition: all .3s ease;-moz-transition: all .3s ease;-ms-transition: all .3s ease;-o-transition: all .3s ease;transition: all .3s ease;
  }
  .section-fight__user_call-bot:hover {
    transform: scale(1.1);
  }
  .section-fight__user_call-bot:active {
    transform: scale(0.98);
  }
  
  .canvas_winner {
    position: absolute;
    bottom: 0;
  }

  .svg_timer {
    position: absolute;
    top: 8px;
    left: 8px;
  }

  .maskCircle {
    width: 100px;
    height: 100px;
    fill: none;
    stroke: #F5AD57;
    stroke-width: 2;
    stroke-dasharray: 3;
    stroke-dashoffset: 110;
  }

  .maskCircle__inner {
    fill: none;
    stroke: white;
    stroke-width: 2;
    stroke-dashoffset: 0;
    stroke-dasharray: 370;
  }

  .section-fight {

    &__bottom {
      //margin-bottom: -70px;
      position: relative;

      &_finish {
        margin: 0;
        padding-top: 0;

        .bottom__status {
          width: calc(100% + 40px);
          height: 130px;
          border-radius: 0px 0px 10px 10px;
          margin-left: -20px;
          display: flex;
          align-items: center;
          justify-content: center;

          &_winner {
            background: linear-gradient(180deg, rgba(245, 173, 87, 0) 0%, rgba(245, 173, 87, 0.15) 100%);
          }

          &_looser {
            background: linear-gradient(180deg, rgba(162, 171, 197, 0) 0%, rgba(162, 171, 197, 0.15) 100%);
          }
        }

      }


      .bottom__info {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        background: url(${bgBottomInfo}) no-repeat;
        background-size: contain;
        background-position: bottom;
        backdrop-filter: blur(5px);
        border-radius: 10px;
        padding: 15px;
        padding-bottom: 30px;
        white-space: nowrap;
        bottom: 100%;
        margin-bottom: 30px;

        p {
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 15px;
          color: #FFFFFF;
          margin-bottom: -10px;
        }
      }

      button {
        background: rgba(46, 49, 69, 0.5);
        border-radius: 8px;
        font-weight: 700;
        font-size: 14px;
        line-height: 13px;
        color: #A2ABC5;
        border: none;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 19px;
        transition: all .3s ease;
        cursor: pointer;

        &.button_hidden {
          opacity: 0;
          visibility: hidden;
        }

        &:hover {
          transform: scale(1.05);
        }

        &:active {
          transform: scale(.95);
        }
      }
    }

    &__select {
      display: flex;
      align-items: center;
      justify-content: center;

      li {
        width: 100%;
        margin-right: 10px;

        &:last-child {
          margin-right: 0;
        }
      }

      button {
        height: 50px;
        padding: 0 19px;

        img {
          display: none;
        }

        &.button_hover,
        &:hover {
          background: #363A51;
          backdrop-filter: blur(5px);
          border-radius: 8px;
          color: #fff;
        }

        &.button_active {
          background: rgba(146, 193, 69, 0.5);
          justify-content: space-between;

          span {
            color: #fff;
          }

          img {
            display: block;
          }
        }

        &.button_disabled {
          position: relative;
          opacity: 0;
          visibility: hidden;
          transition: all .1s ease;

          &:active,
          &:hover {
            opacity: 0.5;
            transform: scale(1);
          }
        }
      }

      &-hit {
        display: flex;
        align-items: center;
        justify-content: center;

        li {
          width: 100%;
          margin-right: 10px;

          &:last-child {
            margin-right: 0;
          }
        }

        button {
          height: 50px;
          padding: 0 19px;

          img {
            display: none;
          }

          &:hover {
            background: #363A51;
            backdrop-filter: blur(5px);
            border-radius: 8px;
            color: #fff;
          }

          &.button_active {
            background: linear-gradient(90deg, rgba(197, 80, 80, 0.6) 0%, rgba(197, 80, 80, 0.4) 100%);
            justify-content: space-between;

            span {
              color: #fff;
            }

            img {
              display: block;
            }
          }

          &.button_disabled {
            position: relative;
            opacity: 0;
            visibility: hidden;
            transition: all .1s ease;

            &:active,
            &:hover {
              opacity: 0.5;
              transform: scale(1);
            }
          }
        }
      }
    }

    &__opponent-info {
      background: rgba(46, 49, 69, 0.5);
      border-radius: 8px;
      font-weight: 700;
      font-size: 14px;
      line-height: 13px;
      color: rgba(162, 171, 197, 0.5);
      border: none;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 19px;
    }

    &__lft {
      background: #212232 url(${bgFight}) no-repeat;
      background-position: center bottom;
      background-size: contain;
      border-radius: 10px;
      height: calc(100vh - 96px);
      width: 100%;
      margin-right: 10px;
      padding: 20px;
      padding-bottom: 0;
      position: relative;
      display: flex;
      flex-direction: column;
      overflow: hidden;

      @media screen and (min-width: 2250px) {
        background-size: 820px;
      }
      @media screen and (max-width: 576px) {
        background-size: 140%;
      }
    }

    &__rht {
      background: #212232 url(${bgFight}) no-repeat;
      background-position: center bottom;
      background-size: contain;
      border-radius: 10px;
      height: calc(100vh - 96px);
      width: 100%;
      padding: 20px;
      padding-bottom: 0;
      position: relative;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      
      @media screen and (min-width: 2250px) {
        background-size: 820px;
      }
      @media screen and (max-width: 576px) {
        background-size: 140%;
      }

      //.attacked__bullet {
      //  left: 0;
      //  right: auto;
      //  width: 320px;
      //  img {
      //    margin-left: -20px;
      //  }
      //  img,
      //  &:after,
      //  &:before {
      //    transform: rotate(180deg) !important;
      //  }
      //}

    }

    &__user {
      display: flex;
      align-items: center;
      cursor: pointer;

      &_hidden {
        opacity: 0;
      }

      .user__name {
        font-weight: 500;
        font-size: 14px;
        line-height: 15px;
        color: #FFFFFF;
        margin-left: 10px;
      }

      .user__photo {
        width: 40px;
        height: 40px;

        img {
          width: 100%;
          height: 100%;
          border-radius: 10px;
        }
      }
    }

    &__top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      z-index: 2;
    }

    &__resources {
      display: flex;
      justify-content: flex-end;
      margin-right: -20px;
      width: 50%;

      .clothes__head {
        background: rgba(127, 63, 209, 0.3);
        border-radius: 8px;
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border: none;
        transition: all .3s ease;

        &:hover {
          transform: scale(1.1);
        }

        &:active {
          transform: scale(.9);
        }

        img {
          width: 20px;
        }
      }

      .clothes__cool {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        top: 6px;
        left: 6px;
        position: absolute;
      }

      .clothes__body {
        position: absolute;
        z-index: 3;
        margin-top: 10px;
        opacity: 0;
        visibility: hidden;
        transition: all .3s ease;

        &_active {
          opacity: 1;
          visibility: visible;
        }

        ul {
          background: #26293B;
          border-radius: 10px;
          padding: 10px;
        }

        li {
          background: rgba(162, 171, 197, 0.06);
          border-radius: 8px;
          width: 60px;
          height: 60px;
          margin-bottom: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;

          &:last-child {
            margin-bottom: 0;
          }
        }

        img {
          width: 36px;
          height: 36px;
          object-fit: contain;
        }

        .count {
          background: rgba(162, 171, 197, 0.12);
          font-weight: 500;
          font-size: 12px;
          line-height: 13px;
          color: #A2ABC5;
          cursor: pointer;
          border: 1px solid transparent;
          transition: all .3s ease;
          display: none;

          &_active {
            display: flex !important;
          }

          &:hover {
            border: 1px solid rgba(162, 171, 197, 0.1);
            background: transparent;
          }
        }
      }

      .resources__coins {
        background: linear-gradient(90deg, rgba(232, 161, 78, 0.1) 0%, rgba(32, 34, 50, 0) 100%);
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 130px;
        width: 100%;
        height: 50px;
        margin-left: 6px;

        span {
          font-weight: 700;
          font-size: 14px;
          line-height: 13px;
          color: #E8A14E;
          margin-left: 6px;
        }

        &_none {
          span {
            color: rgba(162, 171, 197, 0.5);
          }
        }
      }
    }

    &__center {
      position: absolute;
      z-index: 3;
      background: #191A29;
      border-radius: 20px;
      width: 120px;
      height: 120px;

      .center__finish {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 100%;

        p {
          font-weight: 500;
          font-size: 13px;
          line-height: 12px;
          color: #A2ABC5;
          margin-top: 14px;
        }
      }

      .center__running {
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 100%;

        span {
          font-weight: 400;
          font-size: 13px;
          line-height: 14px;
          color: #A2ABC5;
        }

        .timer {
          margin-top: 14px;
          display: flex;

          small.dot {
            color: #474854;
            font-weight: 400;
            font-size: 24px;
            line-height: 23px;
          }

          span {
            font-weight: 700;
            font-size: 24px;
            line-height: 23px;
            color: #FFFFFF;
          }

          .sec {
            min-width: 40px;
          }

          .sec span {
            color: #474854;
            font-weight: 400;
          }
        }
      }

      .center__loading {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 100%;

        span {
          font-weight: 500;
          font-size: 13px;
          line-height: 14px;
          text-align: center;
          color: #A2ABC5;
          margin-top: 17px;
        }
      }
    }

    &__confetti {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      z-index: 3;
      opacity: 0;

      img {
        width: 100%;
        display: block;
      }
    }

    &__persone {
      margin: 0 auto;
      width: 100%;
      margin-top: auto;
      margin-bottom: 70px;
      position: relative;

      img {
        display: block;
        cursor: pointer;
      }

      .attacked__bullet {
        position: absolute;
        right: 0;
        z-index: 1;
        display: none;
        opacity: 0;
        //width: fit-content;
        width: 35%;

        &_good {
          display: flex;
          align-items: center;

          &:after {
            content: '';
            background: linear-gradient(90deg, #92C145 -51.67%, rgba(146, 193, 69, 0) 100%);
            margin-left: -10px;
            width: 20px;
            height: 20px;
            display: block;
            position: absolute;
            border-radius: 50%;
          }

          &:before {
            content: '';
            background: linear-gradient(90deg, #92C145 -51.67%, rgba(146, 193, 69, 0) 58.33%);
            margin-left: -10px;
            width: 30px;
            height: 30px;
            display: block;
            position: absolute;
            border-radius: 50%;
          }
        }

        &_bad {
          display: flex;
          align-items: center;

          &:after {
            content: '';
            background: linear-gradient(90deg, #DB4752 -51.67%, rgba(219, 71, 82, 0) 100%);
            margin-left: -10px;
            width: 20px;
            height: 20px;
            display: block;
            position: absolute;
            border-radius: 50%;
          }

          &:before {
            content: '';
            background: linear-gradient(90deg, #DB4752 -51.67%, rgba(219, 71, 82, 0) 58.33%);
            margin-left: -10px;
            width: 30px;
            height: 30px;
            display: block;
            position: absolute;
            border-radius: 50%;
          }
        }

        img {
          width: 17px;
        }

        &_active {
          display: flex;

          &:nth-child(1) {
            animation: attackRight 1.5s .5s ease-out forwards;
          }

          &:nth-child(2) {
            animation: attackRight 1.5s 1s ease-out forwards;
          }

          &:nth-child(3) {
            animation: attackRight 1.5s 1.5s ease-out forwards;
          }
        }

        .line {
          content: '';
          position: absolute;
          height: 2px;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          background: url(${lineBullet}) repeat-x;
          width: 100%;
        }

        &:nth-child(1) {
          bottom: 463px;

          @media screen and (max-width: 992px) {
            top: 23px;
          }
        }

        &:nth-child(2) {
          bottom: 340px;

          @media screen and (max-width: 992px) {
            top: 127px;
          }
        }

        &:nth-child(3) {
          bottom: 140px;

          @media screen and (max-width: 992px) {
            top: 262px;
          }
        }
      }


      .persone__red,
      .persone__green {

        img {

          &.img_hover,
          &:hover {
            opacity: 1;
          }

          &.img_clicked {
            opacity: 1 !important;
          }
        }
      }

      &-hit {

        .attacked__bullet {
          right: auto;
          left: 0;
          opacity: 0;
          transform: rotate(180deg);

          &:nth-child(1) {
            animation: attackLeft 1.5s .5s ease-out forwards;
          }

          &:nth-child(2) {
            animation: attackLeft 1.5s 1s ease-out forwards;
          }

          &:nth-child(3) {
            animation: attackLeft 1.5s 1.5s ease-out forwards;
          }
        }

        .persone__red {
          img {
            &.img_clicked {
              opacity: 1 !important;
            }
          }
        }
      }

    }
  }

  @keyframes attackLeft {
    0% {
      left: -100px;
      opacity: 0
    }
    20% {
      left: -50px
    }
    100% {
      left: -20px;
      opacity: 1
    }
  }
  @keyframes attackRight {
    0% {
      right: -100px;
      opacity: 0
    }
    20% {
      right: -50px
    }
    100% {
      right: -20px;
      opacity: 1
    }
  }


  @media screen and (max-width: 850px) {
    flex-direction: column;

    .section-fight__lft {
      margin-bottom: 20px;
    }

    .section-fight__center {
      position: fixed;
      bottom: 10px;
      right: 10px;
    }
  }


  @media screen and (max-width: 1800px) {
    .section-fight__persone {
      margin-bottom: 30px;
    }
  }

  @media screen and (max-height: 860px) {
    .section-fight__persone .persone__start .persone-img{
      width: 1050px;
    }
    .section-fight__persone .persone__green img:nth-child(1), .section-fight__persone .persone__red img:nth-child(1){
      bottom: 398px;
      width: 280px;
    }
    .section-fight__persone .persone__green img:nth-child(2), .section-fight__persone .persone__red img:nth-child(2){
      bottom: 260px;
      width: 291px;
    }
    .section-fight__persone .persone__green img:nth-child(3), .section-fight__persone .persone__red img:nth-child(3){
      bottom: -17px;
      width: 282px;
    }
  }
  @media screen and (max-height: 800px) {
    .section-fight__persone .persone__start .persone-img{
      width: 950px;
    }
    .section-fight__persone .persone__green img, .section-fight__persone .persone__red img{
      width: 270px;
    }
    .section-fight__persone .persone__green img:nth-child(1), .section-fight__persone .persone__red img:nth-child(1){
      bottom: 351px;
      width: 260px;
    }
    .section-fight__persone .persone__green img:nth-child(2), .section-fight__persone .persone__red img:nth-child(2){
      bottom: 236px;
      width: 250px;
    }
    .section-fight__persone .persone__green img:nth-child(3), .section-fight__persone .persone__red img:nth-child(3){
      bottom: -17px;
      width: 253px;
    }

    .section-fight__persone .attacked__bullet:nth-child(1),
    .section-fight__persone-hit .attacked__bullet:nth-child(1){
      bottom: 380px;
    }
    .section-fight__persone .attacked__bullet:nth-child(2),
    .section-fight__persone-hit .attacked__bullet:nth-child(2){
      bottom: 290px;
    }
    .section-fight__persone .attacked__bullet:nth-child(3),
    .section-fight__persone-hit .attacked__bullet:nth-child(3){
      bottom: 140px;
    }
  }
  @media screen and (max-height: 750px) {
    .section-fight__persone .persone__start .persone-img{
      width: 850px;
    }
    .section-fight__persone .persone__green img, .section-fight__persone .persone__red img{
      width: 240px;
    }
    .section-fight__persone .persone__green img:nth-child(1), .section-fight__persone .persone__red img:nth-child(1){
      bottom: 308px;
      width: 225px;
    }
    .section-fight__persone .persone__green img:nth-child(2), .section-fight__persone .persone__red img:nth-child(2){
      bottom: 200px;
      width: 231px;
    }
    .section-fight__persone .persone__green img:nth-child(3), .section-fight__persone .persone__red img:nth-child(3){
      bottom: -23px;
      width: 227px;
    }

    .section-fight__persone .attacked__bullet:nth-child(1),
    .section-fight__persone-hit .attacked__bullet:nth-child(1){
      bottom: 335px;
    }
    .section-fight__persone .attacked__bullet:nth-child(2),
    .section-fight__persone-hit .attacked__bullet:nth-child(2){
      bottom: 250px;
    }
    .section-fight__persone .attacked__bullet:nth-child(3),
    .section-fight__persone-hit .attacked__bullet:nth-child(3){
      bottom: 120px;
    }
  }
  @media screen and (max-height: 700px) {
    .section-fight__persone .persone__start .persone-img{
      width: 750px;
    }
    .section-fight__persone .persone__green img, .section-fight__persone .persone__red img{
      width: 210px;
    }
    .section-fight__persone .persone__green img:nth-child(1), .section-fight__persone .persone__red img:nth-child(1){
      bottom: 264px;
      width: 197px;
    }
    .section-fight__persone .persone__green img:nth-child(2), .section-fight__persone .persone__red img:nth-child(2){
      bottom: 170px;
      width: 200px;
    }
    .section-fight__persone .persone__green img:nth-child(3), .section-fight__persone .persone__red img:nth-child(3){
      bottom: -30px;
      width: 200px;
    }

    .section-fight__persone .attacked__bullet:nth-child(1),
    .section-fight__persone-hit .attacked__bullet:nth-child(1){
      bottom: 285px;
    }
    .section-fight__persone .attacked__bullet:nth-child(2),
    .section-fight__persone-hit .attacked__bullet:nth-child(2){
      bottom: 220px;
    }
    .section-fight__persone .attacked__bullet:nth-child(3),
    .section-fight__persone-hit .attacked__bullet:nth-child(3){
      bottom: 100px;
    }
  }

`
