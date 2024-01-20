import styled from "styled-components";
import planeIcon from './../../../../assets/images/plane.png'

export const RightAirdropStyled = styled.div`

  background: #191A29;
  height: calc(100vh - 147px);

  .section-right__players_none {
    height: calc(100vh - 505px);
  }

  .sleepers__item {
    padding: 20px 0;
    cursor: pointer;
    position: relative;
    display: flex;

    &:hover {
      button {
        background: #A2ABC5;
        margin-top: -10px;
        cursor: grab;

        &:before {
          bottom: -5px;
          opacity: 1;
        }
      }
    }

    &:active {
      button {
        margin: 0;
        cursor: grabbing;

        &:before {
          bottom: 0;
          opacity: 0;
          transition: opacity 0s ease;
        }
      }
    }

    button {
      background: rgba(162, 171, 197, 0.5);
      height: 18px;
      width: 18px;
      border-radius: 50%;
      cursor: pointer;
      border: none;
      z-index: 10;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all .3s ease;
      margin: 0 auto;

      &:before {
        content: '';
        position: absolute;
        transition: all .3s ease;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(162, 171, 197, 0.8);
        border-radius: 2px;
        display: block;
        width: 14px;
        height: 3px;
        opacity: 0;
      }

      &:after {
        content: '';
        width: 8px;
        height: 8px;
        background: #FFFFFF;
        display: block;
        border-radius: 50%;
      }
    }

    &_moved {
      padding: 0;

      &:after,
      &:before {
        display: none;
      }
    }

    &_moved:hover {
      button {
        background: #A2ABC5;
        margin-top: 0;

        &:before {
          display: none;
        }
      }
    }
  }

  &.dragging {
    .section-right__players {
      height: calc(100vh - 532px);
    }
  }

  &.member {
    .section-right__players {
      height: calc(100vh - 372px);
    }
  }

  &.no-auth {
    .section-right__players {
      height: calc(100vh - 292px);
    }
  }



  .fly__bottom.fly__bottom_plane .line_done:before{
    content: "";
    position: absolute;
    height: 14px;
    width: 1px;
    background: #A2ABC5;
    border-radius: 2px;
    display: block;
    right: 0;
    top: -10px;
  }
  .fly__bottom.fly__bottom_plane .line_done:after{
    content: "";
    background: url(${planeIcon}) no-repeat;
    background-size: 40px;
    display: block;
    width: 40px;
    height: 40px;
    position: absolute;
    right: -20px;
    top: -60px;
  }
  .fly__bottom.fly__bottom_plane .line_done{
    background: #A2ABC5;
    position: relative;
  }

  .move__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    button {
      background: transparent;
      border: none;
      color: #A2ABC5;
      font-weight: bold;
      cursor: pointer;
    }
  }

`
