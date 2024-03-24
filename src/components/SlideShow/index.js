import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Link } from "react-router-dom";
import { styled } from 'styled-components';

const divStyle = {
  display: "flex",
  alignItems: "center",
  paddingLeft: "216px",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "980px",
  fontSize: "25px",
  opacity: "0.9",
  color: "#001524",
};

const slideImages = [
  {
    url: "/imagens/image0.jpg",
  },
  {
    url: "/imagens/bargain-stylish-empty-deal-coworker.jpg",
  },
  {
    url: "/imagens/cubes.jpg",
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{
                ...divStyle,
                backgroundImage: `url(${slideImage.url})`,
                backgroundSize: "cover",
                backgroundPosition: "50% 50%",
              }}
            >
              <div>
                <h1
                  style={{
                    width: "45rem",
                    padding: "2rem 0",
                    lineHeight: "3.5rem",
                  }}
                >
                  Matricular o seu filho num centro infantil nunca foi tão
                  fácil!{" "}
                </h1>
                <p
                  style={{
                    width: "40rem",
                    lineHeight: "2.5rem",
                    fontWeight: "bold",
                  }}
                >
                  Com apenas um clique o Sistema de Gestão de crianças faz isso
                  e muito mais.
                </p>

                <ol 
                  style={{
                    width: '9.8rem',
                    background: '#00AACC',
                    borderRadius: '10px',
                    border: '1px solid #00AACC',
                    cursor: 'pointer',
                    padding: '15px 25px',
                    transition: '0.8s',
                    position: 'relative',
                    overflow: 'hidden',
                    fontSize: '1.4rem',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    textDecoration: 'none',
                    marginTop: '35px',
                      
                  
                  }}>
                  <Link to="/cadastro" style={{
                    textDecoration: 'none',
                    color: '#fff',
                  }}
                  >
                    Cadastrar
                  </Link>
                  </ol>
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};
export default Slideshow;
