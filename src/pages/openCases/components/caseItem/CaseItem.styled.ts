import styled from "styled-components";

export const CaseItemStyled = styled.li`

  border-radius: 8px;
  background: rgba(162, 171, 197, 0.06);
  height: 140px;
  padding: 8px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .item__name {
    position: absolute;
    border-radius: 10px;
    background: rgba(51, 55, 75, 0.80);
    box-shadow: 0 7px 15px 0 rgba(0, 0, 0, 0.10);
    backdrop-filter: blur(5px);
    padding: 10px 15px;
    color: #A2ABC5;
    font-size: 12px;
    font-weight: 400;
    bottom: 100%;
    
    opacity: 0;
    visibility: hidden;
    -webkit-transition: all .3s ease;-moz-transition: all .3s ease;-ms-transition: all .3s ease;-o-transition: all .3s ease;transition: all .3s ease;
  }
  
  &:hover {
    .item__name {
      opacity: 1;
      visibility: visible;
    }
  }

  .item__chance {
    color: var(--IconsActive, #A2ABC5);
    font-size: 12px;
    font-weight: 500;
  }

  .item__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .item__price {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5px;

    span {
      color: #FFF;
      font-size: 14px;
      font-weight: 700;
      margin-left: 10px;
    }
  }

  .item__cool {
    width: 10px;
    height: 10px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    display: block;

    &_F5AD57 {
      background: #F5AD57;
    }
  }

  .item__photo {
    margin-top: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;

    img {
      width: 70px;
      height: 70px;
      object-fit: contain;
    }
  }
`
