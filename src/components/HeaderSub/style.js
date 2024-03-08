import styled from 'styled-components'

export const HeaderSubTag = styled.section`
  cursor: pointer;
  background-color: #f1f1f1;
  width: 100%;

  nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f1f1f1;
  width: 100%;
  padding: 18px 10px;
  height: 10vh;
  }

  ul {
    display: flex;
    list-style: none;
  }

  ul li a {
    text-decoration: none;
    color: #00AACC;
    font-size: 2.5rem;
    font-weight: bold;
  }
`;