import styled from "styled-components";

export const AddItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  align-items: center;
  margin: 0 auto;
  width: 79%;
  height: 80vh;
  padding: 10px;
  select {
    margin: 0 5px 5px;
    padding: 10px;
    cursor: pointer;
    option {
      cursor: pointer;
    }
  }
`;

export const AddItemsForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
  padding: 0 11px;
  /* outline: none; */
  /* border: none; */
  button {
    padding: 10px;
    width: fit-content;
    cursor: pointer;
    align-self: center;
    font-size: 16px;
  }
`;
export const Input = styled.input`
  padding: 10px;
  margin: 10px;
  outline: none;
  border: none;
  background-color: #eee;
  border-radius: 25px;
`;
