import React, { useRef } from "react";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import api from "./../../api/api";
import Button from "../../../src/components/Button";
import * as imgs from "../../assets";
import { ContainerTag } from "./style";
import { ChevronLeft, ChevronRight } from "lucide-react";
import GO from "../../assets/img/GO.jpeg";
import jacob from "../../assets/img/jacob.jpg";
import anthony from "../../assets/img/anthony.jpg";
import ringa from "../../assets/img/ringa.jpg";

//ringa
const weeks = [
  {
    week_name: "Depoimentos",
    days: [
      {

        snacks: {
          breakfast: {
            name: "Haneth Manuel",
            image: ringa,
          },
          lunch: {
            name: "Benvinda dos Santos",
            image: jacob,
            nutricional_values: ["Ferro"],
          },
          dinner: {
            name: "Hamilton da Cruz",
            image: anthony,
            nutricional_values: ["Potácio"],
          },
        },
      },
      {
        snacks: {
          breakfast: {
            name: "Haneth Manuel",
            image: ringa,
          },
          lunch: {
            name: "Benvinda dos Santos",
            image: jacob,
          },
          dinner: {
            name: "Margarida André",
            image: GO,
          },
        },
      },
    ],
  },
];

function Depoimento() {
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
                          alt={day.snacks.breakfast.name}
                        />
                      </div>
                      <div className="content">
                        <label className="food-name">
                          {day.snacks.breakfast.name}
                        </label>
                        <div className="nutrition">
                          <label>É o melhor Centro Infantil que eu já vi</label>
                          
                        </div>
                      </div>
                    </div>
                    <div className="card" key={`${dayIndex}-lunch`}>
                      <div className="picture">
                        <img
                          src={day.snacks.lunch.image}
                          alt={day.snacks.lunch.name}
                        />
                      </div>
                      <div className="content">
                        <label className="food-name">
                          {day.snacks.lunch.name}
                        </label>
                        <div className="nutrition">
                          <label>Matricular o meu filho neste centro
                            foi a melhor escolha que fiz
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="card" key={`${dayIndex}-dinner`}>
                      <div className="picture">
                        <img
                          src={day.snacks.dinner.image}
                          alt={day.snacks.dinner.name}
                        />
                      </div>
                      <div className="content">
                        <label className="food-name">
                          {day.snacks.dinner.name}
                        </label>
                        <span className="week-day">{day.day_name}</span>
                        <div className="nutrition">
                          <label>Eu amei as actividades diárias dos nossos filhos. </label>
                          
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
    </div>
  );
}

export default Depoimento;
