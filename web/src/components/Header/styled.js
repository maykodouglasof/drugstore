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

export const RightContent = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  ul,
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
        background-color: #005aad;
        border-radius: 4px;
        color: #fff;
        padding: 5px 10px;
      }
      &.button:hover {
        background-color: #005aad;
      }
    }
  }
`;
