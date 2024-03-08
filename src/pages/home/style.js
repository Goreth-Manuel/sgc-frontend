import styled from "styled-components";
import { fundo } from "../../assets";

export const DivSobre = styled.div`
  background-color: #f6f9ff;
  padding: 3rem 0;

  h1 {
    text-align: center;
    font-size: 2.5rem;
    color: #54595f;
    padding: 2rem 0;
  }

  div {
    margin: 0 34rem;
  }

  p {
    color: #54595f;
    font-size: 29px;
    line-height: 2.6rem;
    text-align: center;
  }
`;

export const SerieTag = styled.section`
  background-color: #f6f9ff;
  width:100%;

  #container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 3rem 10rem;
  }

  #container img {
    border-radius: 5rem;
  }

  #container h1 {
    font-size: 2rem;
    color: #00aacc;
    padding: 0.5rem 0;
  }

  #container div {
    width: 47rem;
    line-height: 3rem;
    font-size: 1.4rem;
    color: #54595f;
  }

  #container div ul {
    padding-left: 3rem;
  }

  #container-main {
    display: flex;
    justify-content: space-around;
    padding: 0 10rem 5rem 10rem;
  }

  #container-main img {
    border-radius: 2rem;
  }

  #container-main h1 {
    font-size: 2rem;
    color: #00aacc;
    padding: 1rem 0;
    text-align: center;
  }

  #container-main p,
  ul {
    width: 47rem;
    line-height: 3rem;
    font-size: 1.6rem;
    color: #54595f;
  }

  #container-main ul {
    padding-left: 3rem;
  }
`;

export const GaleriaTag = styled.div`
  height: 80vh;
  margin: 0 0 8rem;
  padding: 2rem 0;
  width: 100%;

  h1 {
    padding: 3rem 0;
    text-align: center;
    font-size: 38px;
    color: #54595f;
  }

  section {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0 3rem;
  }

  div {
    display: column;
    align-items: end;
    justify-content: center;
    height: 34vh;
    width: 18vw;
    margin: 0 2rem;
    border-radius: 28px;
    box-shadow: 0 1px 4px #ccc;
    text-align: center;
  }

  .card {
    background-color: #f7e5e8;
    transition: 0.8s;
  }

  .card-main {
    background-color: #dcf0ee;
    padding: 0 2rem;
    transition: 0.8s;
  }

  .icon {
    font-size: 6rem;
    padding-top: 5rem;
  }

  .card-sub {
    background-color: #e9e7f7;
    transition: 0.8s;
  }

  h2 {
    color: #54595f;
    padding-top: 3rem;
  }

  .card:hover {
    height: 35vh;
    width: 20vw;
  }

  .card-sub:hover {
    height: 35vh;
    width: 20vw;
  }

  .card-main:hover {
    height: 35vh;
    width: 20vw;
  }
`;

export const CardapioTag = styled.section`
  height: 36vh;
  padding: 2rem 0;

  h1 {
    padding: 2rem 0;
    text-align: center;
    font-size: 38px;
    color: #54595f;
  }

  img {
    width: 254px;
    height: 230px;
    padding: 1rem;
    margin: 1rem 0;
  }
`;

export const EquipeTag = styled.section`
  height: 64vh;
  margin: 2rem 0;

  h1 {
    padding: 4rem 0;
    text-align: center;
    font-size: 38px;
    color: #54595f;
  }

  #group {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 32rem;
  }

  img {
    border-radius: 10rem;
  }

  h2 {
    color: #00aacc;
    text-align: center;
    padding-top: 1rem;
  }

  p {
    text-align: center;
    font-size: 1.2rem;
  }
`;

export const SectionTag = styled.section`
  background-image: url(${fundo});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  height: 96vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  opacity: 0.8;

  p {
    font-weight: bold;
    width: 40rem;
    color: #fff;
    font-size: 38px;
    line-height: 3rem;
    margin-left: 24rem;
  }
`;

export const PacoteTag = styled.section`
  height: 71vh;
  background-color: #f6f9ff;

  h1 {
    padding: 5rem 0;
    text-align: center;
    font-size: 38px;
    color: #54595f;
  }

  section {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f6f9ff;
    padding: 0 0 6rem;
  }

  div {
    height: 44vh;
    width: 18vw;
    margin: 0 1rem;
    border-radius: 28px;
    background-color: #fff;
    box-shadow: 0 1px 4px #ccc;
    text-align: center;
    padding: 3rem;
  }

  h2 {
    color: #00aacc;
    padding: 1.5rem 0;
    font-size: 2rem;
  }

  p {
    font-size: 1.7rem;
    color: #7a7a7a;
    line-height: 3rem;
  }
`;

export const ContactoTag = styled.section`
  #container {
    margin-top: 5rem;
    height: 64vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-size: 38px;
    color: #54595f;
    width: 26vw;
  }

  .paragrafo {
    width: 40rem;
    line-height: 2.4rem;
    font-size: 1.4rem;
    color: #54595f;
    padding: 1rem 2rem 1.5rem 0;
  }

  img {
    padding: 0 1rem;
  }

  div .localizacao {
    font-size: 50px;
    display: flex;
    justify-content: center;
    align-items: center; 
  }

  .localizacao p {
    width: 40rem;
    margin-left: 25px;
    color: #54595f;
    font-size: 1.2rem;
    padding: 1rem 2rem 1.5rem 0;
  }

  div .telefone {
    font-size: 45px;
    display: flex;
    justify-content: center;
    align-items: center; 
  }

  .telefone p {
    width: 40rem;
    margin-left: 25px;
    color: #54595f;
    font-size: 1.2rem;
    padding: 1rem 2rem 1.5rem 0;
  }
`;
