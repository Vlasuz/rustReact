import styled from "styled-components";

export const HistoryItemStyled = styled.li`


  border-radius: 10px;
  position: relative;
  overflow: hidden;
  padding: 7.5px 10px;
  display: flex;
  align-items: flex-start;
  margin-right: 10px;
  -webkit-transition: all .3s ease;
  -moz-transition: all .3s ease;
  -ms-transition: all .3s ease;
  -o-transition: all .3s ease;
  transition: all .3s ease;

  min-width: 205px;
  max-width: 205px;

  &.enter-active {
    max-width: 0;
    min-width: 0;
    padding-left: 0;
    padding-right: 0;
    margin: 0;
    height: 70px;
    transition: all .0s ease;
  }

  &:first-child {
  }

  &:after {
    content: "";
    position: absolute;
    opacity: .6;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    z-index: 0;
  }

  &.item__brown {
    &:after {
      background: linear-gradient(90deg, rgba(142, 97, 44, 0.80) 0%, rgba(57, 39, 17, 0.40) 100%);
    }
  }

  &.item__green {
    &:after {
      background: linear-gradient(90deg, rgba(84, 102, 59, 0.80) 0%, rgba(52, 63, 37, 0.40) 100%);
    }
  }

  .item__author {
    display: flex;
    align-items: center;

    img {
      width: 25px;
      height: 25px;
      object-fit: cover;
      border-radius: 5px;
    }

    span {
      color: var(--IconsActive, #A2ABC5);
      font-size: 12px;
      font-weight: 500;
      margin-left: 10px;
    }
  }

  .item__price {
    display: flex;
    align-items: center;
    margin-bottom: 7px;

    span {
      margin-left: 5px;
      color: #FFF;
      font-size: 14px;
      font-weight: 700;
    }
  }

  .item__details {
    position: relative;
    z-index: 1;
  }

  .item__image {
    min-width: 55px;
    width: 55px;
    height: 55px;
    z-index: 1;
    position: relative;
    margin-right: 10px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`
