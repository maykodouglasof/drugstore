import styled from "styled-components";
import { lighten } from "polished";

export const HeaderArea = styled.div`
  background: rgb(255, 255, 255);
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-color: rgb(229, 229, 229);
  width: 100%;
  max-width: 1366px;
  height: 80px;
  padding: 0 30px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    height: 60px;
    padding: 0 20px;
  }
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
  display: flex;
  align-items: center;
  button {
    background: #005aad;
    border: 0;
    border-radius: 4px;
    padding: 10px;
    margin: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background: ${lighten(0.05, "#005aad")};
      > svg {
        color: #005a;
      }
    }
  }
  a {
    display: flex;
    align-items: center;
    color: #4a4a4a;
    font-weight: bold;
    text-decoration: none;
    margin: 18px;
    div {
      margin-right: 16px;
      text-align: right;
      display: flex;
      flex-direction: column;
      @media (max-width: 768px) {
        display: none;
      }
      strong {
        color: #87868b;
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
`;
