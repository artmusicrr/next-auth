import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  //background: rebeccapurple;
  align-items: center;
  justify-content: center;
  //margin-top: 20px;
  border-radius: 8px;
  border: 5px solid royalblue;
  background: #354259;

  h1 {
    color: #dfd3c3;
    font-size: 50px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    /* display: flex;
    align-items: center;
    justify-content: center; */
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 50px;
    border-radius: 8px;
    margin-top: 20px;
    margin-left: 100px;
    font-size: 20px;
    background: #86c8bc;
    cursor: pointer;
  }

  button:hover {
    background: linear-gradient(#1095c1 0 0) var(--p, 0) / var(--p, 0) no-repeat;
    transition: 0.4s, background-position 0s;
  }
  button:hover {
    --p: 100%;
    color: #fff;
  }
`;

export const ContainerGrid = styled.div`
display: flex;
flex-direction: column;
  width: 400px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 8px;
  background: #cdc2ae;
  //color: white;
  //flex-direction: column;
`;

export const ConatinerInput = styled.div`
margin-top: 10px;
  display: flex;
  flex-direction: column;
  input {
    font-size: 20px;
    width: 300px;
    height: 40px;
    border-radius: 8px;
    background: #374259;
    color: #fff;
  }
  label {
    font-size: 20px;
    margin-bottom: 5px;
    color: #354259;
  }
`;
export const ConatinerText = styled.div``;
