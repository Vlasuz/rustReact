import { styled } from 'styled-components';

export const LanguagesStyled = styled.div`

  position: relative;
  margin-left: 54px;
  margin-right: 10px;

  .lang__button {
    background: #202232;
    border-radius: 6px;
    padding: 7px 10px;
    cursor: pointer;
    border: none;

    path {
      transition: all .3s ease;
    }

    &:hover {
      path {
        fill-opacity: 1
      }
    }

    svg {
      display: block;
    }
  }

  .lang__list {
    position: absolute;
    background: rgba(38, 41, 59, 0.9);
    box-shadow: 0px 7px 15px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    border-radius: 10px;
    padding: 16px 20px;
    min-width: 140px;
    top: calc(100% + 10px);
    left: 0;
    opacity: 0;
    visibility: hidden;
    transition: all .3s ease;
    z-index: 3;
  }

  &._active {
    .lang__list {
      opacity: 1;
      visibility: visible;
    }
  }

  button,
  a {
    font-weight: 500;
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 13px;
    line-height: 14px;
    color: #A2ABC5;
    padding: 7px 0;
    display: block;
    transition: all .3s ease;

    &:hover {
      color: #fff;
    }
  }

  .lang_active button,
  .lang_active a {
    color: #63697F;
  }


  @media screen and (max-width: 1280px) {
    margin-left: 10px;
  }

`