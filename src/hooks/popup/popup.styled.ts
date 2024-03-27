import styled from "styled-components";
import array from './../../assets/images/arr-td.svg'

export const PopupStyled = styled.div`
  
  .popup-pull-success {
    img {
      border-radius: 50%;
      box-shadow: 0 0 10px 3px #92C14533;
    }
  }
  .popup-pull-error {
    img {
      border-radius: 50%;
      box-shadow: 0 0 10px 3px #DB475233;
    }
  }
  .popup-pull-error,
  .popup-pull-success,
  .popup-withdraw-bot {
    h2 {
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    p {
      text-align: center;
      font-size: 14px;
      font-weight: 500;
      line-height: 13px;
      letter-spacing: 0em;
      color: #A2ABC5;
    }
  }
  
  .popup {
    opacity: 0;
    visibility: hidden;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .3s ease;
    z-index: 12;
  }
  
  .popup-pull-success,
  .popup-pull-error {
    h2 {
      display: flex;
      gap: 10px;
    }
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
    font-weight: bold;
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
    transition: all .3s ease;
    white-space: nowrap;
  }
  
  .select:after {
    content: "";
    display: block;
    background: url(array) no-repeat;
    background-size: contain;
    width: 5px;
    height: 8px;
    position: absolute;
    top: 50%;
    right: 0;
    z-index: 0;
    -webkit-transform: translateY(-50%) rotate(90deg);
    -ms-transform: translateY(-50%) rotate(90deg);
    transform: translateY(-50%) rotate(90deg)
  }

  .select_open .select__body{
    opacity: 1;
    visibility: visible;
  }
  
  .search-button {
    background: transparent;
    padding: 0;
    border: none;
    text-transform: lowercase;
  }

  .postamat__filter .filter__item {
    padding: 7px 14px;
    background: rgba(46,49,69,.5);
    border-radius: 6px;
    margin-right: 8px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    height: 24px;
  }


  .postamat__filter .filter__item input[type=checkbox] {
    position: absolute;
    width: 30%;
    height: 100%;
    right: 0;
    top: 0;
    z-index: 2;
    opacity: 0;
    cursor: pointer;
    pointer-events: none;
  }
  .postamat__filter .filter__item img:last-child {
    margin-left: 5px;
  }
  .postamat__filter .filter__item span {
    font-weight: 500;
    font-size: 13px;
    line-height: 12px;
    color: rgba(162,171,197,.5);
    margin-right: 10px;

    color: #a2abc5
  }
  .postamat__item .item__photo img {
    width: 100%;
    height: 100%;
    -o-object-fit: contain;
    object-fit: contain;
    display: block;
  }
  .postamat__filter {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-top: 14px
  }
  .postamat__filter input[type=radio] {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1
  }

  .postamat__search {
    background: #26293b;
    border-radius: 8px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 55px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
  }
  
  .postamat__search input {
    width: 100%;
    background: 0 0;
    border: none;
    height: 55px;
    outline: 0;
    padding: 0 20px;
    font-weight: 400;
    font-size: 13px;
    line-height: 12px;
    color: #fff;
    text-align: left;
  }
  .postamat__search input::-webkit-input-placeholder {
    color: rgba(162,171,197,.5)
  }
  .postamat__search input::-moz-placeholder {
    color: rgba(162,171,197,.5)
  }
  .postamat__search input:-ms-input-placeholder {
    color: rgba(162,171,197,.5)
  }
  .postamat__search input::-ms-input-placeholder {
    color: rgba(162,171,197,.5)
  }
  .postamat__search input::placeholder {
    color: rgba(162,171,197,.5)
  }
  .postamat__search button {
    margin-right: 20px;
    background: 0 0;
    border: none;
    cursor: pointer
  }
  
  input {
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    border: none;
    border-right: 1px solid #2e3145;
    color: #fff;
    font-weight: 600;
    height: 30px;
    margin: -15px 10px -15px auto;
    outline: none;
    padding-right: 10px;
    text-align: right;
  }
  
  .popup__bgd {
    background: rgba(25,26,41,.7);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all .3s ease;
    
    opacity: 0;
    visibility: hidden;
  }
  .popup__content {
    background: #26293b;
    -webkit-box-shadow: 0 4px 60px rgba(0,0,0,.2);
    box-shadow: 0 4px 60px rgba(0,0,0,.2);
    border-radius: 10px;
    position: absolute;
    padding: 30px 20px;
    width: 100%;
    max-width: 586px;
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 100vh;
    transition: all .3s ease;

    opacity: 0;
    visibility: hidden;
  }

  .popup_active {
    opacity: 1;
    visibility: visible;
    .popup__content,
    .popup__bgd {
      opacity: 1;
      visibility: visible;
    }
  }
  
  .popup h2 {
    font-weight: 700;
    font-size: 20px;
    line-height: 19px;
    color: #fff;
    margin-bottom: 30px
  }
  .popup__cross {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    opacity: .4
  }
  .popup__cross:hover {
    opacity: 1
  }

  .popup-pull__buttons a,
  .popup-trade-waiting a,
  button {
    background: rgba(85,98,221,.8);
    border-radius: 8px;
    font-weight: 700;
    font-size: 13px;
    line-height: 12px;
    text-transform: uppercase;
    color: #fff;
    padding: 19px 22px;
    border: none;
    -webkit-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease;
    cursor: pointer;
    display: block
  }
  .popup-pull__buttons a:hover,
  .popup-trade-waiting a:hover,
  .popup button:hover {
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
    transform: scale(1.05)
  }
  .popup-pull__buttons a:active,
  .popup-trade-waiting a:active,
  .popup button:active {
    -webkit-transform: scale(.95);
    -ms-transform: scale(.95);
    transform: scale(.95)
  }
  .popup-pull__buttons a:disabled,
  .popup-trade-waiting a:disabled,
  .popup button:disabled {
    background: #2e3145;
    color: rgba(162,171,197,.5);
    cursor: default
  }
  .popup button:disabled:hover {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1)
  }
  .popup button:disabled:active {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1)
  }
  .popup a.grey,
  .popup button.grey {
    background: #2e3145
  }
  .popup .input-login span ,
  .popup .input-pincode span {
    font-weight: 400;
    font-size: 12px;
    line-height: 11px;
    margin-bottom: 10px;
    display: block;
    color: #a2abc5
  }
  .popup .input-login input ,
  .popup .input-pincode input {
    background: #2b2e42;
    border-radius: 8px;
    font-weight: 700;
    font-size: 20px;
    line-height: 19px;
    border: none;
    height: 70px;
    width: 100%;
    outline: 0;
    text-transform: uppercase;
    text-align: center;
    color: #fff
  }
  .popup .input-login input::-webkit-input-placeholder ,
  .popup .input-pincode input::-webkit-input-placeholder {
    color: rgba(162,171,197,.1)
  }
  .popup .input-login input::-moz-placeholder ,
  .popup .input-pincode input::-moz-placeholder {
    color: rgba(162,171,197,.1)
  }
  .popup .input-login input:-ms-input-placeholder ,
  .popup .input-pincode input:-ms-input-placeholder {
    color: rgba(162,171,197,.1)
  }
  .popup .input-login input::-ms-input-placeholder ,
  .popup .input-pincode input::-ms-input-placeholder {
    color: rgba(162,171,197,.1)
  }
  .popup .input-login input::placeholder ,
  .popup .input-pincode input::placeholder {
    color: rgba(162,171,197,.1)
  }

  .input-login ._error{
    border: 1px solid red !important;
  }
  .input-login ._success{
    border: 1px solid green !important;
  }

  .popup-fair-game .popup__content {
    max-width: 660px;
  }
  .popup-fair-game h2 {
    text-align: center;
  }
  .popup-fair-game a,
  .popup-fair-game button {
    padding: 19px 43px;
    background: #2e3145;
    border-radius: 8px;
    margin: 0 auto;
    display: block;
    margin-top: 30px;
    font-weight: 700;
    font-size: 13px;
    line-height: 12px;
    text-transform: uppercase;
    color: #fff;
    border: none;
    cursor: pointer;
    -webkit-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease;
    width: fit-content;
  }
  .popup-fair-game a:hover,
  .popup-fair-game button:hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1)
  }
  .popup-fair-game a:active,
  .popup-fair-game button:active {
    -webkit-transform: scale(.9);
    -ms-transform: scale(.9);
    transform: scale(.9)
  }
  .popup-fair-game p {
    color: #a2abc5;
    font-weight: 400;
    font-size: 14px;
    line-height: 26px
  }
  .popup-fair-game__border {
    padding: 20px;
    border: 1px dashed rgba(162,171,197,.15);
    border-radius: 10px;
    margin-bottom: 30px
  }
  .popup-fair-game__border h3 {
    font-weight: 400;
    font-size: 13px;
    line-height: 14px;
    color: #fff;
    margin-bottom: 14px
  }
  .popup-fair-game__text p span,
  .popup-fair-game__border p {
    color: #f5ad57
  }
  .popup-fair-game__border span {
    color: #fff
  }
  .popup-add-coins-skins hr {
    border: 1px solid rgba(162,171,197,.05);
    margin-top: 12px;
    margin-bottom: 14px
  }
  .popup-add-coins-skins .postamat__search {
    background: rgba(46,49,69,.7);
    margin-top: 20px
  }
  .popup-add-coins-skins .skins__inner {
    position: relative
  }
  .popup-add-coins-skins .skins__inner:after {
    /*content: "";*/
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 128px;
    background: -webkit-gradient(linear,left top,left bottom,from(transparent),to(rgba(46,49,69,.7)));
    background: -o-linear-gradient(transparent,rgba(46,49,69,.7));
    background: linear-gradient(transparent,rgba(46,49,69,.7));
    z-index: 3
  }
  .popup-add-coins-skins .skins__button {
    margin-top: 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
  }
  .popup-add-coins-skins .skins__button button {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
  }
  .popup-add-coins-skins .skins__button button:last-child {
    margin-left: 10px
  }
  .popup-add-coins-skins .skins__button img {
    margin-right: 10px
  }
  .popup-add-coins-skins .skins__price {
    background: #202232;
    border-radius: 8px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 10px 20px;
    margin-top: 14px
  }
  .popup-add-coins-skins .skins__price img {
    margin-right: 6px
  }
  .popup-add-coins-skins .skins__price .ico {
    margin: 0 30px;
    background: #26293b;
    width: 30px;
    height: 30px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    border-radius: 50%;
    position: relative
  }
  .popup-add-coins-skins .skins__price .ico:before {
    content: "";
    background: #26293b;
    width: 4px;
    height: calc(100% + 20px);
    position: absolute;
    display: block;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    top: -10px;
    z-index: 1
  }
  .popup-add-coins-skins .skins__price .ico img {
    margin-right: 0;
    position: relative;
    z-index: 2
  }
  .popup-add-coins-skins .skins__price span {
    font-weight: 500;
    font-size: 16px;
    line-height: 15px;
    color: #f8f8f8
  }
  .popup-add-coins-skins .skins__price .coins {
    margin-right: 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
  }
  .popup-add-coins-skins .skins__price .price__block {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-left: auto
  }
  .popup-add-coins-skins .skins__block {
    display: -ms-grid;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-template-rows: repeat(4, 1fr);
    //margin-top: 20px;
    grid-gap: 6px;
    max-height: 385px;
    overflow: auto;
    min-height: 385px;
  }
  .popup-add-coins-skins .clothes__cool {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    position: absolute;
    top: 8px;
    left: 8px
  }
  .popup-add-coins-skins .item__check {
    position: absolute;
    top: 0;
    right: 0;
    -webkit-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease;
    opacity: 0
  }
  .popup-add-coins-skins .skins__item {
    background: rgba(162,171,197,.06);
    border-radius: 8px;
    padding: 20px 20px 14px;
    position: relative;
    cursor: pointer;
    -webkit-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease
  }
  .popup-add-coins-skins .skins__item_active {
    background: rgba(162,171,197,.15)
  }
  .popup-add-coins-skins .skins__item_active .item__check {
    opacity: 1;
    z-index: 2;
    top: 5px;
    right: 5px;
  }
  .popup-add-coins-skins .skins__item:active {
    -webkit-transform: scale(.95);
    -ms-transform: scale(.95);
    transform: scale(.95)
  }
  .popup-add-coins-skins .skins__item:hover {
    background: rgba(162,171,197,.15)
  }
  .popup-add-coins-skins .item__price {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
  }
  .popup-add-coins-skins .item__price img {
    width: 17px;
    margin-right: 6px
  }
  .popup-add-coins-skins .item__price span {
    font-weight: 700;
    font-size: 12px;
    line-height: 11px;
    color: #fff
  }
  .popup-add-coins-skins .item__photo {
    width: 60px;
    height: 60px;
    margin: 0 auto;
    margin-bottom: 20px
  }
  .popup-add-coins-skins .item__photo img {
    width: 100%;
    height: 100%;
    -o-object-fit: contain;
    object-fit: contain;
    display: block
  }
  .popup-add-coins-skins .popup__content {
    max-width: 586px
  }
  .popup-add-coins-skins h2 {
    font-weight: 700;
    font-size: 20px;
    line-height: 19px;
    color: #fff;
    margin-bottom: 20px;
    text-align: center
  }
  .popup-add-coins-skins p {
    font-weight: 500;
    font-size: 14px;
    line-height: 13px;
    text-align: center;
    color: #a2abc5
  }
  .popup-add-coins-balance-linking .popup__content {
    height: 318px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column
  }
  .popup-add-coins-balance-linking h2 {
    text-align: center
  }
  .popup-add-coins-balance-linking p {
    height: 100%;
    text-align: center;
    font-weight: 500;
    font-size: 14px;
    line-height: 13px;
    color: #a2abc5;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
  }
  .popup-add-coins-balance h2 {
    text-align: center;
    margin-bottom: 20px
  }
  .popup-add-coins-balance .back {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  .popup-add-coins-balance .back img {
    -webkit-transform: scaleX(-1);
    -ms-transform: scaleX(-1);
    transform: scaleX(-1);
    margin-right: 14px
  }
  .popup-add-coins-balance .back span {
    font-weight: 400;
    font-size: 14px;
    line-height: 13px;
    color: #a2abc5
  }
  .popup-add-coins-balance button {
    margin-top: 20px;
    width: 100%
  }
  .popup-add-coins-balance .balance__sum {
    background: #202232;
    border-radius: 8px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 15px 20px;
    margin-top: 20px
  }
  .popup-add-coins-balance .balance__sum .sum {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
  }
  .popup-add-coins-balance .balance__sum span {
    font-weight: 700;
    font-size: 16px;
    line-height: 15px;
    color: #f8f8f8
  }
  .popup-add-coins-balance .balance__sum img {
    margin-right: 6px;
    width: 20px
  }
  .popup-add-coins-balance .balance__sum p {
    font-weight: 500;
    font-size: 14px;
    line-height: 13px;
    color: #a2abc5
  }
  .popup-add-coins-balance .balance__cost {
    display: -ms-grid;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 8px;
    margin-top: 30px
  }
  .popup-add-coins-balance .balance__cost li {
    width: 100%;
    position: relative
  }
  .popup-add-coins-balance .balance__cost li:after {
    content: "";
    background: #f5ad57;
    border-radius: 2px;
    width: 40px;
    height: 3px;
    border-radius: 10px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    display: block;
    position: absolute;
    bottom: 0;
    -webkit-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease;
    opacity: 0
  }
  .popup-add-coins-balance .balance__cost button {
    background: #2e3145;
    border-radius: 8px;
    height: 84px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    font-weight: 500;
    font-size: 20px;
    line-height: 19px;
    color: #fff;
    margin-top: 0
  }
  .popup-add-coins-balance .balance__cost button:hover {
    background: -webkit-gradient(linear,left top,left bottom,from(rgba(46,49,69,0)),to(rgba(245,173,87,.2)));
    background: -o-linear-gradient(top,rgba(46,49,69,0) 0,rgba(245,173,87,.2) 100%);
    background: linear-gradient(180deg,rgba(46,49,69,0) 0,rgba(245,173,87,.2) 100%);
    color: #e8a14e;
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1)
  }
  .popup-add-coins-balance .balance__cost .li_active button {
    background: -webkit-gradient(linear,left top,left bottom,from(rgba(46,49,69,0)),to(rgba(245,173,87,.2)));
    background: -o-linear-gradient(top,rgba(46,49,69,0) 0,rgba(245,173,87,.2) 100%);
    background: linear-gradient(180deg,rgba(46,49,69,0) 0,rgba(245,173,87,.2) 100%);
    color: #e8a14e
  }
  .popup-add-coins-balance .balance__cost .li_active:after {
    opacity: 1
  }
  .popup-add-coins-pin-code .popup__content,
  .popup-add-coins-pin-code-checking .popup__content,
  .popup-add-coins-pin-code-fail .popup__content,
  .popup-add-coins-pin-code-success .popup__content {
    height: 271px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column
  }
  .popup-add-coins-pin-code .checking-code,
  .popup-add-coins-pin-code-checking .checking-code,
  .popup-add-coins-pin-code-fail .checking-code,
  .popup-add-coins-pin-code-success .checking-code {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    height: 100%
  }
  .popup-add-coins-pin-code .checking-code span,
  .popup-add-coins-pin-code-checking .checking-code span,
  .popup-add-coins-pin-code-fail .checking-code span,
  .popup-add-coins-pin-code-success .checking-code span {
    font-weight: 500;
    font-size: 14px;
    line-height: 13px;
    color: #a2abc5;
    margin-right: 10px
  }
  .popup-add-coins-pin-code .load,
  .popup-add-coins-pin-code-checking .load,
  .popup-add-coins-pin-code-fail .load,
  .popup-add-coins-pin-code-success .load {
    width: -moz-fit-content;
    width: fit-content
  }
  .popup-add-coins-pin-code h2,
  .popup-add-coins-pin-code-checking h2,
  .popup-add-coins-pin-code-fail h2,
  .popup-add-coins-pin-code-success h2 {
    text-align: center
  }
  .popup-add-coins-pin-code h2:after,
  .popup-add-coins-pin-code-checking h2:after,
  .popup-add-coins-pin-code-fail h2:after,
  .popup-add-coins-pin-code-success h2:after {
    content: "";
    background: rgba(233,165,85,.15);
    -webkit-filter: blur(35px);
    filter: blur(35px);
    width: 410px;
    height: 63px;
    position: absolute;
    top: -30px;
    display: block;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%)
  }
  .popup-add-coins-pin-code button,
  .popup-add-coins-pin-code-checking button,
  .popup-add-coins-pin-code-fail button,
  .popup-add-coins-pin-code-success button {
    margin: 0 auto;
    margin-top: 20px
  }
  .popup-add-coins-pin-code-success h2:after {
    background: rgba(146,193,69,.15)
  }
  .popup-add-coins-pin-code-success p {
    font-weight: 500;
    font-size: 14px;
    line-height: 13px;
    text-align: center;
    color: #a2abc5
  }
  .popup-add-coins-pin-code-success .code-success {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    position: relative;
    height: 100%
  }
  .popup-add-coins-pin-code-success .code-success__center {
    position: absolute;
    border: 10px solid #26293b;
    border-radius: 50%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
  }
  .popup-add-coins-pin-code-success .code-success__center:after {
    content: "";
    width: 34px;
    height: 34px;
    background: rgba(146,193,69,.2);
    -webkit-filter: blur(12.5px);
    filter: blur(12.5px);
    position: absolute;
    display: block;
    border-radius: 50%
  }
  .popup-add-coins-pin-code-success .code-success__center img {
    display: block
  }
  .popup-add-coins-pin-code-success .code-success__item {
    background: rgba(162,171,197,.1);
    width: 140px;
    height: 70px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
  }
  .popup-add-coins-pin-code-success .code-success__item:first-child {
    border-radius: 10px 0 0 10px
  }
  .popup-add-coins-pin-code-success .code-success__item:last-child {
    border-radius: 0 10px 10px 0;
    margin-left: 6px
  }
  .popup-add-coins-pin-code-success .code-success__item span {
    font-weight: 700;
    font-size: 16px;
    line-height: 15px;
    color: #f8f8f8
  }
  .popup-add-coins-pin-code-success .code-success__item img {
    margin-right: 6px
  }
  .popup-add-coins-pin-code-fail h2:after {
    background: rgba(219,71,82,.15)
  }
  .popup-add-coins-pin-code-fail p {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #a2abc5
  }
  .popup-add-coins-pin-code-fail .code-fail {
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
  }
  .popup-add-coins-pin-code-fail .code-fail__timer {
    background: #2e3145;
    border-radius: 8px;
    width: 60px;
    height: 70px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    font-weight: 700;
    font-size: 20px;
    line-height: 19px;
    text-transform: uppercase;
    color: #a2abc5
  }
  .popup-add-coins h2 {
    text-align: center
  }
  .popup-add-coins .popup__content {
    max-width: 586px
  }
  .popup-add-coins__game,
  .popup-add-coins__var {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 8px
  }
  .popup-add-coins__game img,
  .popup-add-coins__var img {
    width: 40px;
    height: 40px;
    -o-object-fit: contain;
    object-fit: contain
  }
  .popup-add-coins__game:last-child,
  .popup-add-coins__var:last-child {
    margin-bottom: 0
  }
  .popup-add-coins .game__item,
  .popup-add-coins .var__item {
    background: #2e3145;
    border-radius: 8px;
    width: 100%;
    height: 84px;
    margin-right: 8px;
    font-weight: 500;
    font-size: 13px;
    line-height: 14px;
    color: #a2abc5;
    border: none;
    cursor: pointer;
    -webkit-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease
  }
  .popup-add-coins .game__item:active,
  .popup-add-coins .var__item:active {
    -webkit-transform: scale(.9);
    -ms-transform: scale(.9);
    transform: scale(.9)
  }
  .popup-add-coins .game__item:hover,
  .popup-add-coins .var__item:hover {
    background: -webkit-gradient(linear,left top,left bottom,from(rgba(46,49,69,0)),to(rgba(162,171,197,.1)));
    background: -o-linear-gradient(top,rgba(46,49,69,0) 0,rgba(162,171,197,.1) 100%);
    background: linear-gradient(180deg,rgba(46,49,69,0) 0,rgba(162,171,197,.1) 100%)
  }
  .popup-add-coins .game__item:last-child,
  .popup-add-coins .var__item:last-child {
    margin-right: 0
  }
  .popup-change-status .input,
  .popup-trade-link .input,
  .popup-trade-link-change .input {
    position: relative
  }
  .popup-change-status .input:after,
  .popup-trade-link .input:after{
    content: "";
    background: 0 0;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0
  }
  .popup-change-status .input img,
  .popup-trade-link .input img,
  .popup-trade-link-change .input img {
    position: absolute;
    display: block;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    right: 20px
  }
  .popup-change-status .popup__content,
  .popup-trade-link .popup__content,
  .popup-trade-link-change .popup__content {
    max-width: 442px
  }
  .popup-change-status h2,
  .popup-trade-link h2,
  .popup-trade-link-change h2 {
    text-align: center
  }
  .popup-change-status p,
  .popup-trade-link p,
  .popup-trade-link-change p {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #a2abc5
  }
  .popup-change-status .trade-link__input,
  .popup-trade-link .trade-link__input,
  .popup-trade-link-change .trade-link__input {
    height: 60px;
    background: #202232;
    border-radius: 8px;
    font-weight: 400;
    font-size: 13px;
    line-height: 14px;
    color: #fff;
    width: 100%;
    margin: 30px 0;
    outline: 0;
    text-align: center;
    border: 1px solid transparent;
    padding-left: 20px;
    padding-right: 20px;
  }
  .popup-trade-link-change .trade-link__input{
    padding-left: 20px;
    padding-right: 50px;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
  }
  .popup-change-status .trade-link__input_error,
  .popup-trade-link .trade-link__input_error{
    border-color: #DB4752;
  }
  .popup-change-status .trade-link__buttons,
  .popup-trade-link .trade-link__buttons,
  .popup-trade-link-change .trade-link__buttons {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
  }
  .popup-change-status .trade-link__buttons a,
  .popup-trade-link .trade-link__buttons a,
  .popup-trade-link-change .trade-link__buttons a {
    font-weight: 400;
    font-size: 12px;
    line-height: 11px;
    -webkit-text-decoration-line: underline;
    text-decoration-line: underline;
    color: #a2abc5;
    margin-left: 20px
  }
  .popup-trade-link-success .popup__content {
    max-width: 442px;
    background: #292d49
  }
  .popup-trade-link-success h2 {
    text-align: center;
    margin-bottom: 20px
  }
  .popup-trade-link-success p {
    font-weight: 500;
    font-size: 14px;
    line-height: 13px;
    text-align: center;
    color: #a2abc5
  }
  .popup-trade-link-success .success {
    background: rgba(63,84,194,.1);
    border-radius: 10px;
    width: 100px;
    height: 106px;
    padding: 12px;
    margin: 0 auto;
    margin-top: 20px
  }
  .popup-trade-link-success .success__inner {
    background: rgba(63,84,194,.5);
    -webkit-box-shadow: 0 6px 10px rgba(0,0,0,.08);
    box-shadow: 0 6px 10px rgba(0,0,0,.08);
    border-radius: 10px;
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
  }
  .popup-trade-link-success .success__inner span {
    font-weight: 400;
    font-size: 10px;
    line-height: 11px;
    color: #fff;
    margin-top: 20px
  }
  .popup-trade-good .popup__content ,
  .popup-trade-waiting .popup__content ,
  .popup-trade .popup__content {
    max-width: 442px
  }
  .popup-trade-good h2 ,
  .popup-trade-waiting h2 ,
  .popup-trade h2 {
    text-align: center;
    margin-bottom: 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
  }
  .popup-trade-good h2 img ,
  .popup-trade-waiting h2 img ,
  .popup-trade h2 img {
    margin-left: 11px
  }
  .popup-trade-good h2 .img ,
  .popup-trade-waiting h2 .img ,
  .popup-trade h2 .img {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
  }
  .popup-trade-good h2 .img:after ,
  .popup-trade-waiting h2 .img:after ,
  .popup-trade h2 .img:after {
    content: "";
    width: 32px;
    height: 32px;
    background: rgba(219,71,82,.2);
    -webkit-filter: blur(12.5px);
    filter: blur(12.5px);
    border-radius: 50%;
    position: absolute
  }
  .popup-trade-good h2.green .img:after ,
  .popup-trade-waiting h2.green .img:after ,
  .popup-trade h2.green .img:after {
    background: rgba(146,193,69,.2)
  }
  .popup-trade-good p ,
  .popup-trade-waiting p ,
  .popup-trade p {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #a2abc5
  }
  .popup-trade-good .trade__buttons ,
  .popup-trade-waiting .trade__buttons ,
  .popup-trade .trade__buttons {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-top: 30px
  }
  .popup-trade-good .trade__buttons .steam ,
  .popup-trade-waiting .trade__buttons .steam ,
  .popup-trade .trade__buttons .steam {
    background: -webkit-gradient(linear,left top,right top,from(rgba(35,123,255,.8)),to(rgba(56,132,247,.8)));
    background: -o-linear-gradient(left,rgba(35,123,255,.8) 0,rgba(56,132,247,.8) 100%);
    background: linear-gradient(90deg,rgba(35,123,255,.8) 0,rgba(56,132,247,.8) 100%);
    margin-left: 14px
  }
  .popup-trade-good .trade__buttons a,
  .popup-trade-waiting .trade__buttons a,
  .popup-trade-good .trade__buttons a,
  .popup-trade-waiting .trade__buttons a,
  .popup-trade .trade__buttons a,
  .popup-trade .trade__buttons button {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    height: 50px;
    padding-top: 0;
    padding-bottom: 0;
    width: 100%
  }
  .popup-trade .trade__buttons a {
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
  }
  .popup-trade-good .trade__buttons .mini ,
  .popup-trade-waiting .trade__buttons .mini ,
  .popup-trade .trade__buttons .mini {
    max-width: 160px;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
  }
  .popup-trade-good .trade__buttons span ,
  .popup-trade-waiting .trade__buttons span ,
  .popup-trade .trade__buttons span {
    font-weight: 700;
    font-size: 13px;
    line-height: 12px;
    text-transform: uppercase;
    color: #fff
  }
  .popup-trade-good .trade__buttons img ,
  .popup-trade-waiting .trade__buttons img ,
  .popup-trade .trade__buttons img {
    margin-left: 10px
  }
  .popup-trade__bot {
    background: #2e3145;
    border-radius: 8px;
    width: -moz-fit-content;
    width: fit-content;
    margin: 30px auto;
    padding: 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
  }
  .popup-trade__bot p {
    text-align: left;
    font-size: 13px
  }
  .popup-trade__bot .code {
    background: rgba(162,171,197,.07);
    border-radius: 8px;
    margin-top: 9px;
    padding: 14px;
    padding-top: 16px
  }
  .popup-trade__bot .bot__photo {
    width: 40px;
    height: 40px;
    margin-right: 10px
  }
  .popup-trade__bot .bot__photo img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover
  }
  .popup-pull h2 {
    text-align: center
  }
  .popup-pull hr {
    border: 1px solid rgba(162,171,197,.05);
    margin: 20px 0
  }
  .popup-pull__buttons {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
  }
  .popup-pull__buttons a,
  .popup-pull__buttons button {
    height: 50px;
    padding-top: 0;
    padding-bottom: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 100%
  }
  .popup-pull__buttons img {
    margin-left: 9px
  }
  .popup-pull__buttons .steam {
    background: -webkit-gradient(linear,left top,right top,from(rgba(35,123,255,.8)),to(rgba(56,132,247,.8)));
    background: -o-linear-gradient(left,rgba(35,123,255,.8) 0,rgba(56,132,247,.8) 100%);
    background: linear-gradient(90deg,rgba(35,123,255,.8) 0,rgba(56,132,247,.8) 100%);
    margin-left: 10px
  }
  .popup-pull__item {
    background: rgba(46,49,69,.7);
    border-radius: 8px;
    margin-bottom: 10px;
    -webkit-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease
  }
  .popup-pull__item_deleted {
    opacity: 0
  }
  .popup-pull__item .clothes__cool {
    position: absolute;
    top: 6px;
    left: 6px;
    width: 8px;
    height: 8px;
    border-radius: 50%
  }
  .popup-pull__item .item__top {
    border-bottom: 1px solid rgba(162,171,197,.05);
    padding: 10px 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative
  }
  .popup-pull__item .item__bottom {
    padding: 14px 20px;
    padding-bottom: 0
  }
  .popup-pull__item .item__repeat {
    background: rgba(162,171,197,.05);
    border-radius: 8px;
    height: 40px;
    padding: 0 14px;
    display: -webkit-box;
    display: -ms-flexbox;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    display: none;
    text-transform: none
  }
  .popup-pull__item .item__repeat_active {
    margin-left: auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
  }
  .popup-pull__item .item__repeat span {
    font-weight: 500;
    font-size: 12px;
    line-height: 11px;
    color: #fff;
    margin-left: 10px
  }
  .popup-pull__item .item__repeat_active + .item__delete {
    margin-left: 8px
  }
  .popup-pull__item .item__delete {
    background: rgba(162,171,197,.05);
    border-radius: 8px;
    width: 40px;
    height: 40px;
    padding: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    border: none;
    margin-left: auto;
    -webkit-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease;
    cursor: pointer
  }
  .popup-pull__item .item__delete img {
    opacity: .5;
    -webkit-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease
  }
  .popup-pull__item .item__delete:hover {
    background: rgba(162,171,197,.1)
  }
  .popup-pull__item .item__delete:hover img {
    opacity: 1
  }
  .popup-pull__item .item__name {
    font-weight: 500;
    font-size: 13px;
    line-height: 12px;
    color: #a2abc5;
    margin-right: 15px
  }
  .popup-pull__item .item__photo {
    width: 40px;
    height: 40px;
    margin-right: 10px
  }
  .popup-pull__item .item__photo img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover
  }
  .popup-pull__item .item__skins {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    overflow: auto;
    padding-bottom: 14px
  }
  .popup-pull__item .item__count {
    background: rgba(119,119,139,.2);
    -webkit-backdrop-filter: blur(2px);
    backdrop-filter: blur(2px);
    border-radius: 5px;
    width: 25px;
    height: 25px;
    position: absolute;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    top: 0;
    right: 0;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    color: rgba(255,255,255,.5)
  }
  .popup-pull__item .item__skin {
    background: rgba(162,171,197,.06);
    border-radius: 8px;
    min-width: 60px;
    width: 60px;
    height: 60px;
    margin-right: 6px;
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
  }
  .popup-pull__item .item__skin img {
    width: 36px;
    height: 36px;
    -o-object-fit: contain;
    object-fit: contain
  }
  .popup-pull__block {
    max-height: 464px;
    height: 100%;
    overflow: auto
  }
  .popup-pull-search .popup__content {
    height: 271px;
    overflow: hidden
  }
  .popup-pull-search h2 {
    text-align: center;
    margin-bottom: 0
  }
  .popup-pull-search__text {
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
  }
  .popup-pull-search__text .load {
    width: -moz-fit-content;
    width: fit-content
  }
  .popup-pull-search__text p {
    font-weight: 500;
    font-size: 14px;
    line-height: 13px;
    color: #a2abc5;
    margin-right: 10px
  }
  .popup-entry-clothes,
  .popup-new-room {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
  }
  .popup-entry-clothes .item__check,
  .popup-new-room .item__check {
    display: none
  }
  .popup-entry-clothes__zone,
  .popup-new-room__zone {
    border: 1px dashed rgba(162,171,197,.15);
    border-radius: 10px;
    min-height: 88px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 30px
  }
  .popup-entry-clothes__zone ul,
  .popup-new-room__zone ul {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    overflow: auto
  }
  .popup-entry-clothes__zone li.popup-new-room__item,
  .popup-new-room__zone li.popup-new-room__item {
    min-width: 60px;
    width: 60px;
    height: 60px;
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 0;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    background: rgba(162,171,197,.06);
    border-radius: 8px;
    -webkit-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease;
    margin: 0 3px
  }
  .popup-entry-clothes__zone li.popup-new-room__item:hover,
  .popup-new-room__zone li.popup-new-room__item:hover {
    background: rgba(162,171,197,.15)
  }
  .popup-entry-clothes__zone li.popup-new-room__item:hover .li__delete,
  .popup-new-room__zone li.popup-new-room__item:hover .li__delete {
    opacity: 1
  }
  .popup-entry-clothes__zone li.popup-new-room__item .li__delete,
  .popup-new-room__zone li.popup-new-room__item .li__delete {
    background: rgba(119,119,139,.3);
    -webkit-backdrop-filter: blur(2px);
    backdrop-filter: blur(2px);
    border-radius: 5px 8px 5px 5px;
    cursor: pointer;
    -webkit-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease;
    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    height: 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    opacity: 0
  }
  .popup-entry-clothes__zone li.popup-new-room__item .li__delete img,
  .popup-new-room__zone li.popup-new-room__item .li__delete img {
    width: 7px;
    height: 7px
  }
  .popup-entry-clothes__zone li.popup-new-room__item .item__photo,
  .popup-new-room__zone li.popup-new-room__item .item__photo {
    width: 36px;
    height: 36px;
    margin: 0
  }
  .popup-entry-clothes__zone li.popup-new-room__item .item__photo img,
  .popup-new-room__zone li.popup-new-room__item .item__photo img {
    width: 100%;
    height: 100%;
    -o-object-fit: contain;
    object-fit: contain
  }
  .popup-entry-clothes__zone li.popup-new-room__item .item__price,
  .popup-new-room__zone li.popup-new-room__item .item__price {
    display: none
  }
  .popup-entry-clothes__zone li.popup-new-room__item .clothes__cool,
  .popup-new-room__zone li.popup-new-room__item .clothes__cool {
    width: 8px;
    height: 8px;
    top: 6px;
    left: 6px;
    position: absolute;
    border-radius: 50%
  }
  .popup-entry-clothes__zone p,
  .popup-new-room__zone p {
    font-weight: 500;
    font-size: 14px;
    line-height: 13px;
    color: rgba(162,171,197,.5)
  }
  .popup-entry-clothes__list,
  .popup-new-room__list {
    display: -ms-grid;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap: 6px;
    margin-top: 20px;
    max-height: 335px;
    overflow: auto;
    min-height: 200px;
  }
  .popup-entry-clothes__item,
  .popup-new-room__item {
    /*background: rgba(162,171,197,.06);*/
    background: #2D3143;
    border-radius: 8px;
    padding-top: 20px;
    padding-bottom: 15px;
    -webkit-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease;
    position: relative;
    cursor: pointer;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 100px
  }
  .popup-entry-clothes__item .li__delete,
  .popup-new-room__item .li__delete {
    display: none
  }
  .popup-entry-clothes__item .item__check,
  .popup-new-room__item .item__check {
    position: absolute;
    top: 0;
    right: 0;
    opacity: 0;
    -webkit-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease
  }
  .popup-entry-clothes__item .clothes__cool,
  .popup-new-room__item .clothes__cool {
    position: absolute;
    top: 8px;
    left: 8px;
    width: 10px;
    height: 10px;
    border-radius: 50%
  }
  .popup-entry-clothes__item_active,
  .popup-new-room__item_active {
    background: rgba(162,171,197,.15)
  }
  .popup-entry-clothes__item_active .item__check,
  .popup-new-room__item_active .item__check {
    opacity: 1
  }
  .popup-entry-clothes__item:active,
  .popup-new-room__item:active {
    -webkit-transform: scale(.9);
    -ms-transform: scale(.9);
    transform: scale(.9)
  }
  .popup-entry-clothes__item:hover,
  .popup-new-room__item:hover {
    background: rgba(162,171,197,.15)
  }
  .popup-entry-clothes__item .item__photo,
  .popup-new-room__item .item__photo {
    width: 60px;
    height: 60px;
    margin: 0 auto;
    margin-bottom: 20px
  }
  .popup-entry-clothes__item .item__photo img,
  .popup-new-room__item .item__photo img {
    width: 100%;
    height: 100%;
    -o-object-fit: contain;
    object-fit: contain
  }
  .popup-entry-clothes__item .item__price,
  .popup-new-room__item .item__price {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
  }
  .popup-entry-clothes__item .item__price img,
  .popup-new-room__item .item__price img {
    width: 17px
  }
  .popup-entry-clothes__item .item__price span,
  .popup-new-room__item .item__price span {
    font-weight: 700;
    font-size: 12px;
    line-height: 11px;
    color: #fff;
    margin-left: 6px
  }
  .popup-entry-clothes .select,
  .popup-new-room .select {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
    padding-right: 10px;
    margin-left: auto
  }
  .popup-entry-clothes .select:after,
  .popup-new-room .select:after {
    content: "";
    display: block;
    background: url(../images/arr-td.svg) no-repeat;
    background-size: contain;
    width: 5px;
    height: 8px;
    position: absolute;
    top: 50%;
    right: 0;
    z-index: 0;
    -webkit-transform: translateY(-50%) rotate(90deg);
    -ms-transform: translateY(-50%) rotate(90deg);
    transform: translateY(-50%) rotate(90deg)
  }
  .popup-entry-clothes select,
  .popup-new-room select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    font-weight: 500;
    font-size: 13px;
    line-height: 14px;
    color: rgba(162,171,197,.8);
    background: 0 0;
    outline: 0;
    border: none;
    position: relative;
    z-index: 1;
    padding-right: 20px;
    margin-right: -20px
  }
  .popup-entry-clothes__sort,
  .popup-new-room__sort {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-top: 1px solid rgba(162,171,197,.05);
    padding-top: 20px
  }
  .popup-entry-clothes__sort span,
  .popup-new-room__sort span {
    font-weight: 400;
    font-size: 13px;
    line-height: 14px;
    color: rgba(162,171,197,.5)
  }
  .popup-entry-clothes h2,
  .popup-new-room h2 {
    margin-bottom: 20px;
    text-align: center
  }
  .popup-entry-clothes .popup__content,
  .popup-new-room .popup__content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    max-width: 1182px;
    padding: 0;
    background: 0 0;
    -webkit-box-shadow: none;
    box-shadow: none
  }
  .popup-entry-clothes .popup__content-item,
  .popup-new-room .popup__content-item {
    display: none
  }
  .popup-entry-clothes .popup__content-item_active,
  .popup-new-room .popup__content-item_active {
    display: block
  }
  .popup-entry-clothes .popup__content_lft,
  .popup-entry-clothes .popup__content_rht,
  .popup-new-room .popup__content_lft,
  .popup-new-room .popup__content_rht {
    margin-left: 8px;
    background: #26293b;
    -webkit-box-shadow: 0 4px 60px rgba(0,0,0,.2);
    box-shadow: 0 4px 60px rgba(0,0,0,.2);
    border-radius: 10px;
    padding: 30px 20px;
    width: 100%;
    max-width: 586px;
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 100vh;
    position: relative
  }
  .popup-entry-clothes .popup__content_rht,
  .popup-new-room .popup__content_rht {
    display: none
  }
  .popup-entry-clothes .popup__content_rht h2,
  .popup-new-room .popup__content_rht h2 {
    margin-bottom: 30px
  }
  .popup-entry-clothes form,
  .popup-new-room form {
    margin-top: 25px
  }
  .popup-entry-clothes button,
  .popup-new-room button {
    margin: 0 auto;
    margin-top: 20px
  }
  .popup-entry-clothes .inputs,
  .popup-new-room .inputs {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
  }
  .popup-entry-clothes .inputs__item,
  .popup-new-room .inputs__item {
    width: 100%
  }
  .popup-entry-clothes .inputs__item p,
  .popup-new-room .inputs__item p {
    font-weight: 500;
    font-size: 12px;
    line-height: 11px;
    color: #a2abc5;
    margin-bottom: 10px
  }
  .popup-entry-clothes .inputs__item .input,
  .popup-new-room .inputs__item .input {
    background: #2b2e42;
    border-radius: 8px;
    height: 70px;
    padding: 0 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
  }
  .popup-entry-clothes .inputs__item .input__photo img,
  .popup-new-room .inputs__item .input__photo img {
    width: 40px;
    height: 40px;
    -o-object-fit: cover;
    object-fit: cover;
    border-radius: 10px;
    display: block
  }
  .popup-entry-clothes .inputs__item .input__sum,
  .popup-new-room .inputs__item .input__sum {
    font-weight: 700;
    font-size: 16px;
    line-height: 15px;
    color: #fff;
    margin-left: 6px
  }
  .popup-entry-clothes .inputs__item .input__coins,
  .popup-new-room .inputs__item .input__coins {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-left: auto
  }
  .popup-entry-clothes .inputs__item .input__coins span,
  .popup-new-room .inputs__item .input__coins span {
    font-weight: 700;
    font-size: 16px;
    line-height: 15px;
    color: #fff;
    margin-left: 6px
  }
  .popup-entry-clothes .inputs__item input,
  .popup-new-room .inputs__item input {
    padding-left: 6px;
    font-weight: 700;
    font-size: 16px;
    line-height: 15px;
    color: #fff;
    border: none;
    height: 100%;
    outline: 0;
    background: 0 0
  }
  .popup-entry-clothes .inputs__item input::-webkit-input-placeholder,
  .popup-new-room .inputs__item input::-webkit-input-placeholder {
    color: rgba(162,171,197,.5)
  }
  .popup-entry-clothes .inputs__item input::-moz-placeholder,
  .popup-new-room .inputs__item input::-moz-placeholder {
    color: rgba(162,171,197,.5)
  }
  .popup-entry-clothes .inputs__item input:-ms-input-placeholder,
  .popup-new-room .inputs__item input:-ms-input-placeholder {
    color: rgba(162,171,197,.5)
  }
  .popup-entry-clothes .inputs__item input::-ms-input-placeholder,
  .popup-new-room .inputs__item input::-ms-input-placeholder {
    color: rgba(162,171,197,.5)
  }
  .popup-entry-clothes .inputs__item input::placeholder,
  .popup-new-room .inputs__item input::placeholder {
    color: rgba(162,171,197,.5)
  }
  .popup-entry-clothes .inputs__item-sum,
  .popup-new-room .inputs__item-sum {
    margin-right: 10px
  }
  .popup-entry-clothes .inputs__item-have .input,
  .popup-new-room .inputs__item-have .input {
    background: #202232
  }
  .popup-entry-clothes .inputs__item-have span,
  .popup-new-room .inputs__item-have span {
    font-weight: 700;
    font-size: 16px;
    line-height: 15px;
    color: #fff;
    margin-left: 6px
  }
  .popup-entry-clothes__switcher ul,
  .popup-new-room__switcher ul {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-bottom: 1px solid rgba(162,171,197,.05)
  }
  .popup-entry-clothes__switcher li,
  .popup-new-room__switcher li {
    width: 100%;
    text-align: center;
    position: relative
  }
  .popup-entry-clothes__switcher li:after,
  .popup-new-room__switcher li:after {
    content: "";
    width: 100%;
    position: absolute;
    bottom: -2px;
    left: 0;
    height: 3px;
    background: #196bd8;
    opacity: 0;
    border-radius: 10px
  }
  .popup-entry-clothes__switcher li.li_active a,
  .popup-new-room__switcher li.li_active a {
    color: #fff
  }
  .popup-entry-clothes__switcher li.li_active:after,
  .popup-new-room__switcher li.li_active:after {
    opacity: 1
  }
  .popup-entry-clothes__switcher a,
  .popup-new-room__switcher a {
    font-weight: 500;
    font-size: 16px;
    line-height: 15px;
    padding-bottom: 24px;
    padding-top: 20px;
    display: block;
    color: rgba(162,171,197,.5);
    -webkit-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease
  }
  .popup-entry-clothes__switcher a:hover,
  .popup-new-room__switcher a:hover {
    color: #fff
  }
  .popup-entry-clothes .popup__content_rht {
    display: block
  }
  .popup-entry-clothes button {
    margin-top: auto
  }
  .popup-entry-clothes .popup__content-item,
  .popup-entry-clothes form {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    height: 90%
  }
  .popup-entry-clothes .inputs__item-sum .input {
    background: #202232
  }
  .popup-entry-coins h2 {
    margin-bottom: 20px;
    text-align: center
  }
  .popup-entry-coins .subtitle {
    font-weight: 500;
    font-size: 14px;
    line-height: 13px;
    text-align: center;
    color: #a2abc5;
    text-align: center
  }
  .popup-entry-coins .subtitle span {
    color: #fff
  }
  .popup-entry-coins a:hover {
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
    transform: scale(1.05)
  }
  .popup-entry-coins a:active {
    -webkit-transform: scale(.95);
    -ms-transform: scale(.95);
    transform: scale(.95)
  }
  .popup-entry-coins a {
    background: rgba(85,98,221,.8);
    border-radius: 8px;
    font-weight: 700;
    font-size: 13px;
    line-height: 12px;
    text-transform: uppercase;
    color: #fff;
    padding: 19px 22px;
    border: none;
    -webkit-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease;
    width: fit-content;
    cursor: pointer;
    display: block
  }
  .popup-entry-coins a,
  .popup-entry-coins button {
    margin: 0 auto;
    margin-top: 30px
  }
  .popup-entry-coins__info {
    background: rgba(245,173,87,.14);
    border-radius: 8px;
    padding: 20px 28px 24px;
    width: -moz-fit-content;
    width: fit-content;
    margin: 30px auto
  }
  .popup-entry-coins__info p {
    font-weight: 500;
    font-size: 14px;
    line-height: 13px;
    color: #e8a14e;
    margin-bottom: 20px
  }
  .popup-entry-coins__info .info__coins {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
  }
  
  //.inputs__item.inputs__item-sum .input {
  //  position: relative;
  //}
  //.inputs__item.inputs__item-sum .input input {
  //  //color: transparent;
  //}
  //.inputs__item.inputs__item-sum .input span {
  //  position: absolute;
  //  right: 40px;
  //  pointer-events: none;
  //  font-weight: bold;
  //}
    
  
  @media screen and (max-width: 1024px) {
    .popup-new-room .popup__content {
      flex-direction: column;
      align-items: center;
    }
  }
  @media screen and (max-width: 650px) {
    .popup-new-room .inputs {
      flex-direction: column;
    }
    .popup-new-room .inputs__item {
      margin-top: 10px;
    }
    
    .popup-add-coins-balance .balance__sum {
      padding: 8px;
    }
    .balance__sum input {
      width: 80px;
      font-size: 14px;
    }
    
    .popup-add-coins-balance .balance__sum span {
      font-size: 14px;
    }
    
    .popup-add-coins .var__item {
      padding: 10px;
    }
  }




  .hash-info input,
  .id-info input{
    width: 0;
    opacity: 0;
    visibility: hidden;
    position: absolute;
  }
  .hash-info .copy:hover img,
  .id-info .copy:hover img{
    -webkit-transform: scale(1.05);
    -moz-transform: scale(1.05);
    -ms-transform: scale(1.05);
    -o-transform: scale(1.05);
    transform: scale(1.05);
  }
  .hash-info .copy:active img,
  .id-info .copy:active img{
    -webkit-transform: scale(.9);
    -moz-transform: scale(.9);
    -ms-transform: scale(.9);
    -o-transform: scale(.9);
    transform: scale(.9);
  }
  .hash-info .copy,
  .id-info .copy{
    position: relative;
  }
  .hash-info .copy img,
  .id-info .copy img{
    width: 19px;
    margin-left: auto;
    cursor: pointer;
    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    -ms-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease;
  }
  .hash-info .copy span,
  .id-info .copy span{
    position: absolute;
    white-space: nowrap;
    bottom: 130%;
    right: 0%;
    font-size: 12px;
    background: #3a3d4f;
    padding: 10px 20px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    opacity: 0;
    visibility: hidden;
    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    -ms-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease;
  }
  .hash-info .copy.copied span,
  .id-info .copy.copied span{
    opacity: 1;
    visibility: visible;
  }

  .hash-info,
  .id-info{
    display: flex;
    justify-content: space-between;
  }


  .popup-fair-game__border ul li span{
    margin-left: 4px;
    white-space: nowrap;
    max-width: 500px;
    overflow: auto;
  }
  .popup-fair-game__border ul li p{
    display: flex;
    width: 94%;
  }


  .popup-fair-game__border {
    padding: 20px;
    border: 1px dashed rgba(162,171,197,.15);
    border-radius: 10px;
    margin-bottom: 30px
  }
  .popup-fair-game__border h3 {
    font-weight: 400;
    font-size: 13px;
    line-height: 14px;
    color: #fff;
    margin-bottom: 14px
  }
  .popup-fair-game__text p span,
  .popup-fair-game__border p {
    color: #f5ad57
  }
  .popup-fair-game__border span {
    color: #fff
  }
  
`
