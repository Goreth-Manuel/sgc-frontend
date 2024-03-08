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
    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
    min-height: 68vh;
    border-radius: 1rem;
    z-index: 1;
  }

  .endedtime {
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 38vh;
    border-radius: 1rem;
    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
    min-width: 34vw;
  }

  .endedtime span {
    color: #f2f2f2;
    font-size: 2rem;
    text-align: center;
    font-weight: bold;
    width: 80%;
    line-height: 1.2;
    letter-spacing: 1px;
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

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 25px;
  }

  .form-control {
    display: flex;
    flex-direction: column;
    margin: 1.2rem;
  }

  .form-control-full {
    padding: 0px 25px;
    margin-top: 0.8rem;
    margin-bottom: 0.8rem;
  }
  .checkbox {
    margin: 4rem;
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

  .radio-input + label:before {
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #aaa;
    margin-right: 8px;
    position: relative;
    top: 4px;
  }

  .radio-input:checked + label:before {
    background-color: #2196f3; /* Cor quando selecionado */
    border-color: #2196f3; /* Cor da borda quando selecionado */
  }

  .radio-label {
    font-size: 16px;
    color: #333;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
  }

  .custom-textarea {
    width: 100%;
    height: 100px;
    padding: 13px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }

  .custom-textarea:focus {
    border: 2px solid #6ec1e4;
    outline: none; /* Remove a outline padrão do foco */
  }
`;
