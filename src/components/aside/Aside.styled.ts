import {styled} from 'styled-components';

export const AsideStyled = styled.aside`

  background: #212232;
  max-width: 100px;
  padding-top: 10px;
  border-radius: 10px;
  height: calc(100vh - 96px);
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-right: 14px;

  .absolute-span {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 90px;
    z-index: 7;
    background: rgba(162, 171, 197, 0.3);
    backdrop-filter: blur(5px);
    border-radius: 10px;
    width: fit-content;
    padding: 13px 26px;
    font-weight: 500;
    font-size: 12px;
    line-height: 13px;
    color: #FFFFFF;
    opacity: 0;
    visibility: hidden;
    transition: all .3s ease;
  }

  a:hover {
    .absolute-span {
      opacity: 1;
      visibility: visible;
    }
  }

  .aside {
    &__fight {
      text-align: center;
      margin-top: 26px;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 80px;
      margin: 5px 10px;
      border-radius: 8px;
      position: relative;

      &:after {
        content: '';
        background: linear-gradient(38.31deg, rgba(162, 171, 197, 0.15) 0%, rgba(162, 171, 197, 0.05) 100%);
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 8px;
        opacity: 0;
        transition: all .3s ease;
      }

      img {
        opacity: .4;
        -webkit-transition: all .3s ease;
        -moz-transition: all .3s ease;
        -ms-transition: all .3s ease;
        -o-transition: all .3s ease;
        transition: all .3s ease;
      }

      &:hover,
      &_active {
        &:after {
          opacity: 1;
        }

        img {
          opacity: 1;
        }
      }
    }

    &__center {
      background: #262939;
      padding-top: 40px;
      height: 65%;
      margin-top: auto;
      display: flex;
      flex-direction: column;
      border-radius: 0 0 10px 10px;
    }

    &__author {
      font-weight: 500;
      font-size: 10px;
      line-height: 12px;
      color: rgba(162, 171, 197, 0.5);
      padding: 20px 14px;
      margin-top: auto;
      transition: all .3s ease;
      text-align: center;

      &:hover {
        filter: brightness(1.5);
      }

      span {
        color: #36394B;
        display: block;
      }

      img {
        margin-bottom: 5px;
      }
    }

    &__list {
      svg {
        fill-opacity: 0.5;
      }

      .li_active {
        a {
          path {
            fill-opacity: 1
          }

          &:before {
            background: rgba(162, 171, 197, 0.8);
          }
        }
      }

      a {
        margin-bottom: 46px;
        display: flex;
        align-items: center;
        text-align: center;
        position: relative;
        justify-content: space-between;
        width: 100%;

        path {
          transition: all .3s ease;
        }

        &:hover {

          path {
            fill-opacity: 1
          }

          &:before {
            background: rgba(162, 171, 197, 0.8);
          }
        }

        &:before {
          content: '';
          background: rgba(162, 171, 197, 0.1);
          width: 3px;
          height: 20px;
          transition: all .3s ease;
          border-radius: 2px;
          display: block;
        }

        &:after {
          content: '';
          background: transparent;
          width: 3px;
          height: 20px;
          border-radius: 2px;
          display: block;
        }
      }
    }

    &__plane {
      margin: 0 10px;
      border-radius: 8px;
      text-align: center;
      padding: 6px;
      padding-top: 18px;
      position: relative;

      img {
        opacity: .4;
        -webkit-transition: all .3s ease;
        -moz-transition: all .3s ease;
        -ms-transition: all .3s ease;
        -o-transition: all .3s ease;
        transition: all .3s ease;
      }

      &:hover,
      &_timeline {
        &:after {
          opacity: 1;
        }

        img {
          opacity: 1;
        }
      }

      .timer {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 16px;

        span {
          font-weight: 700;
          font-size: 12px;
          line-height: 11px;
          color: #FFFFFF;
          display: block;
        }

        .sec {
          small.dot,
          span {
            font-weight: 400;
            color: #696E84;
            display: inline;
            margin-top: 0;
          }
        }
      }

      .timer-line {
        transition: all .3s ease;
        opacity: 0;

        &__line {
          background: rgba(162, 171, 197, 0.2);
          border-radius: 2px;
          width: 100%;
          height: 2px;
          position: relative;
          transition: all .3s ease;
          opacity: 0;

          &_done {
            background: #F5AD57;
            border-radius: 2px;
            width: 0%;
            height: 2px;
            position: absolute;
            left: 0;
            top: 0;
            transition: all 1s ease;
          }
        }
      }

      &:hover,
      &_timeline {
        background: linear-gradient(38.31deg, rgba(162, 171, 197, 0.15) 0%, rgba(162, 171, 197, 0.05) 100%);

        .timer-line,
        .timer-line__line {
          opacity: 1;
        }
      }
    }
  }


  @media screen and (max-width: 1250px) {
    flex-direction: row;
    height: auto;
    width: 100%;
    max-width: 100%;
    margin-bottom: 15px;
    padding: 0;
    -webkit-border-radius: 10px;-moz-border-radius: 10px;border-radius: 10px;
    
    .aside__plane {
      padding: 10px;
    }

    .aside__list {
      display: flex;
      align-items: center;
    }

    .aside__center {
      flex-direction: row;
      margin: 0;
      padding: 0;
      height: auto;
      margin-left: auto;
      align-items: center;
      -webkit-border-radius: 0 10px 10px 0;-moz-border-radius: 0 10px 10px 0;border-radius: 0 10px 10px 0;
    }

    .aside__fight {
      height: 80px;
      width: 80px;
    }

    .aside__author {
      margin: 0;
      padding: 0;
    }

    .aside__plane .timer {
      margin-top: 5px;
    }

    .absolute-span {
      top: 100%;
      left: 50%;
      -webkit-transform: translateX(-50%);
      -moz-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      -o-transform: translateX(-50%);
      transform: translateX(-50%);
    }

    .aside__list li {
      &:first-child { 
        a:before {
          opacity: 0;
        }
      }
    }
    .aside__list a {
      margin: 0 10px;
    }
  }
  
  @media screen and (max-width: 768px) {
    .aside__plane {
      margin: 0;
      //padding: 0;
    }
    .aside__fight {
      margin: 0;
      height: auto;
      width: 150%;
      min-width: auto;
      img,
      svg {
        width: 20px;
      }
    }
    .aside__list a {
     margin: 0 5px; 
      svg {
        width: 20px;
      }
    }
    .aside__author p span {
      display: none;
    }
    
    .aside__plane .timer-line img {
      display: none;
    }

    .aside__author {
      padding: 0 10px;
    }
    .aside__author p {
      font-size: 9px;
      white-space: pre-wrap;
    }
    .aside__author img {
      width: 20px;
      margin-bottom: 0px;
    } 
  }

`
