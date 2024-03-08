import styled from 'styled-components'

export const HeaderTag = styled.header`
  cursor: pointer;
  nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  width: 100%;
  padding: 18px 10px;
  height: 10vh;
  }

  h1 {
    font-size: 2.5rem;
    color: #00AACC;
  } 

  ul {
    display: flex;
    list-style: none;
  }

  ul li {
    margin-left: 35px;
    font-size: 1.4rem;
  }

  ul li a {
    text-decoration: none;
    color: #00AACC;
    overflow: hidden;
    transition: 0.8s;
  }

  ul li a:hover{
    transition: 0.8s;
    text-decoration: underline;
  }

  #button {
    width: 9rem;
    background: #00AACC;
    border-radius: 10px;
    border: 1px solid #00AACC;
    margin-left: 15px;
    cursor: pointer;
    padding: 10px 5px;
    transition: 0.8s;
    position: relative;
    overflow: hidden;
    font-size: 1.4rem;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
  }

  #button:hover{
    color: #000;;
    background: #6EC1E4;
    border: 1px solid #6EC1E4;
  }

  .btn {
    text-decoration: none;
    color: #fff;
  }

  span {
    color: #00AACC;
    font-size: 1.4rem;
  }

  button {
    background: #00AACC;
    border-radius: 10px;
    border: 1px solid #00AACC;
    padding: 6px 10px;
    font-size: 16px;
    color: #fff;
  }
`;