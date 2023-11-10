import { styled } from 'styled-components';

export const ProductStyled = styled.li`


  background: rgba(162, 171, 197, 0.06);
  border-radius: 8px;
  padding: 20px 15px 16px;
  max-height: 145px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  transition: all .3s ease;
  cursor: grab;

  .item__title {
    position: absolute;
    left: 0;
    width: 100%;
    top: 0;
    border-radius: 8px 8px 0px 0px;
    background: #313344;
    padding: 7px 0;
    color: #FFF;
    font-size: 12px;
    font-weight: 400;
    z-index: 3;
    text-align: center;
    transition: all .3s ease;

    opacity: 0;
    visibility: hidden;

    &:hover {
      opacity: 1;
      visibility: visible;
    }
  }

  .item__is-lock {
    display: none;

    &_active {
      display: block;
    }

    img {
      position: absolute;
      top: 5px;
      right: 5px;
      z-index: 2;
      &:hover + p {
        opacity: 1;
        visibility: visible;
      }
    }

    p {
      position: absolute;
      left: 0;
      width: 100%;
      top: 0;
      border-radius: 8px 8px 0px 0px;
      background: #313344;
      padding: 7px 0;
      color: #FFF;
      font-size: 12px;
      font-weight: 400;
      z-index: 3;
      text-align: center;
      transition: all .3s ease;

      opacity: 0;
      visibility: hidden;

      &:hover {
        opacity: 1;
        visibility: visible;
      }
    }
  }

  &:focus {
    cursor: grabbing;
  }

  &:active {
    transform: scale(.9);
  }

  &:hover {
    background: rgba(162, 171, 197, 0.15);

    .item__buy {
      opacity: 1;
    }
  }

  &_active {
    background: rgba(162, 171, 197, 0.15);

    .item__count {
      opacity: 0;
    }

    .item__check {
      opacity: 1;
    }
  }

  .item__check {
    position: absolute;
    top: 6px;
    right: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
    opacity: 0;

    transition: all .3s ease;

    &:after {
      content: '';
      width: 20px;
      height: 20px;
      background: rgba(146, 193, 69, 0.2);
      filter: blur(5px);
      display: block;
      position: absolute;
      border-radius: 50%;
    }
  }

  .item__buy {
    position: absolute;
    background: rgba(162, 171, 197, 0.1);
    backdrop-filter: blur(7.5px);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    transition: all .3s ease;
    opacity: 0;
    z-index: 2;
    margin-bottom: 20px;
  }

  .item__count {
    background: rgba(119, 119, 139, 0.1);
    backdrop-filter: blur(2px);
    border-radius: 5px;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    width: 25px;
    height: 25px;
    position: absolute;
    top: 0;
    right: 0;
    color: rgba(255, 255, 255, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .item__cool {
    width: 10px;
    height: 10px;
    top: 8px;
    left: 8px;
    position: absolute;
    border-radius: 50%;
    &:hover + .item__title {
      opacity: 1;
      visibility: visible;
    }
  }

  .item__price {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;

    span {
      font-weight: 700;
      font-size: 12px;
      line-height: 11px;
      color: #FFFFFF;
      margin-left: 6px;
    }
  }

  .item__photo {
    max-width: 100px;
    height: 70px;
    text-align: center;
    width: 100%;
    opacity: 1;
    transition: all .3s ease;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      display: block;
    }
  }

`
