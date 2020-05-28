import styled from "styled-components";

export const SearchArea = styled.div`
  background-color: #005aad;
  border-bottom: 1px solid #ccc;
  padding: 40px 0;
  .searchBox {
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
    flex-direction: row;
    display: flex;
    flex-wrap: wrap;
    max-width: 1152px;
    overflow-x: hidden;
    padding-bottom: 0px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin-left: -24px;
  }
  .seeAllLink {
    color: #000;
    text-decoration: none;
    font-weight: bold;
    display: inline-block;
    margin-top: 10px;
  }
`;
