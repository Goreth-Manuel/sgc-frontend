import styled from "styled-components";

export const ContainerTag = styled.main`
  position: relative;
  display: flex;
  padding: 50px 120px;
  align-items: center;
  min-height: 100vh;
  justify-content: space-between;

  background-image: url(/imagens/kidding.jpg);
  background-repeat: no-repeat;
  background-size: cover;

  .foreground {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(1px);
    z-index: 0;
  }

  #text {
    display: flex;
    flex-direction: column;

    h1 {
      color: #f1f1f1;
      font-size: 4.5rem;
      width: 78%;
      font-family: "Montserrat";
      letter-spacing: 1.5px;
      z-index: 1;
      text-transform: uppercase;
      font-weight: 800;
      strong {
        color: #00aacc;
        font-weight: bolder;
      }
    }

    p {
      font-size: 2rem;

      margin-top: 20px;
      z-index: 1;
      color: #f2f2f2;
      line-height: 1.3;
    }
  }

  .form {
    padding: 30px 30px 60px 30px;
    width: 700px;
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
    border-radius: 1rem;
    z-index: 1;
  }

  label {
    font-size: 18px;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }

  input[type="text"],
  input[type="email"],
  input[type="password"],
  input[type="date"],
  select {
    padding: 15px 20px;
    box-sizing: border-box;
    border: 1px solid #bdc3c7;
    border-radius: 6px;
    font-size: 0.95rem;
    outline: none;
  }

  input[type="text"]:focus,
  input[type="email"]:focus,
  input[type="password"]:focus,
  input[type="date"]:focus,
  select:focus {
    border: 2px solid #00aacc;
  }

  .form-control {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
  }


  #file {
    display: flex;
  }

  .error {
    color: #e74c3c;
    font-weight: 500;
    margin-top: 4px;
  }

  .radio-input {
    opacity: 0;
    position: absolute;
  }


`;
