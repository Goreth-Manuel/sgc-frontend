import React, { useEffect, useRef } from "react";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../components/Header";
import Rodape from "../../components/Rodape";
import * as imgs from "../../assets";
import { ContainerTag } from "./style";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import janay from "../../assets/img/janay.jpg";
import kiana from "../../assets/img/kiana.jpg";
import nina from "../../assets/img/nina.jpg";
import lopez from "../../assets/img/lopez.jpg";
import kindred from "../../assets/img/kindred.jpg";
import krake from "../../assets/img/krake.jpg";
import bosman from "../../assets/img/bosman.jpg";
import { useNavigate } from "react-router-dom";

// bosman
const weeks = [
  {
    week_name: "Dia da Mulher Africana",
    days: [
      {
        snacks: {
          breakfast: {
            image: janay,
          },
          lunch: {
            image: nina,
          },
          dinner: {
            image: kindred,
          },
        },
      },
      {
        snacks: {
          breakfast: {
            image: krake,
          },
          lunch: {
            image: bosman,
          },
          dinner: {
            image: nina,
          },
        },
      },
      {
        snacks: {
          breakfast: {
            image: krake,
          },
          lunch: {
            image: bosman,
          },
          dinner: {
            image: nina,
          },
        },
      },
    ],
  },
  {
    week_name: "Aniversário do centro",
    days: [
      {
        snacks: {
          breakfast: {
            image: nina,
          },
          lunch: {
            image: krake,
          },
          dinner: {
            image: kiana,
          },
        },
      },
      {
        snacks: {
          "breakfast": {
            image: janay,
          },
          "lunch": {
            image: lopez,
          },
          "dinner": {
            image: krake,
          },
        },
      },
      {
        snacks: {
          breakfast: {
            image: nina,
          },
          lunch: {
            image: krake,
          },
          dinner: {
            image: kiana,
          },
        },
      },
    ],
  },

  {
    week_name: "Encerramento do ano de 2023",
    days: [
      {
        snacks: {
          breakfast: {
            image: bosman,
          },
          lunch: {
            image: kindred,
          },
          dinner: {
            image: kiana,
          },
        },
      },
      {
        snacks: {
          "breakfast": {
            image: nina,
          },
          "lunch": {
            image: kindred,
          },
          "dinner": {
            image: lopez,
          },
        },
      },
      {
        snacks: {
          breakfast: {
            image: bosman,
          },
          lunch: {
            image: kindred,
          },
          dinner: {
            image: kiana,
          },
        },
      },
    ],
  },
];

function Galeria() {
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
                     
                    </div>
                    <div className="card" key={`${dayIndex}-lunch`}>
                      <div className="picture">
                        <img
                          src={day.snacks.lunch.image}
                          alt={day.snacks.lunch.food_name}
                        />
                      </div>
                      
                    </div>
                    <div className="card" key={`${dayIndex}-dinner`}>
                      <div className="picture">
                        <img
                          src={day.snacks.dinner.image}
                          alt={day.snacks.dinner.food_name}
                        />
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

export default Galeria;
