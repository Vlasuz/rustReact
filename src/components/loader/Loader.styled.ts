import styled from "styled-components";

export const LoaderStyled = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #191a29;
  z-index: 999;
  -webkit-transition: all .3s ease;-moz-transition: all .3s ease;-ms-transition: all .3s ease;-o-transition: all .3s ease;transition: all .3s ease;
  
  opacity: 1;
  visibility: visible;
  
  &.preloader_hide {
    opacity: 0;
    visibility: hidden;
  }
`
