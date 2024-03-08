import {
  faChildren,
  faFaceSmileBeam,
  faImages,
  faSmile,
  faTrainTram,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import * as imgs from "../../assets";

// Components
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Rodape from "../../components/Rodape";
import SlideShow from "../../components/SlideShow";

// Section Styles
import {
  CardapioTag,
  ContactoTag,
  DivSobre,
  EquipeTag,
  GaleriaTag,
  PacoteTag,
  SectionTag,
  SerieTag,
} from "./style";
import { motion, AnimatePresence } from "framer-motion";

function Home() {
  return (
    <>
      <Header id="inicio" />
      <SlideShow />
      <DivSobre as={motion.div} id="sobre">
        <h1>Sobre</h1>
        <AnimatePresence>
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              delay: 0.2,
              type: "spring",
              damping: 10,
              stiffness: 80,
            }}
          >
            <p>
              SGC é um sistema de gestão de crianças do Centro Infantil Pastoral
              da Ressurreição que visa facilitar a vida dos encarregados de
              educação no processo de inscrição dos seus educandos e na obtenção
              de informações sobre o Centro Infantil.
            </p>
          </motion.div>
        </AnimatePresence>
      </DivSobre>

      <SerieTag id="serie">
        <AnimatePresence>
          <motion.div
            id="container"
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              delay: 0.2,
              type: "spring",
              damping: 10,
              stiffness: 80,
            }}
          >
            <img
              src={imgs.menino}
              className="img"
              alt="criança-de-dois-anos"
              width="750"
              height="550"
            />

            <div>
              <h1>Maternal I</h1>
              <p>
                Destinado para crianças que têm 2 anos de idade, aqui elas estão
                aptas a aprender mais coisas, já que entendem com mais
                facilidade o que acontece à sua volta. Dentro desse universo,
                são aplicadas atividades que envolvem:
              </p>
              <ul>
                <li>trabalhos manuais com massa de modelar;</li>
                <li>higiene bucal depois das refeições;</li>
                <li>alimentação sem ajuda;</li>
                <li>apresentação das cores;</li>
                <li>reprodução de sons;</li>
                <li>atividades sensoriais.</li>
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          <motion.div
            id="container"
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              delay: 0.2,
              type: "spring",
              damping: 10,
              stiffness: 80,
            }}
          >
            <div>
              <h1>Maternal II</h1>
              <p>
                Específico para crianças dos 3 anos de idade, as atividades
                nessa fase são semelhantes às praticadas no maternal I, mas
                agora a equipe também cria ambientes que ajudam no
                desenvolvimento integral de todas as crianças. Algumas
                atividades incluem:
              </p>

              <ul>
                <li>incentivo da fala;</li>
                <li>desenvolvimento da capacidade de se comunicar;</li>
                <li>amplio do vocabulário por meio de conversas;</li>
                <li>estímulo à coordenação motora;</li>
                <li>prazer em ouvir histórias.</li>
              </ul>
            </div>

            <img
              src={imgs.image0}
              className="img"
              alt="criança-de-três-anos"
              width="750"
              height="550"
            />
          </motion.div>
        </AnimatePresence>

        <div id="container-main">
          <AnimatePresence>
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{
                delay: 0.2,
                type: "spring",
                damping: 10,
                stiffness: 80,
              }}
            >
              <img
                src={imgs.menina}
                className="img"
                alt="criança-de-quatro-anos"
                width="750"
                height="500"
              />
              <h1>Jardin I</h1>
              <p>
                No jardim I encontramos as crianças com 4 anos de idade, a grade
                curricular delas aumenta e passam a aprender também sobre
                biologia e ciências. As principais atividades incluem:
              </p>

              <ul>
                <li>desenho livre;</li>
                <li>pintura;</li>
                <li>linhas e traçados;</li>
                <li>meios de comunicação;</li>
                <li>identificação dos membros da família.</li>
              </ul>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence>
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{
                delay: 0.2,
                type: "spring",
                damping: 10,
                stiffness: 80,
              }}
            >
              <img
                src={imgs.crianca}
                className="img"
                alt="criança-de-cinco-anos"
                width="750"
                height="500"
              />
              <h1>Jardin II</h1>
              <p>
                Nessa etapa as crianças com 5 anos de idade têm uma didática
                mais complexa e as atividades são mais elaboradas, visando
                ensinar-lhe as noções básicas de português e matemática,
                desenvolvimento social, ciências, biologia e artes.
              </p>

              <ul>
                <li>vogais;</li>
                <li>consoantes;</li>
                <li>alfabeto;</li>
                <li>números;</li>
                <li>partes do corpo.</li>
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </SerieTag>

      <GaleriaTag id="galeria">
        <h1>Galeria</h1>

        <section>
          <Link to="/Galeria" style={{ textDecoration: "none" }}>
            <div className="card">
              <FontAwesomeIcon
                icon={faSmile}
                className="icon"
                style={{ color: "#fcb900" }}
              />
              <h2>Dia da Mulher Africana</h2>
            </div>
          </Link>

          <Link to="/Galeria" style={{ textDecoration: "none" }}>
            <div className="card-main">
              <FontAwesomeIcon
                icon={faImages}
                className="icon"
                style={{ color: "#00AACC" }}
              />
              <h2>Dia da Criança Africana</h2>
            </div>
          </Link>

          <Link to="/Galeria" style={{ textDecoration: "none" }}>
            <div className="card-sub">
              <FontAwesomeIcon
                icon={faUsers}
                className="icon"
                style={{ color: "#9b51e0" }}
              />
              <h2>Aniversário do centro</h2>
            </div>
          </Link>
        </section>

        <section>
          <Link to="/Galeria" style={{ textDecoration: "none" }}>
            <div className="card-sub">
              <FontAwesomeIcon
                icon={faTrainTram}
                className="icon"
                style={{ color: "#00AACC" }}
              />
              <h2>Visita ao múseu</h2>
            </div>
          </Link>

          <Link to="/Galeria" style={{ textDecoration: "none" }}>
            <div className="card">
              <FontAwesomeIcon
                icon={faFaceSmileBeam}
                className="icon"
                style={{ color: "#aa0cc0" }}
              />
              <h2>Dia da África</h2>
            </div>
          </Link>

          <Link to="/Galeria" style={{ textDecoration: "none" }}>
            <div className="card-main">
              <FontAwesomeIcon
                icon={faChildren}
                className="icon"
                style={{ color: "#00d084" }}
              />
              <h2>Encerramento do ano de 2023</h2>
            </div>
          </Link>
        </section>
      </GaleriaTag>

      <CardapioTag>
        <h1>Alimentação da semana</h1>

        <div className="week-meels">
          <img src={imgs.Arroz} className="img" alt="Arroz" />
          <img src={imgs.fejoada} className="img" alt="fejoada" />
          <img src={imgs.frango} className="img" alt="frango" />
          <img src={imgs.funge} className="img" alt="funge" />
          <img src={imgs.massa} className="img" alt="massa" />
          <img src={imgs.mufete} className="img" alt="mufete" />
          <img src={imgs.pato} className="img" alt="pato" />
          <img src={imgs.sopa} className="img" alt="sopa" />
        </div>
      </CardapioTag>

      <EquipeTag>
        <h1>Conheça a nossa equipe</h1>

        <div id="group">
          <div>
            <img
              src={imgs.directora}
              className="img"
              alt=""
              width="300"
              height="280"
            />
            <h2>Sílvia Tomás</h2>
            <p>Directora Pedagógica</p>
          </div>

          <div>
            <img
              src={imgs.processing}
              className="img"
              alt=""
              width="300"
              height="280"
            />
            <h2>Anastácia da Silva</h2>
            <p>Educadora do Maternal I</p>
          </div>

          <div>
            <img
              src={imgs.deh}
              className="img"
              alt="criança-de-dois-anos"
              width="300"
              height="280"
            />
            <h2>Jéssica de oliveira</h2>
            <p>Educadora do Jardim II</p>
          </div>
        </div>
      </EquipeTag>

      <SectionTag>
        <div>
          <p>
            Temos como principal objectivo contribuir para o desenvolvimendo do
            seu filho.
          </p>
        </div>
      </SectionTag>

      <PacoteTag>
        <h1>Oferecemos os melhores planos</h1>

        <section>
          <div>
            <h2>Maternal I</h2>
            <p>
              Nesta secção a mensalidade está no valor de <strong>5.000</strong>{" "}
              mil kz com direito alimentação.
            </p>
          </div>

          <div>
            <h2>Maternal II</h2>
            <p>
              Nesta secção a mensalidade está no valor de <strong>6.500</strong>{" "}
              mil kz com direito alimentação.
            </p>
          </div>

          <div>
            <h2>Jardim I</h2>
            <p>
              Nesta secção a mensalidade está no valor de <strong>8.000</strong>{" "}
              mil kz com direito alimentação.
            </p>
          </div>

          <div>
            <h2>Jardim II</h2>
            <p>
              Nesta secção a mensalidade está no valor de <strong>8.500</strong>{" "}
              mil kz com direito alimentação.
            </p>
          </div>
        </section>
      </PacoteTag>

      <ContactoTag id="contacto">
        <div id="container">
          <div>
            <h1>Entre em contacto, estamos aguardando por você!</h1>
            <p>
              Venha conhecer o nosso Centro e nos deixe sugestões de melhorias
              das nossas actividades dentro e fora das nossas instalações.
            </p>

            <label>Mensagem</label>
            <textarea placeholder="Envie a sua menssagem" />
            <button type="submit">Enviar</button>
          </div>
          <img
            src={imgs.homemNegro}
            className="img"
            alt="criança-de-dois-anos"
            width="760"
            height="560"
          />
        </div>
      </ContactoTag>
      <Footer />
      <Rodape />
    </>
  );
}

export default Home;
