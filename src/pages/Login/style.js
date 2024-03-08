import styled from "styled-components";
import { cubes } from "../../assets";

export const LoginTag = styled.section`
  background-image: url(${cubes});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 2rem;
    padding: 1rem 2rem;
    color: #000;
    font-weight: bold;
    text-align: center;
  }

  #form {
    background-color: #fff;
    min-height: 58vh;
    border-radius: 1rem;
    padding: 2rem;
  }

  label {
    font-size: 18px;
    margin-bottom: .50rem;
  }

  input[type="text"],
  input[type="email"],
  input[type="password"] {
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 10px;
    font-size: 1.2rem;
  }

  p {
    color: #000;
    margin: 3.5rem 0 0;
    font-size: 1.2rem;
    text-align: center;
  }

  p a {
    text-decoration: none;
    color: #00AACC;
    font-weight: bold;
    margin-left: 0.5rem;
  }

  .error{
    color: #e74c3c;
    font-size: 1rem;
    margin-top: .50rem;
  }

  .form{
    padding: 1rem 2rem;
  }

  .form-control{
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 1.5rem;
  }
`;
