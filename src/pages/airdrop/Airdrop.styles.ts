import styled from "styled-components";

export const AirdropStyled = styled.section`

  max-width: calc(100% - 114px - 470px);
  height: calc(100vh - 96px);
  overflow: hidden;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  position: relative;

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
    width: 1400px;
    height: 1440px;
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

`
