import styled from "styled-components";

export const BattleItemStyled = styled.li`

  border-radius: 10px;
  background: var(--SmallBattleCardsBG, #26293B);
  height: 110px;
  padding-right: 15px;
  display: grid;
  grid-template-columns: 130px 370px 260px 1fr;
  align-items: center;
  margin-bottom: 10px;

  .type {
    margin-right: auto;
    border-radius: 0 8px 8px 0;
    background: rgba(245, 173, 87, 0.10);
    height: fit-content;
    padding: 10px 0px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;

    img {
      margin-right: 10px;
    }

    span {
      color: var(--Orange, #F5AD57);
      font-size: 12px;
      font-weight: 700;
    }
  }

  .cases {
    margin-left: auto;
    margin-right: 15px;
    display: flex;
    align-items: center;
    .case__top {
      position: absolute;
      top: 5px;
      left: 3px;
      right: 3px;
      display: flex;
      justify-content: space-between;
    }
    .case__count {
      color: var(--IconsActive, #A2ABC5);
      font-size: 10px;
      font-weight: 500;
    }
    .case__rarity {
      width: 5px;
      height: 5px;
      -webkit-border-radius: 50%;-moz-border-radius: 50%;border-radius: 50%;
      background: #92C145;
    }
    li {
      border-radius: 8px;
      background: rgba(162, 171, 197, 0.06);
      width: 60px;
      height: 60px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 10px;
      img {
        width: 40px;
        height: 40px;
        object-fit: contain;
        display: block;
      }
    }
  }

  .players {
    display: flex;
    align-items: center;
    justify-content: center;

    b {
      margin: 0 15px;
      color: #A2ABC5;
      text-align: center;
      font-size: 14px;
      font-weight: 700;
    }
  }

  .player {
    position: relative;
    &:after {
      content: '';
      width: 30px;
      height: 2px;
      -webkit-border-radius: 2px;-moz-border-radius: 2px;border-radius: 2px;
      position: absolute;
      display: block;
      left: 10px;
      right: 10px;
      bottom: -10px;
    }
    &_blue {
      &:after {
        background: #5562DD;
        box-shadow: 0 0 15px #5562DD;
      }
    }
    &_red {
      &:after {
        background: #EC5555;
        box-shadow: 0 0 15px #EC5555;
      }
    }
    &_green {
      &:after {
        background: #92C145;
        box-shadow: 0 0 15px #92C145;
      }
    }
    &_yellow {
      &:after {
        background: #F5AD57;
        box-shadow: 0 0 15px #F5AD57;
      }
    }
    &_grey {
      &:after {
        background: #61667B;
        box-shadow: 0 0 15px #61667B;
      }
    }
    
    &__photo {
      width: 50px;
      height: 50px;
      border-radius: 10px;
      overflow: hidden;
      
      &_loading {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px dashed rgba(162, 171, 197, 0.15);
        cursor: pointer;

        .noname {
          position: absolute;
          -webkit-border-radius: 10px;-moz-border-radius: 10px;border-radius: 10px;
          z-index: 0;
          opacity: 0;
          -webkit-transition: all .3s ease;-moz-transition: all .3s ease;-ms-transition: all .3s ease;-o-transition: all .3s ease;transition: all .3s ease;
        }
        
        &:after {
          content: '';
          background: rgba(33, 34, 50, 0.50);
          backdrop-filter: blur(2px);
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          z-index: 2;
          border-radius: 10px;
          overflow: hidden;
          opacity: 0;
          -webkit-transition: all .3s ease;-moz-transition: all .3s ease;-ms-transition: all .3s ease;-o-transition: all .3s ease;transition: all .3s ease;
        }
        .entry {
          opacity: 0;
          z-index: 3;
          position: absolute;
          -webkit-transition: all .3s ease;-moz-transition: all .3s ease;-ms-transition: all .3s ease;-o-transition: all .3s ease;transition: all .3s ease;
          svg {
            display: block;
          }
        }
        
        &:hover {
          .entry,
          .noname,
          &:after {
            opacity: 1;
            -webkit-transition: all .3s ease;-moz-transition: all .3s ease;-ms-transition: all .3s ease;-o-transition: all .3s ease;transition: all .3s ease;
          }
        }
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .button {
    display: flex;
    height: 50px;
    position: relative;
    cursor: pointer;
    &:after {
      content: "";
      background: rgba(162, 171, 197, 0.05);
      position: absolute;
      top: -30px;
      bottom: -30px;
      left: 50%;
      -webkit-transform: translateX(-50%);-moz-transform: translateX(-50%);-ms-transform: translateX(-50%);-o-transform: translateX(-50%);transform: translateX(-50%);
      width: 2px;
      z-index: 0;
    }
    
    &__cost {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      border-radius: 10px 0 0 10px;
      background: var(--BattleCardsSmallBG, #363A51);
      position: relative;
      z-index: 1;
      img {
        width: 25px;
        margin-right: 10px;
      }
      span {
        color: #E8A14E;
        font-size: 14px;
        font-weight: 700;
      }
    }
    
    &__status {
      border-radius: 0px 10px 10px 0px;
      background: #232536;
      color: rgba(162, 171, 197, 0.50);
      font-size: 16px;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      position: relative;
      z-index: 1;
    }
  }
  
  @media screen and (max-width: 1600px) {
    grid-template-columns: 130px 1fr 1fr;
    grid-gap: 20px;
    height: auto;
  }
  @media screen and (max-width: 1300px) {
    grid-template-columns: 130px 1fr;
    grid-gap: 20px;
    height: auto;
  }
  @media screen and (max-width: 1250px) {
    grid-template-columns: 130px 370px 260px 1fr;
    grid-gap: 0px;
    height: 110px;
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: 130px 1fr 1fr;
    grid-gap: 20px;
    height: auto;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 200px 1fr;
    grid-gap: 20px;
    height: auto;
  }
  @media screen and (max-width: 576px) {
    grid-template-columns: 1fr;
    grid-gap: 20px;
    height: auto;
  }

`
