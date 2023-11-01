import { styled } from 'styled-components';

export const HeaderStyled = styled.header`

  padding: 18px 0;
  position: relative;

  .wrapper {
    padding-left: 30px;
    padding-right: 30px;
  }

  .header {

    &__docs {

      .select__head {
        &:hover {
          svg {
            path,
            rect {
              fill-opacity: 1;
            }
          }
        }
      }

      svg {
        width: 100%;
        height: 100%;
        display: block;

        path,
        rect {
          transition: all .3s ease;
        }
      }
    }

    &__lowright {
      margin-left: auto;
      display: flex;
      align-items: center;
    }

    &__right {
      margin-left: 6%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      min-width: 352px;
    }

    &__coins {
      background: #202232;
      border-radius: 8px;
      padding: 8px;
      display: flex;
      border: none;
      cursor: pointer;
      align-items: center;
      min-width: 143px;
      margin-right: 14px;
      position: relative;
      transition: all .3s ease;

      &:after {
        content: 'Пополнить';
        font-weight: 700;
        font-size: 13px;
        line-height: 16px;
        color: #191A29;
        position: absolute;
        left: 14px;
        opacity: 0;
        transition: all .3s ease;
        top: 50%;
        transform: translateY(-50%);
      }

      &:hover {
        background: #F5AD57;

        span,
        img {
          opacity: 0;
        }

        &:after {
          opacity: 1;
        }
      }

      span {
        font-weight: 700;
        font-size: 13px;
        line-height: 16px;
        color: #FFFFFF;
        margin-left: 6px;
        transition: all .3s ease;
      }

      .ico {
        background: #202232;
        border-radius: 6px;
        margin-left: auto;
      }

      svg {
        margin: -1px;
      }

      img,
      svg {
        display: block;
        transition: all .3s ease;
      }

      a {
        margin-left: auto;
        display: block;
      }
    }

    &__support {
      background: #202232;
      border-radius: 8px;
      display: flex;
      align-items: center;
      padding: 12px 20px;
      border: none;
      cursor: pointer;

      span {
        font-weight: 500;
        font-size: 12px;
        line-height: 13px;
        color: #A2ABC5;
        margin-left: 10px;
      }
    }

    &__socials {
      margin-left: 30px;
      display: flex;
      align-items: center;
    }

    &__user {
      display: flex;
      min-width: 165px;
      width: 100%;
      align-items: center;

      span {
        font-weight: 500;
        font-size: 13px;
        line-height: 14px;
        color: #FFFFFF;
        margin-left: 10px;
      }

      img {
        border-radius: 8px;
        display: block;
        width: 40px;
        height: 40px;
        object-fit: cover;
      }
    }

    &__inner {
      display: flex;
      align-items: center;
    }

    &__logo {
      display: flex;
      align-items: center;
      font-weight: 600;
      font-size: 16px;
      line-height: 18px;
      letter-spacing: 0.1em;

      .ico {
        margin-right: 6px;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;

        &:after {
          content: '';
          width: 40px;
          height: 40px;
          position: absolute;
          top: 0;
          left: 0;
          background: rgba(85, 98, 221, 0.1);
          filter: blur(12.5px);
        }
      }

      span {
        color: var(--cFF);

        span {
          color: #5562DD;
        }
      }
    }

    &__burger {
      background: #202232;
      border-radius: 6px;
      min-width: 30px;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: auto;
      cursor: pointer;
      border: none;
      position: relative;

      &_notice:after {
        content: '';
        background: #FFAA46;
        border: 3px solid #191A29;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        position: absolute;
        top: -5px;
        right: -5px;
      }
    }
  }

`
