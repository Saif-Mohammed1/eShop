import styled from "styled-components";

export const SignUpContainer = styled.div`
  display: flex;
  height: 89vh;
  background-color: #6322ba;
  justify-content: center;
  padding: 70px;
  margin-top: -26px;
  form {
    display: flex;
    flex-direction: column;
    width: 300px;
    h1 {
      text-transform: uppercase;
      text-align: center;
    }
    button {
      width: fit-content;
      padding: 7px;
      align-self: center;
      margin: 10px 0;
      cursor: pointer;
      background-color: #4285f4;
      outline: none;
      border: none;
      border-radius: 12px;
      color: white;
      font-weight: bold;
      &:hover {
        background-color: #1b222e;
      }
    }
  }
  label {
    margin: 8px 0;
  }
  button {
    width: fit-content;
    padding: 5px;
    align-self: center;
    margin: 10px 0;
    cursor: pointer;
    text-transform: uppercase;
  }
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 3px;
  border: none;
  outline: none;
`;
