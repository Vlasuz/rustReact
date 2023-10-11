import { styled } from 'styled-components';

export const DocsStyle = styled.div`

  height: 38px;
  width: 38px;
  margin-right: 10px;
  position: relative;

  a:hover{
    color: #fff;
  }
  a{
    color: #a2abc5;
    display: block;
    width: 100%;
    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    -ms-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease;
  }

  .select__head {
    background-color: #202232;
    padding: 10px;
    border-radius: 8px;
  }

  img {
    width: 100%;
    height: 100%;
    display: block;
  }

  .select span{
    color: rgba(162, 171, 197, 0.8);
    margin-right: 8px;
  }
  .select{
    position: relative;
  }
  .select__head{
    cursor: pointer;
  }
  .select__item{
    padding: 7px 10px;
    font-weight: 500;
    font-size: 13px;
    line-height: 14px;
    color: #a2abc5;
    border-radius: 6px;
    display: block;
    background: transparent;
    cursor: pointer;
    border: none;
    width: 100%;
    text-align: left;
    -webkit-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease
  }
  .select__item:hover{
    color: #fff;
  }
  .select__body{
    position: absolute;
    top: 120%;
    z-index: 3;
    background: #26293b;
    -webkit-box-shadow: 0 7px 15px rgba(0,0,0,.1);
    box-shadow: 0 7px 15px rgba(0,0,0,.1);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    border-radius: 10px;
    min-width: 100px;
    right: 0;
    padding: 10px;
    opacity: 0;
    visibility: hidden;
    -webkit-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease
  }

  .select_open .select__body{
    opacity: 1;
    visibility: visible;
  }

  &.header__docs_active .select__body{
    opacity: 1;
    visibility: visible;
  }


`
