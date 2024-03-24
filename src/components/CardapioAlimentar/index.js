import React, { useRef } from "react";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import * as imgs from "../../assets";
import { ContainerTag } from "./style";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Fruits1 from "../../assets/img/Fruits-1.png";
import Feijoada from "../../assets/img/fejoada.jpg"
import Sopa from "../../assets/img/sopa.jpg"
import Mufete from "../../assets/img/mufete.jpg"
import Massa from "../../assets/img/massa.jpg"
import Funge from "../../assets/img/funge.jpg"


//import Alimentacao from '../../pages/alimentacao/index';
const weeks = [
  {
    week_name: "Cardápio alimentar",
    days: [
      {
        day_name: "Segunda-Feira",
        snacks: {
          breakfast: {
            name: "pequeno almoço",
            food_name: "Feijoada",
            image: Feijoada,
            alimentacao_do_dia: [
              "Matabicho: Pão com leite",
              "Almoço: Feijoada",
              "Lanche: Bangue bangue",
            ],
          },
          lunch: {
            name: "almoço",
            food_name: "Arroz com Feijão",
            image: Fruits1,
            alimentacao_do_dia: ["Ferro"],
          },
          dinner: {
            name: "jantar",
            food_name: "Funje com peixo",
            image: Fruits1,
            alimentacao_do_dia: ["Potácio"],
          },
        },
      },
      {
        day_name: "Terça-Feira",
        snacks: {
          breakfast: {
            name: "pequeno almoço",
            food_name: "Sopa",
            image: Sopa ,
            alimentacao_do_dia: [
              "Matabicho: Pão com leite",
              "Almoço: Sopa",
              "Lanche: Bangue bangue",
            ],
          },
          lunch: {
            name: "almoço",
            food_name: "Arroz com Feijão",
            image: Fruits1,
            alimentacao_do_dia: ["Vitamina  C", "Ferro"],
          },
          dinner: {
            name: "jantar",
            food_name: "Funje com peixo",
            image: Fruits1,
            alimentacao_do_dia: ["Potácio"],
          },
        },
      },
      {
        day_name: "Quarta-Feira",
        snacks: {
          breakfast: {
            name: "pequeno almoço",
            food_name: "Mufete",
            image: Mufete,
            alimentacao_do_dia: [
              "Matabicho: Pão com leite",
              "Almoço: Mufete",
              "Lanche: Bangue bangue",
            ],
          },
          lunch: {
            name: "almoço",
            food_name: "Arroz com Feijão",
            image: Fruits1,
            alimentacao_do_dia: ["Vitamina  C", "Ferro"],
          },
          dinner: {
            name: "jantar",
            food_name: "Funje com peixo",
            image: Fruits1,
            alimentacao_do_dia: ["Potácio"],
          },
        },
      },
      {
        day_name: "Quinta-Feira",
        snacks: {
          breakfast: {
            name: "pequeno almoço",
            food_name: "Massa",
            image: Massa,
            alimentacao_do_dia: [
              "Matabicho: Pão com leite",
              "Almoço: Massa com feijão",
              "Lanche: Bangue bangue",
            ],
          },
          lunch: {
            name: "almoço",
            food_name: "Arroz com Feijão",
            image: Fruits1,
            alimentacao_do_dia: ["Vitamina  C", "Ferro"],
          },
          dinner: {
            name: "jantar",
            food_name: "Funje",
            image: Fruits1,
            alimentacao_do_dia: ["Potácio"],
          },
        },
      },
      {
        day_name: "Sexta-Feira",
        snacks: {
          breakfast: {
            name: "pequeno almoço",
            food_name: "Funge",
            image: Funge,
            alimentacao_do_dia: [
              "Matabicho: Pão com leite",
              "Almoço: Funge com carne",
              "Lanche: Bangue bangue",
            ],
          },
          lunch: {
            name: "almoço",
            food_name: "Arroz com Feijão",
            image: Fruits1,
            alimentacao_do_dia: ["Vitamina  C", "Ferro"],
          },
          dinner: {
            name: "jantar",
            food_name: "Funje com peixo",
            image: Fruits1,
            alimentacao_do_dia: ["Potácio"],
          },
        },
      },
    ],
  },
];

function CardapioAlimentar () {
  const cardListRefs = useRef([]);

  const scrollStep = 300; // Valor de deslocamento do scroll

  const scrollLeft = (weekIndex) => {
    const cardList = cardListRefs.current[weekIndex];
    if (cardList) {
      cardList.scrollLeft -= scrollStep;
    }
  };

  const scrollRight = (weekIndex) => {
    const cardList = cardListRefs.current[weekIndex];
    if (cardList) {
      cardList.scrollLeft += scrollStep;
    }
  };


  return (
    <div style={{ background: "#f1f1f1" }}>
      <ContainerTag>
        {weeks.map((week, index) => (
          <section key={index}>
            <label>
              <h1>{week.week_name}</h1>
            </label>
            <div className="scroll-buttons">
              <ChevronLeft
                className="prev-button"
                onClick={() => scrollLeft(index)}
                color="#00aacc"
                size={50}
              />
              <ChevronRight
                className="next-button"
                onClick={() => scrollRight(index)}
                color="#00aacc"
                size={50}
              />
              <div
                className="card-list"
                ref={(ref) => (cardListRefs.current[index] = ref)}
              >
                {week.days.map((day, dayIndex) => (
                  <>
                    <div className="card" key={`${dayIndex}-breakfast`}>
                      <div className="picture">
                        <img
                          src={day.snacks.breakfast.image}
                          alt={day.snacks.breakfast.food_name}
                        />
                      </div>
                      <div className="content">
                        <label className="food-name">
                          {day.snacks.breakfast.food_name}
                        </label>
                        <span className="badge">
                          {day.snacks.breakfast.name}
                        </span>
                        <span className="week-day">{day.day_name}</span>
                        <div className="nutrition">
                          <label>Alimentacao do dia</label>
                          {day.snacks.breakfast.alimentacao_do_dia.map(
                            (value, index) => (
                              <span key={index}>{value}</span>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </section>
        ))}

				<ol id="button">
					<Link to="/alimentacao" className="btn">
						Ver mais
					</Link>
        </ol>
      </ContainerTag>
    </div>
  );
}

export default CardapioAlimentar;
