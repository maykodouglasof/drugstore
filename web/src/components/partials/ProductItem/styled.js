import styled from "styled-components";
import { darken } from "polished";

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  border: 1px solid #fff;
  margin: 10px;
  text-decoration: none;
  transition: all ease 0.2s;
  background: #fff;
  padding: 20px;
  &:hover {
    background-color: #eee;
  }
  a {
    .itemImage img {
      align-self: center;
      max-width: 250px;
    }
    .itemName {
    font-weight: bold;
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 6px;
    }
    .itemPrice {
        flex: 1;
        color: #333;
        font-weight: bold;
        margin: 8px;
    }
  }
  button {
    background: #005aad;
    color: #fff;
    border: 0;
    border-radius: 4px;
    overflow: hidden;
    margin-top: auto;
    display: flex;
    align-items: center;
    &:hover {
      background: ${darken(0.03, "#005aad")};
    }
    div {
      display: flex;
      align-items: center;
      padding: 12px;
      background: rgba(0, 0, 0, 0.1);
      svg {
        margin-right: 5px;
      }
    }
    span {
      font-size: 12px;
      font-weight: bold;
      margin: 6px 0 0 14px;
    }
  }
`;
