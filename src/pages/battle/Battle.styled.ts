import styled from "styled-components";

export const BattleStyled = styled.section`

  max-width: calc(100% - 114px - 470px);
  
  .top {
    display: flex;
    align-items: center;
  }
  
  .create-battle {
    border-radius: 10px;
    background: #202232;
    padding: 10px;
    min-width: 225px;
    height: 90px;
    margin-left: 10px;
    
    a,
    button {
      border-radius: 10px;
      background: rgba(146, 193, 69, 0.60);
      color: #FFF;
      text-align: center;
      font-size: 14px;
      font-weight: 500;
      text-transform: capitalize;
      border: none;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all .3s ease;
      
      &:hover {
        -webkit-transform: scale(1.05);-moz-transform: scale(1.05);-ms-transform: scale(1.05);-o-transform: scale(1.05);transform: scale(1.05);
      }
      &:active {
        -webkit-transform: scale(1);-moz-transform: scale(1);-ms-transform: scale(1);-o-transform: scale(1);transform: scale(1);
      }
    }
  }
  
  .list {
    border-radius: 10px;
    background: #202232;
    padding: 10px;
    margin-top: 14px;
    height: calc(100% - 104px);
  }
  
`
