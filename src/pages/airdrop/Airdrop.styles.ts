import styled from "styled-components";
import airdropLine from './../../assets/images/plane_line.svg'

export const AirdropStyled = styled.section`

  max-width: calc(100% - 114px - 470px);
  height: calc(100vh - 96px);
  overflow: hidden;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  position: relative;
  
  .transform-scale .bags {
    //li {
    //  transition: all .3s ease;
    //}
    li:hover {
      transform: scale(1.4);
    }
  }

  .section-map__top {
    align-items: center;
    display: flex;
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 10;

    img {
      margin-right: 10px;
    }

    .section-map__code, .section-map__game-is {
      align-items: center;
      display: flex;
      padding: 9px 12px;
      backdrop-filter: blur(5px);
      background: rgba(38, 41, 59, .6);
      border-radius: 6px;
      margin-left: 4px;
      color: rgba(162, 171, 197, .5);
      font-size: 11px;
      font-weight: 500;
      letter-spacing: .1em;
      line-height: 12px;
      text-transform: uppercase;

      span {
        color: #92c145;
        font-size: 11px;
        font-weight: 500;
        letter-spacing: .1em;
        line-height: 12px;
        text-transform: uppercase;
      }
    }
  }

  .trajectory {
    position: absolute;
    top: 100px;
    left: -50px;
    display: flex;
    align-items: center;
    width: 50px;
    pointer-events: none;
    -webkit-transition: all 1s linear;
    -moz-transition: all 1s linear;
    -ms-transition: all 1s linear;
    -o-transition: all 1s linear;
    transition: all 1s linear;
    height: 28px;

    &:before {
      content: '';
      background-image: url(${airdropLine});
      background-size: contain;
      width: 100%;
      height: 3px;
      display: block;
      animation: lineAnim linear infinite 1s;
      border-radius: 10px;
      margin-top: -11px;
    }
  }

  @keyframes lineAnim {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 45px 0;
    }
  }

  .airdrop__saves {
    position: absolute;
    bottom: 10px;
    right: 10px;
    z-index: 4;

    .saves__item {
      display: flex;
      align-items: center;
      margin-top: 4px;

      &:hover {
        .item__tips {
          opacity: 1;
          visibility: visible;
        }
      }
    }

    .item__tips {
      border-radius: 10px;
      background: rgba(162, 171, 197, 0.30);
      backdrop-filter: blur(5px);
      display: flex;
      align-items: center;
      padding: 0 10px;
      margin-right: 3px;
      height: 30px;
      position: absolute;
      right: 100%;
      white-space: nowrap;

      transition: opacity .3s ease, visibility .3s ease;
      opacity: 0;
      visibility: hidden;

      span {
        color: #FFF;
        font-size: 12px;
        font-weight: 400;
        padding: 2px 10px;
      }

      p {
        padding: 2px 10px;
        color: rgba(162, 171, 197, 0.50);
        font-size: 12px;
        font-weight: 400;
        border-left: 1px solid rgba(162, 171, 197, 0.20);
      }
    }

    .item__box {
      border-radius: 6px;
      width: 30px;
      height: 30px;
      background: rgba(38, 41, 59, 0.60);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #6A6F7C;
      position: relative;
      overflow: hidden;
      -webkit-transition: all .3s ease;
      -moz-transition: all .3s ease;
      -ms-transition: all .3s ease;
      -o-transition: all .3s ease;
      transition: all .3s ease;

      span {
        color: #A2ABC5;
        font-size: 11px;
        font-weight: 400;
        letter-spacing: 1.1px;
        line-height: 0;
        text-transform: uppercase;
        user-select: none;
      }

      span,
      path {
        -webkit-transition: all .3s ease;
        -moz-transition: all .3s ease;
        -ms-transition: all .3s ease;
        -o-transition: all .3s ease;
        transition: all .3s ease;
      }

      svg,
      span {
        position: relative;
        z-index: 2;
      }

      &:after {
        content: '';
        background: rgba(146, 193, 69, 0.30);
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        height: 0;
      }


      &:hover {
        background: rgba(162, 171, 197, 0.30);
        cursor: pointer;

        span {
          color: #A2ABC5;
        }

        .arrow {
          fill: #A2ABC5;
        }

        .bottom {
          stroke: #A2ABC5;
        }
      }

    }

    .saves__item {
      &.mouseDown:active {

        .item__box {
          background: rgba(38, 41, 59, 0.60);
        }

        .item__box:after {
          animation: fillingBox 1s linear forwards;
        }
      }

      &_empty {
        &.mouseDown:active {
          .item__box {
            span {
              color: #92C145;
            }

            &:after {
              background: rgba(146, 193, 69, 0.30);
            }
          }

          .arrow {
            fill: #92C145;
          }

          .bottom {
            stroke: #92C145;
          }
        }
      }

      &_full {
        &.mouseDown:active {
          .item__box {
            span {
              color: #EC5555;
            }

            &:after {
              background: rgba(236, 85, 85, 0.30);
            }
          }

          .arrow {
            fill: #EC5555;
          }

          .bottom {
            stroke: #EC5555;
          }
        }
      }
    }

  }

  @keyframes fillingBox {
    from {
      height: 0;
    }
    to {
      height: 100%;
    }
  }

  .map__photo {
    width: 1500px;
    height: 1500px;
    cursor: grab;

    &:active {
      cursor: grabbing;
    }

    img {
      width: 100%;
      height: 100%;
      opacity: .9;
      user-drag: none;
      -webkit-user-drag: none;
      user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
    }
  }

  .bags {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    min-width: 1500px;
    max-width: 1500px;

    cursor: grab;

    &:active {
      cursor: grabbing;
    }

    li {
      position: absolute;
      top: 240px;
      left: 150px;

      width: 18px;
      height: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
      background: #f5ad57;
      box-shadow: 0 2px 9px 1px rgba(29, 29, 29, .4);
      user-select: none;
      overflow: hidden;
      z-index: 10;

      cursor: default;

      &:active {
        cursor: grabbing;
      }

      &:after {
        content: "";
        background: #fff;
        border-radius: 50%;
        display: block;
        height: 8px;
        width: 8px;
      }
    }
  }


  .section-map__map .point__group {
    position: absolute;
    top: -65px;
  }

  .section-map__map .point {
    position: absolute;
    width: 18px;
    height: 18px;
    display: flex;
    z-index: 13;
    align-items: flex-end;
    justify-content: center;
    top: 200px;
    right: 200px;
    pointer-events: none;
  }

  .section-map__map .point.sleepers__item_winner {
    z-index: 20;
  }

  .section-map__map .point__photo img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    position: absolute;
    margin: 4px
  }

  .section-map__map .point__dot {
    position: relative;
    width: 44px
  }

  .section-map__map .point__dot:before {
    content: "";
    width: 8px;
    height: 8px;
    background: #fff;
    border-radius: 50%;
    left: 50%;
    z-index: 2;
    position: absolute;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    top: 15px
  }

  .section-map__map .point__dot .dot {
    content: "";
    width: 18px;
    height: 18px;
    border-radius: 50%;
    display: block;
    position: absolute;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    top: 10px
  }

  .section-map__map .point__dot .line {
    height: 14px;
    width: 3px;
    border-radius: 10px;
    position: absolute;
    background: #92c145;
    position: absolute;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    top: 0
  }


  .point__winner-table .table__left span {
    font-weight: 500;
    font-size: 14px;
    line-height: 13px;
    color: #FFFFFF;
  }

  .point__winner-table .right__bottom span {
    font-weight: 700;
    font-size: 14px;
    line-height: 13px;
    color: #FFFFFF;
    margin-left: 6px;
  }

  .point__winner-table .right__bottom {
    display: flex;
  }

  .point__winner-table .table__right p {
    font-weight: 500;
    font-size: 11px;
    line-height: 12px;
    color: #A2ABC5;
    margin-bottom: 6px;
  }

  .point__winner-table .table__right {
    background: rgba(38, 41, 59, 0.9);
    box-shadow: 0px 14px 20px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(7.5px);
    border-radius: 10px;
    padding: 17px 11px;
    margin-left: 4px;
    min-width: 120px;
    max-width: 120px;
  }

  .point__winner-table .table__left .line {
    content: '';
    background: #DD9C4F;
    border-radius: 2px;
    width: 20px;
    height: 3px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  .point__winner-table .table__left {
    display: flex;
    align-items: center;
    background: linear-gradient(89.07deg, #D59953 0.69%, #866644 99.35%);
    border-radius: 10px;
    padding: 15px 20px;
    padding-right: 60px;
    position: relative;
  }

  .point__winner-table .table__left img {
    border-radius: 10px;
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }

  .point__winner-table {
    display: flex;
    position: absolute;
    left: calc(50% + 62px);
    bottom: calc(100% + 10px);
    transform: translateX(-50%);

    transition: all .3s ease;
    z-index: 14;

    opacity: 0;
    visibility: hidden;
    
    &_active {
      opacity: 1;
      visibility: visible;
    }
  }

  .drop {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    img {
      position: absolute;
      &:first-child {
        width: 100px;
        height: 100px;
        z-index: 2;
        animation: circleAnimation 2s .3s linear infinite;
      }

      &:last-child {
        width: 140px;
        height: 140px;
        z-index: 1;
        animation: circleAnimation 2s linear infinite;
      }
    }
    

    &:after {
      content: '';
      width: 16px;
      height: 16px;
      display: block;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
      background: #F5AD57;
      position: relative;
      z-index: 3;
    }

    &__circle {
      background: radial-gradient(50% 50% at 50% 50%, transparent 0%, rgba(245, 173, 87, 0.45) 100%);
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
      backdrop-filter: blur(2px);
      position: absolute;
      z-index: 2;

      &:first-child {
        width: 100px;
        height: 100px;
        z-index: 2;
        animation: circleAnimation 2s .3s linear infinite;
      }

      &:last-child {
        width: 140px;
        height: 140px;
        z-index: 1;
        animation: circleAnimation 2s linear infinite;
        //display: none;
      }
    }
  }

  @keyframes circleAnimation {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    25% {
      transform: scale(0.2);
      opacity: 1;
    }
    75% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(1.2);
      opacity: 0;
    }
  }


  .line-to-winner {
    border: 1px dashed #f5ad57;
    height: 1px;
    width: 0;
    position: absolute;
    -webkit-transform: rotate(10deg);
    -ms-transform: rotate(10deg);
    transform: rotate(10deg);
    z-index: 4;
    left: 8px;
    top: 8px;
    transform-origin: top left;
    opacity: 0;
  }
  .line-to-winner.line-to-winner_active{
    animation: lineWidth .3s ease-out forwards;
  }

  .line-to-winner{
    -webkit-transition: width 3s linear;
    -moz-transition: width 3s linear;
    -ms-transition: width 3s linear;
    -o-transition: width 3s linear;
    transition: width 3s linear;
  }

  @keyframes lineWidth {
    from {
      /*width: 0;*/
      opacity: 0;
    }
    to{
      /*width: 100%;*/
      opacity: 1;
    }
  }
  
  
  .scrolling {
    background: #13404d;
  }
  .moving {
    padding: 1000px;
    margin: -1000px;
  }
  .transform-scale {
    position: relative;
  }
  
  
  
  @media screen and (max-width: 1250px) {
    max-width: 100%;
    margin-bottom: 10px;
  }
  
`
