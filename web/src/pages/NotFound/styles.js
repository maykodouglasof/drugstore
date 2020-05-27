import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 40px auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 500px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25px;
  h1,
  h2 {
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 12px;
    color: #333;
    align-items: center;
  }
  .back-link {
    display: flex;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
    color: #333;
    font-size: 24px;
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.2s;
  }
  .back-link svg {
    margin-right: 8px;
  }
  .back-link:hover {
    opacity: 0.8;
  }
`;
