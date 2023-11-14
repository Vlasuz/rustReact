import styled from "styled-components";

export const TechnicalStyled = styled.main`

  background: #202232;
  border-radius: 10px;
  padding: 60px 20px;
  margin: auto;
  width: 100%;
  text-align: center;
  max-width: 1000px;

  a {
    font-weight: 700;
    font-size: 13px;
    line-height: 12px;
    text-transform: uppercase;
    color: var(--cFF);
    padding: 20px 22px;
    background: rgba(85, 98, 221, 0.8);
    border-radius: 8px;
    display: block;
    margin: 0 auto;
    width: fit-content;
    transition: all .3s ease;

    &:hover {
      background: #353CA9;
    }
  }

  img {
    display: block;
  }

  .ico {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: fit-content;
    margin: 0 auto;
    margin-bottom: 30px;

    &:after {
      content: '';
      background: rgba(219, 71, 82, 0.2);
      filter: blur(12.5px);
      position: absolute;
      width: 34px;
      height: 34px;
      border-radius: 50%;
    }
  }

  h1 {
    font-weight: 700;
    font-size: 20px;
    line-height: 19px;
    color: var(--cFF);
    margin-bottom: 30px;
  }

  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    color: var(--cFF);
    margin-bottom: 40px;
  }

  time {
    font-weight: 700;
    font-size: 36px;
    line-height: 34px;
    color: var(--cFF);

    .sec {
      color: #61667C;
    }
  }


`
