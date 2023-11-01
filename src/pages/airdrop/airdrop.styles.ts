import styled from "styled-components";

export const AirdropStyled = styled.section`

  max-width: calc(100% - 114px - 470px);
  height: calc(100vh - 96px);
  overflow: hidden;
  -webkit-border-radius: 10px;-moz-border-radius: 10px;border-radius: 10px;
  position: relative;
  
  .map__photo {
    width: 1400px;
    height: 1440px;
    cursor: grab;
    &:active {
      cursor: grabbing;
    }
    img {
      width: 100%;
      height: 100%;
      opacity: .9;
      user-drag: none;
      -webkit-user-drag: none;
      user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
    }
  }
  
  .bags {
    li {
      position: absolute;
      top: 240px;
      left: 150px;

      width: 18px;
      height: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      -webkit-border-radius: 50%;-moz-border-radius: 50%;border-radius: 50%;
      background: #f5ad57;
      box-shadow: 0 2px 9px 1px rgba(29,29,29,.4);
      
      &:after {
        content: "";
        background: #fff;
        border-radius: 50%;
        display: block;
        height: 8px;
        width: 8px;
      }
    }
  }
    
`
