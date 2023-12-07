import styled from "styled-components";

export const BattleTopStyled = styled.div`

  position: relative;
  overflow: hidden;
  border-radius: 10px;
  background: #202232;
  width: 100%;

  &:after {
    content: "";
    background: linear-gradient(270deg, #202232 0%, #202232 35.42%, rgba(32, 34, 50, 0.75) 63.02%, rgba(32, 34, 50, 0.50) 83.33%, rgba(32, 34, 50, 0.00) 100%);
    top: 0;
    bottom: 0;
    right: 0;
    width: 125px;
    height: 100%;
    display: block;
    position: absolute;
    z-index: 2;
  }

  ul {
    display: flex;
    align-items: center;
    padding: 10px;
    position: relative;
    overflow: hidden;
  }
  
  @media screen and (max-width: 576px) {
    &:after {
      width: 70px;
    }
  }
  
`
