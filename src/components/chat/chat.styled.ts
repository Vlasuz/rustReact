import { styled } from 'styled-components';

export const ChatStyle = styled.div`


  border-radius: 10px 0 10px 10px;
  padding: 10px;
  height: calc(100vh - 255px);
  padding: 10px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding-top: 20px;

  .section-right {
    &__smiles {
      position: absolute;
      bottom: 84px;
      left: 10px;
      width: calc(100% - 20px);
      padding: 20px;
      background: rgba(38, 41, 59, 0.96);
      box-shadow: 0px 12px 30px rgba(15, 17, 28, 0.2);
      backdrop-filter: blur(5px);
      border-radius: 10px;
      z-index: 3;

      transition: all .3s ease;
      opacity: 0;
      visibility: hidden;

      &_active {
        opacity: 1;
        visibility: visible;
      }

      .smiles__block {
        img {
          width: 50px;
          height: 50px;
        }

        ul {
          display: flex;
          align-items: center;
          overflow: auto;
          padding-bottom: 15px;
        }

        li {
          margin-right: 15px;
        }

        button {
          background: transparent;
          border: none;
          cursor: pointer;
          transition: all .3s ease;

          &:hover {
            transform: scale(1.1);
          }

          &:active {
            transform: scale(.9);
          }
        }
      }

      .smiles__switches {
        position: relative;
        margin-top: 20px;

        &:after {
          content: '';
          background: linear-gradient(270deg, #26293B 33.06%, rgba(38, 41, 59, 0) 100%);
          width: 60px;
          height: 50px;
          position: absolute;
          top: 0;
          right: 0;
        }

        ul {
          display: flex;
          align-items: center;
          overflow: auto;
          margin-bottom: -20px;
          margin-top: -20px;

          &::-webkit-scrollbar {
            width: 0;
            height: 0;
            background: rgba(#04B8AD, .1);
          }
        }

        button {
          font-weight: 400;
          font-size: 13px;
          line-height: 12px;
          color: #A2ABC5;
          background: transparent;
          padding-top: 20px;
          border: none;
          cursor: pointer;
          white-space: nowrap;
          padding-bottom: 20px;
        }

        li {
          margin-right: 35px;
          position: relative;

          &:after {
            content: '';
            background: #F5AD57;
            border-radius: 2px;
            width: 40px;
            height: 3px;
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            opacity: 0;
          }

          &.li_active {
            &:after {
              opacity: 1;
            }

            button {
              color: #fff;
            }
          }

          &:last-child {
            padding-right: 60px;
          }

          &:first-child {
            padding-right: 0;
          }
        }
      }
    }
  }

  &:before {
    content: '';
    top: 57px;
    left: 0;
    position: absolute;
    width: 100%;
    height: calc(100% - 57px);
    background: #202232;
    border-radius: 10px;
  }

  &:after {
    content: '';
    background: linear-gradient(180deg, #202232 0%, rgba(32, 34, 50, 0) 100%);
    width: 100%;
    height: 100px;
    top: 57px;
    left: 0;
    position: absolute;
    pointer-events: none;
  }

  .item__dropdown {
    position: absolute;
    top: 28px;
    left: 0;
    background: #33374B;
    box-shadow: 0px 7px 15px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    border-radius: 10px;
    padding: 10px;
    opacity: 0;
    visibility: hidden;
    transition: all .3s ease;
    z-index: 2;

    &_active {
      opacity: 1;
      visibility: visible;
    }

    a {
      font-weight: 500;
      font-size: 12px;
      line-height: 13px;
      color: #A2ABC5;
      padding: 10px;
      display: block;

      &:hover {
        background: rgba(162, 171, 197, 0.07);
        border-radius: 6px;
        color: #6F758C;
      }
    }
  }

  .li__delete {
    a {
      color: #FC6C6C;
    }
  }

  .item__inner {
    position: relative;
    width: 100%;
  }

  .item__top {
    display: flex;
    align-items: center;
  }

  .item__name {
    font-weight: 500;
    font-size: 13px;
    line-height: 14px;
    color: #A2ABC5;
    margin-right: 10px;
  }

  .item__muted {
    margin-right: 10px;
    display: none;
  }

  .item__menu {
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 5px 0;
  }

  .item__text {
    margin-top: 12px;
    background: #26293C;
    border-radius: 8px;

    img {
      width: 60px;
    }

    p {
      font-weight: 400;
      font-size: 13px;
      line-height: 18px;
      color: #FFFFFF;
      padding: 14px 10px;
      width: 100%;
    }
  }

  .item__time {
    margin-left: auto;
    font-weight: 500;
    font-size: 10px;
    line-height: 11px;
    color: rgba(162, 171, 197, 0.3);
  }

  img {
    display: block;
  }

  .item__photo {
    position: relative;
    width: fit-content;
    border-radius: 50%;
    min-width: 40px;
    width: 40px;
    height: 40px;
    margin-right: 12px;

    .photo {
      width: 100%;
      height: 100%;
    }

    .mark {
      position: absolute;
      bottom: -11px;
      left: 50%;
      transform: translateX(-50%);
      border: 3px solid #202232;
      border-radius: 50%;
      width: 22px;
      height: 22px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px;
    }
  }

  .chatting__block {
    height: 100%;
  }

  .chatting__item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 14px;
    transition: all .3s ease;

    &.item_deleted {
      opacity: 0;
    }

    &:last-child {
      .item__dropdown {
        top: auto;
        bottom: calc(100% + 8px);
      }
    }

    &_system {
      .item__text {
        background: rgba(85, 98, 221, 0.3);
        position: relative;

        &:after {
          content: '';
          background: #5562DD;
          width: 40px;
          height: 3px;
          left: 20px;
          top: 0;
          position: absolute;
          display: block;
          border-radius: 10px;
        }
      }
    }

    &_muted {
      .item__muted {
        display: block;
      }

      .item__text {
        p {
          color: rgba(255, 255, 255, 0.1);
          filter: blur(2px);
          user-select: none;
        }
      }
    }
  }

  .chat__bottom {
    background-color: #202232;
    position: absolute;
    bottom: 10px;
    width: calc(100% - 20px);
    left: 10px;
    margin-top: 10px;
  }

  .section-right__resources {
    margin: 0 -5px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    /* position: absolute; */
    bottom: 84px;
    left: 10px;
    right: 10px;

    .resources__button {
      background: #26293B;
      border-radius: 8px;
      font-weight: 400;
      font-size: 12px;
      line-height: 11px;
      color: rgba(162, 171, 197, 0.5);
      padding: 10px 14px;
      margin: 0 5px;
      display: block;
      transition: all .3s ease;
      border: none;
      cursor: pointer;

      &_active,
      &:hover {
        background: #26293B;
        color: #A2ABC5;
      }
    }
  }

  .section-right__bottom {
    display: flex;
    background: #26293B;
    border-radius: 8px;
    margin-top: auto;
    padding: 12px 20px;
    padding-left: 0;
    /* position: absolute; */
    bottom: 10px;
    left: 10px;
    right: 10px;

    ._red {
      color: red !important;
    }

    .smiles {
      min-width: 40px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      padding: 8px;
      background: #363A51;
      cursor: pointer;
      border: none;
      transition: all .3s ease;

      &:active {
        transform: scale(.9);
      }

      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .send {
      background: #363A51;
      border-radius: 20px;
      width: 40px;
      min-width: 40px;
      height: 40px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 10px;
      border: none;
    }

    input {
      font-weight: 400;
      font-size: 13px;
      line-height: 12px;
      padding: 0 14px;
      background: transparent;
      outline: none;
      border: none;
      color: #fff;
      width: 100%;

      &::placeholder {
        color: rgba(162, 171, 197, 0.5);
      }
    }

    .textarea {
      display: flex;
      align-items: center;
      width: 100%;
      margin-right: 20px;

      span {
        font-weight: 400;
        font-size: 10px;
        line-height: 10px;
        color: rgba(162, 171, 197, 0.3);
      }
    }
  }


`
