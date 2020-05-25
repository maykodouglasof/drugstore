import styled from "styled-components";

export const Container = styled.div`
 margin: 40px auto 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  width: 500px;
  background: #fff;
  padding: 20px;
  display: flex;
  border-radius: 4px;
  flex-direction: column;
  align-items: center;
  p {
    color: #ff0000;
  margin-bottom: 10px;
    font-size: 16px;
  
  }
strong {
  color: rgb(74, 74, 74);

    font-size: 24px;
  margin-bottom: 30px;
}
  input {
    height: 56px;
    margin-bottom: 15px;
    padding: 0 20px;
    color: #777;
    font-size: 16px;
    width: 90%;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  button {
    color: #fff;
    font-size: 16px;
    background: #005aad;
    height: 56px;
    border: 0;
    border-radius: 5px;
    width: 90%;
  }
  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }
  a {
    font-size: 18px;
    font-weight: bold;
    color: rgb(74, 74, 74);
    text-decoration: none;
  }
`;
