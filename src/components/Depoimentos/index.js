import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const divStyle = {
  display: "flex",
  alignItems: "center",
  //paddingLeft: "216px",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "50vh",
  fontSize: "25px",
  opacity: "0.9",
  color: "#001524",
  width: "100%", // Adiciona esta linha para definir a largura para 50%
  margin: "auto",
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
    <div className="slide-container" style={{ width: "50%" }}>
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
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};
export default Slideshow;
