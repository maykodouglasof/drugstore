import styled from "styled-components";

export const Container = styled.div`
  background: #ffffff;
  width: 100%;
  height: 80px;
  padding: 0 30px;
  position: ${(props) => props.fixed && "fixed"};
  z-index: 999;
  display: flex;
  @media (max-width: 768px) {
    height: 60px;
    padding: 0 20px;
  }
`;

export const Content = styled.div`
  max-width: 1366px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftContent = styled.div`
  img {
    width: 150px;
  }
  @media (max-width: 768px) {
    img {
      width: 150px;
    }
  }
`;

export const BackToPreviousPage = styled.div`
  margin-left: 56px;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    margin-left: 24px;
  }
  span {
    font-size: 15px;
    margin-left: 8px;
    font-weight: bold;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const RightContent = styled.div`
  display: flex;
  align-items: center;
  button {
    background: #005aad;
    border: 0;
    border-radius: 4px;
    padding: 10px;
    margin-right: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  button:hover {
    filter: brightness(90%);
  }
  a {
    display: flex;
    align-items: center;
    div {
      margin-right: 16px;
      text-align: right;
      display: flex;
      flex-direction: column;
      @media (max-width: 768px) {
        display: none;
      }
      strong {
        color: #19181f;
        margin-bottom: 6px;
      }
      small {
        color: #87868b;
        font-size: 12px;
      }
    }
    img {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      border: 3px solid #005aad;
      @media (max-width: 768px) {
        width: 36px;
        height: 36px;
      }
    }
  }
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  ul {
    display: flex;
    align-items: center;
    height: 40px;
  }
  li {
    margin-left: 20px;
    margin-right: 20px;
    a,
    button {
      border: 0;
      background: none;
      color: #000;
      font-size: 14px;
      text-decoration: none;
      cursor: pointer;
      outline: 0;
      &:hover {
        color: #999;
      }
      &.button {
        background-color: #ff8100;
        border-radius: 4px;
        color: #fff;
        padding: 5px 10px;
      }
      &.button:hover {
        background-color: #e57706;
      }
    }
  }
`;
