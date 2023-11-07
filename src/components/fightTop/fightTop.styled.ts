import { styled } from 'styled-components';

export const FightTopStyle = styled.div`

  display: flex;
  height: 80px;

  .clothes-shop {
    background: linear-gradient(270deg, rgba(109, 69, 193, .4), rgba(109, 69, 193, .3));
    border-radius: 10px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 360px;
    width: 100%;
    margin-left: 14px;
    transition: all .3s ease;
    border: none;
    cursor: pointer;

    &:hover {
      background: linear-gradient(270deg, rgba(109, 69, 193, .6), rgba(109, 69, 193, .6));
      transform: scale(1.02)
    }

    &:active {
      transform: scale(.98)
    }

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

`
