import React, { useEffect } from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import api from "./../../api/api";
import { AxiosError } from "axios";
import Button from "../../../src/components/Button";
import HeaderSub from "../../components/HeaderSub";
import Rodape from "../../components/Rodape";
//import * as imgs from "../../assets";
import { ContainerTag } from "./style";
import moment from "moment";

import styled from "styled-components";

const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  &::-webkit-file-upload-button {
    visibility: hidden;
  }
  /* Estilize o botão de upload */
  &::before {
    content: "Selecionar arquivo";
    display: inline-block;
    padding: 8px 15px;
    background-color: #00aacc;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;

let limiteTime = "2024-04-28 12:30:00";

function Inscricao() {
  const navigate = useNavigate();

  // Rota para acessar apenas com o cadastrado
  useEffect(() => {
    /*
     if (!sessionStorage.getItem("user-name")) {
      navigate("/login");
    } 
    */
  }, [navigate]);

  const SignupSchema = Yup.object().shape({
    nomeDoPai: Yup.string()
      .min(5, "o nome deve ter pelo menos 5 caracteres")
      .max(50)
      .required("Insira o nome do pai"),
    nomeDaMae: Yup.string()
      .min(5, "o nome deve ter pelo menos 5 caracteres")
      .max(50)
      .required("Insira o nome da mãe"),
    nomeDaCrianca: Yup.string()
      .min(5, "o nome deve ter pelo menos 30 caracteres")
      .max(50, "Too Long!")
      .required("Insira o nome da crianca"),
    genero: Yup.string().required("Escolhe uma opção"),
    email: Yup.string().email("Email inválido").required("Insira um email válido"),
    idade: Yup.date().test(
      "idade",
      "Deve estar entre 2 a 5 anos",
      function (value) {
        const idade = moment().diff(moment(value), "years");
        return idade >= 2 && idade <= 5;
      }
    ),
    telefone: Yup.string().required("Insira um contacto telefónico válido"),
    possuiNecessidadeEspecial: Yup.string().required("Escolhe uma opção"),
    //BIDoEncarregado: Yup.string().required("Faça o upload do BI"),
    //cedulaDeNascimentoDaCrianca: Yup.string().required("Faça o upload da cédula da criança"),
    //declaracaoTrabalho: Yup.string().required("Faça o upload da declaracao de trabalho"),
  });

  const addInscricao = async (values) => {   
    try {   
      const formdata = new FormData();
      formdata.append("nomeDoPai", values.nomeDoPai);
      formdata.append("nomeDaMae", values.nomeDaMae);
      formdata.append("nomeDaCrianca", values.nomeDaCrianca);
      formdata.append("genero", values.genero);
      formdata.append("email", values.email);
      formdata.append("idade", values.idade);
      formdata.append(
        "descricaoDaNecessidadeEspecial",
        values.descricaoDaNecessidadeEspecial   
      );
      formdata.append(
        "telefone",
        values.telefone
      );
      formdata.append(
        "possuiNecessidadeEspecial",
        values.possuiNecessidadeEspecial
      );

      if (values.BIDoPai) {    
        formdata.append("BIDoPai", values.BIDoPai);   
      }
      if (values.BIDaMae) {     
        formdata.append("BIDaMae", values.BIDaMae);     
      }
      if (values.cedulaDeNascimentoDaCrianca) {    
        formdata.append(
          "cedulaDeNascimentoDaCrianca",
          values.cedulaDeNascimentoDaCrianca  
        );
      }
      if (values.declaracaoTrabalho) {  
        formdata.append("declaracaoTrabalho", values.declaracaoTrabalho);  
      }

      await api.post("/inscricao", formdata);

      notify();
      setTimeout(() => {   
        navigate("/");
      }, 4000);
    }  
    catch (error) {
      if (error instanceof AxiosError && error.response?.data.message) { 
        notifyError(error.response?.data.message); 
        //toast.error(error);
      } else {
        notifyError(error.response?.data.message); 
      }
    }
  }; 

  function notify() {
    toast.success("Inscrição feita com sucesso");
  }

  function notifyError(message) {
    toast.error(`${message}`);
  }

  const renderError = (message) => <span className="error">{message}</span>;

  return (
    <>
      <HeaderSub />
      <ContainerTag>
        <ToastContainer position="top-center" reverseOrder={false} />
        <div id="text">
          <h1>
            Faça a <strong>Inscrição</strong> do seu educando 
            preenchendo o formulário{" "}
          </h1>
          <p>
            A inscrição deve ser feita apenas com os dados 
            dos encarregados de educação.
          </p>
          <div className="foreground"></div>
        </div>

          
        {moment(limiteTime).diff(moment())  <= 1 ? (
          <div className=" endedtime">
            <span>As inscrições se encontram encerradas</span>
          </div>
        ) : (
          <div className="form">
            <Formik
              initialValues={{
                nomeDoPai: "",
                nomeDaMae: "",
                nomeDaCrianca: "",
                genero: "",
                email: "",
                idade: "",
                telefone: "",
                possuiNecessidadeEspecial: "Nao",
                descricaoDaNecessidadeEspecial: "Sem necessidade especial",
                BIDoPai: null,
                BIDaMae: null,
                cedulaDeNascimentoDaCrianca: null,
                declaracaoTrabalho: null,
              }}
              validationSchema={SignupSchema}
              onSubmit={async (values, { resetForm }) => {
                await addInscricao(values);
                resetForm();
              }}
            >
              {({
                errors,
                isValid,
                isSubmitting,
                resetForm,
                setFieldValue,
                values,
              }) => (
                <Form className="form" encType="multipart/form-data">
                  <div className="container" style={{ paddingBottom: "0px" }}>
                    <div className="form-control">
                      <label>Nome do Pai*</label>
                      <Field
                        name="nomeDoPai"
                        type="text"
                        placeholder="Nome do Pai"
                      />
                      <ErrorMessage name="nomeDoPai" render={renderError} />
                    </div>

                    <div className="form-control">
                      <label>Nome do Mãe*</label>
                      <Field
                        name="nomeDaMae"
                        type="text"
                        placeholder="Nome da Mãe"
                      />
                      <ErrorMessage name="nomeDaMae" render={renderError} />
                    </div>

                    <div className="form-control">
                      <label>Nome da Criança*</label>
                      <Field
                        name="nomeDaCrianca"
                        type="text"
                        placeholder="Nome da criança"
                      />
                      <ErrorMessage name="nomeDaCrianca" render={renderError} />
                    </div>

                    <div className="form-control">
                      <label>Gênero*</label>
                      <Field as="select" name="genero">
                        <option value="" id="option">
                          Gênero
                        </option>
                        <option value="masculino">Masculino</option>
                        <option value="femenino">Femenino</option>
                      </Field>
                      <ErrorMessage name="genero" render={renderError} />
                    </div>

                    <div className="form-control">
                      <label>Email*</label>
                      <Field name="email" type="email" placeholder="Email" />
                      <ErrorMessage name="email" render={renderError} />
                    </div>

                    <div className="form-control">
                      <label>Contacto Telefónico*</label>
                      <Field
                        name="telefone"
                        type="text"
                        placeholder="Contacto"
                      />
                      <ErrorMessage name="telefone" render={renderError} />
                    </div>

                    <div className="form-control">
                      <label>Data de nascimento*</label>
                      <Field name="idade" type="date" />
                      <ErrorMessage name="idade" render={renderError} />
                    </div>

                    <div className="form-control">
                      <label className="form-label">
                        Possui Necessidade Especial*
                      </label>
                      <div className="radio-options">
                        <div className="radio-option">
                          <Field
                            name="possuiNecessidadeEspecial"
                            type="radio"
                            value="Nao"
                            id="nao"
                            className="radio-input"
                          />
                          <label htmlFor="nao" className="radio-label">
                            Não
                          </label>
                        </div>
                        <div className="radio-option">
                          <Field
                            name="possuiNecessidadeEspecial"
                            type="radio"
                            value="Sim"
                            id="sim"
                            className="radio-input"
                          />
                          <label htmlFor="sim" className="radio-label">
                            Sim
                          </label>
                        </div>
                      </div>
                      <ErrorMessage
                        name="possuiNecessidadeEspecial"
                        render={renderError}
                        className="error-message"
                      />
                    </div>
                  </div>

                  {values.possuiNecessidadeEspecial === "Sim" && (
                    <div className="form-control form-control-full">
                      <label>Descrição da necessidade especial</label>
                      <Field
                        as="textarea"
                        name="descricaoDaNecessidadeEspecial"
                        placeholder="Descreva a necessidade especial"
                        className="custom-textarea"
                      />
                    </div>
                  )}

                  <div className="container" style={{ paddingTop: "0px" }}>
                    <div className="form-control">
                      <label>Cédula de nascimento da criança*</label>
                      {/* <Field name="cedulaDeNascimentoDaCrianca" type="file"  /> */}
                      <StyledInput
                        type="file"
                        name="cedulaDeNascimentoDaCrianca"
                        onChange={(e) => {
                          setFieldValue(
                            "cedulaDeNascimentoDaCrianca",
                            e.target.files[0]
                          );
                        }}
                      />
                      <ErrorMessage
                        name="cedulaDeNascimentoDaCrianca"
                        render={renderError}
                      />
                    </div>

                    <div className="form-control">
                      <label>Bilhete de identidade do Pai*</label>
                      {/*  <Field name="BIDoEncarregado" type="file" /> */}
                      <StyledInput
                        type="file"
                        name="BIDoPai"
                        onChange={(e) => {
                          setFieldValue("BIDoPai", e.target.files[0]);
                        }}
                      />
                      <ErrorMessage name="BIDoPai" render={renderError} />
                    </div>

                    <div className="form-control">
                      <label>Bilhete de identidade da Mãe*</label>
                      {/*  <Field name="BIDoEncarregado" type="file" /> */}
                      <StyledInput
                        type="file"
                        name="BIDaMae"
                        onChange={(e) => {
                          setFieldValue("BIDaMae", e.target.files[0]);
                        }}
                      />
                      <ErrorMessage name="BIDaMae" render={renderError} />
                    </div>

                    <div className="form-control">
                      <label>Declaração de trabalho*</label>
                      {/*  <Field name="declaracaoTrabalho" type="file" /> */}
                      <StyledInput
                        type="file"
                        name="declaracaoTrabalho"
                        onChange={(e) => {
                          setFieldValue(
                            "declaracaoTrabalho",
                            e.target.files[0]
                          );
                        }}
                      />
                      <ErrorMessage
                        name="declaracaoTrabalho"
                        render={renderError}
                      />
                    </div>
                  </div>

                  <div style={{ padding: "25px" }}>
                    <div className="form-control">
                      <Button isSubmiting={isSubmitting} />
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        )}
      </ContainerTag>
      <Rodape />
    </>
  );
}

export default Inscricao;
