import styled from "styled-components";
import { darken } from "polished";

export const SearchArea = styled.div`
  background-color: #005aad;
  border-bottom: 1px solid #ccc;
  padding: 40px 0;
  .searchBox {
    margin: 20px;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    height: 60px;
    border-radius: 4px;
    background-color: #fff;
    border: 0.5px solid #d2d2d2;
    align-items: center;
    position: relative;
    form {
      flex: 1;
      display: flex;
      input {
        width: 100%;
        padding: 16px 24px;
        border-radius: 4px;
        border: none;
        font-size: 20px;
        outline: none;
        color: #4a4a4a;
      }
      button {
        border: none;
        cursor: pointer;
        background-color: transparent;
        text-transform: none;
        margin: 10px;
        svg {
          color: #005aad;
        }
      }
      button:hover {
        background-color: #005aad;
        svg {
          color: #fff;
        }
      }
    }
  }
`;

export const PageArea = styled.div`
  .list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    list-style: none;
    margin: 10px;
  }
  .seeAllLink {
    color: #000;
    text-decoration: none;
    font-weight: bold;
    display: inline-block;
    margin-top: 10px;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #fff;
  text-decoration: none;
  transition: all ease 0.2s;
  background: #fff;
  &:hover {
    background-color: #eee;
  }
  .itemDelete {
    position: absolute;
    border: 0;
    background-color: transparent;
    padding: 5px;
    &:hover {
      padding: 5px;
      color: #005aad;
    }
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
  .itemCart {
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

