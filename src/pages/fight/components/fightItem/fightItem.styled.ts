import { styled } from 'styled-components';

export const FightItemStyled = styled.div`

  background: #26293B;
  border-radius: 10px;
  padding: 15px;
  padding-left: 0;
  display: flex;
  align-items: center;
  position: relative;

  .item__user a {
    display: flex;
    align-items: center;
  }
  .item__user:last-child a {
    flex-direction: row-reverse;
  }

  &.game {
    &_open-clothes {
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
  }

  &:not(:last-child) {
    margin-bottom: 8px;
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

`
