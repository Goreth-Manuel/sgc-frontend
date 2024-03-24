import React, { useEffect, useRef } from "react";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Rodape from "../../components/Rodape";
import * as imgs from "../../assets";
import { ContainerTag } from "./style";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import Fruits1 from "../../assets/img/Fruits-1.png";

const weeks = [
  {
    week_name: "Primeira semana",
    days: [
      {
        day_name: "Segunda-Feira",
        snacks: {
          breakfast: {
            name: "pequeno almoço",
            food_name: "Saladas de frutas",
            image: Fruits1,
            nutricional_values: [
              "Vitamina A, B, C",
              "Cálcio",
              "Hidrocarbonato",
            ],
          },
          lunch: {
            name: "almoço",
            food_name: "Arroz com Feijão",
            image: Fruits1,
            nutricional_values: ["Ferro"],
          },
          dinner: {
            name: "jantar",
            food_name: "Funje com peixo",
            image: Fruits1,
            nutricional_values: ["Potácio"],
          },
        },
      },
      {
        day_name: "Terça-Feira",
        snacks: {
          breakfast: {
            name: "pequeno almoço",
            food_name: "Saladas de frutas",
            image: Fruits1,
            nutricional_values: [
              "Vitamina A, B, C",
              "Cálcio",
              "Hidrocarbonato",
            ],
          },
          lunch: {
            name: "almoço",
            food_name: "Arroz com Feijão",
            image: Fruits1,
            nutricional_values: ["Vitamina  C", "Ferro"],
          },
          dinner: {
            name: "jantar",
            food_name: "Funje com peixo",
            image: Fruits1,
            nutricional_values: ["Potácio"],
          },
        },
      },
    ],
  },
  {
    week_name: "Segunda semana",
    days: [
      {
        day_name: "Segunda-Feira",
        snacks: {
          breakfast: {
            name: "pequeno almoço",
            food_name: "Saladas de frutas",
            image: Fruits1,
            nutricional_values: [
              "Vitamina A, B, C",
              "Cálcio",
              "Hidrocarbonato",
            ],
          },
          lunch: {
            name: "almoço",
            food_name: "Arroz com Feijão",
            image: Fruits1,
            nutricional_values: ["Vitamina  C", "Ferro"],
          },
          dinner: {
            name: "jantar",
            food_name: "Funje com peixo",
            image: Fruits1,
            nutricional_values: ["Potácio"],
          },
        },
      },
      {
        day_name: "Terça-Feira",
        snacks: {
          "breakfast": {
            name: "pequeno almoço",
            food_name: "Saladas de frutas",
            image: Fruits1,
            nutricional_values: [
              "Vitamina A, B, C",
              "Cálcio",
              "Hidrocarbonato",
            ],
          },
          "lunch": {
            name: "almoço",
            food_name: "Arroz com Feijão",
            image: Fruits1,
            nutricional_values: ["Vitamina  C", "Ferro"],
          },
          "dinner": {
            name: "jantar",
            food_name: "Funje com peixo",
            image: Fruits1,
            nutricional_values: ["Potácio"],
          },
        },
      },
    ],
  },

  {
    week_name: "Terceira semana",
    days: [
      {
        day_name: "Segunda-Feira",
        snacks: {
          breakfast: {
            name: "pequeno almoço",
            food_name: "Saladas de frutas",
            image: Fruits1,
            nutricional_values: [
              "Vitamina A, B, C",
              "Cálcio",
              "Hidrocarbonato",
            ],
          },
          lunch: {
            name: "almoço",
            food_name: "Arroz com Feijão",
            image: Fruits1,
            nutricional_values: ["Vitamina  C", "Ferro"],
          },
          dinner: {
            name: "jantar",
            food_name: "Funje com peixo",
            image: Fruits1,
            nutricional_values: ["Potácio"],
          },
        },
      },
      {
        day_name: "Terça-Feira",
        snacks: {
          "breakfast": {
            name: "pequeno almoço",
            food_name: "Saladas de frutas",
            image: Fruits1,
            nutricional_values: [
              "Vitamina A, B, C",
              "Cálcio",
              "Hidrocarbonato",
            ],
          },
          "lunch": {
            name: "almoço",
            food_name: "Arroz com Feijão",
            image: Fruits1,
            nutricional_values: ["Vitamina  C", "Ferro"],
          },
          "dinner": {
            name: "jantar",
            food_name: "Funje com peixo",
            image: Fruits1,
            nutricional_values: ["Potácio"],
          },
        },
      },
    ],
  },
];

function Alimentacao() {
  const cardListRefs = useRef([]);
  const navigate = useNavigate();

  // Rota para acessar apenas com o cadastrado
  useEffect(() => {
    /*
     if (!sessionStorage.getItem("user-name")) {
      navigate("/login");
    } 
    */
  }, [navigate]);

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
      <Header id="inicio" />
      <ContainerTag>
        {weeks.map((week, index) => (
          <section key={index}>
            <label>
              <Calendar color="#00aacc" size={35} />{" "}
              <span>{week.week_name}</span>
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
                          <label>Valores nutritivos</label>
                          {day.snacks.breakfast.nutricional_values.map(
                            (value, index) => (
                              <span key={index}>{value}</span>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="card" key={`${dayIndex}-lunch`}>
                      <div className="picture">
                        <img
                          src={day.snacks.lunch.image}
                          alt={day.snacks.lunch.food_name}
                        />
                      </div>
                      <div className="content">
                        <label className="food-name">
                          {day.snacks.lunch.food_name}
                        </label>
                        <span className="badge">{day.snacks.lunch.name}</span>
                        <span className="week-day">{day.day_name}</span>
                        <div className="nutrition">
                          <label>Valores nutritivos</label>
                          {day.snacks.lunch.nutricional_values.map(
                            (value, index) => (
                              <span key={index}>{value}</span>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="card" key={`${dayIndex}-dinner`}>
                      <div className="picture">
                        <img
                          src={day.snacks.dinner.image}
                          alt={day.snacks.dinner.food_name}
                        />
                      </div>
                      <div className="content">
                        <label className="food-name">
                          {day.snacks.dinner.food_name}
                        </label>
                        <span className="badge">{day.snacks.dinner.name}</span>
                        <span className="week-day">{day.day_name}</span>
                        <div className="nutrition">
                          <label>Valores nutritivos</label>
                          {day.snacks.dinner.nutricional_values.map(
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
      </ContainerTag>
      <Rodape />
    </div>
  );
}

export default Alimentacao;
