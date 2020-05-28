import styled from "styled-components";

export const Container = styled.div`
  margin: 20px auto 0;
  width: 90%;
  background: #fff;
  padding: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 15px;
  strong {
    font-size: 22px;
    line-height: 30px;
    margin-bottom: 30px;
    color: #444;
  }
  label {
    font-size: 14px;
    color: #444;
    font-weight: bold;
    margin-bottom: 8px;
  }
  input {
    height: 46px;
    margin-bottom: 15px;
    padding: 20px;
    color: #777;
    font-size: 15px;
    border: 1px solid #ddd;
  }
  div.actions {
    display: flex;
    margin-top: 15px;
    width: 100%;
    justify-content: space-between;
    button {
      color: #ffffff;
      font-size: 16px;
      background: #005aad;
      height: 56px;
      border: 0;
      border-radius: 5px;
      padding: 0 30px;
      &.cancel {
        background: #222222;
      }
    }
    button:hover {
      filter: brightness(90%);
    }
  }
`;
