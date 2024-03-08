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
import { useParams } from "react-router";

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


function Matricula() {
  const navigate = useNavigate();
  const params = useParams();

  
  useEffect(() => {

   
    /* if (!sessionStorage.getItem("user-name")) {
      navigate("/login");
    } */
  }, [navigate]);

  const SignupSchema = Yup.object().shape({
    moradaCrianca: Yup.string().required("A morada é obrigatário"),
  });

  const addInscricao = async (values) => {
    try {
      const formdata = new FormData();
      formdata.append("moradaCrianca", values.moradaCrianca);
       formdata.append("inscricaoID", values.inscricaoID);
    
      if (values.fotografiaCrianca) {
        formdata.append("fotografiaCrianca", values.fotografiaCrianca);
      }
      if (values.comprovativoPagamento) {
        formdata.append("comprovativoPagamento", values.comprovativoPagamento);
      }
     
      await api.post("/matricula", formdata);

      notify();
      setTimeout(() => {
        navigate("/");
      }, 4000);
    } catch (error) {
      if (error instanceof AxiosError && error.response?.data.message) {
        notifyError(error.response?.data.message);
        // toast.error(error);
      } else {
        notifyError(error.response?.data.message);
      }
    }
  };

  function notify() {
    toast.success("Matrícula feita com sucesso");
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
            Faça a <strong>Matrícula</strong> do seu educando{" "}
          </h1>

          <div className="foreground"></div>
        </div>
        <div>
          <Formik
            initialValues={{
              moradaCrianca: "",
              fotografiaCrianca: null,
              comprovativoPagamento: null,
              inscricaoID: params.id,
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
                <div className="form-control">
                  <label>Morada da criança*</label>
                  <Field
                    name="moradaCrianca"
                    type="text"
                    placeholder="Morada da criança"
                  />
                  <ErrorMessage name="moradaCrianca" render={renderError} />
                </div>

                <div className="form-control">
                  <label>Comprovativo de pagamento*</label>
                  <StyledInput
                    type="file"
                    name="comprovativoPagamento"
                    onChange={(e) => {
                      setFieldValue("comprovativoPagamento", e.target.files[0]);
                    }}
                  />
                  <ErrorMessage
                    name="comprovativoPagamento"
                    render={renderError}
                  />
                </div>

                <div className="form-control">
                  <label>Fotografia da criança*</label>
                  <StyledInput
                    type="file"
                    name="fotografiaCrianca"
                    onChange={(e) => {
                      setFieldValue("fotografiaCrianca", e.target.files[0]);
                    }}
                  />
                  <ErrorMessage name="fotografiaCrianca" render={renderError} />
                </div>

                <div className="form-control">
                  <Button isSubmiting={isSubmitting} />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </ContainerTag>
      <Rodape />
    </>
  );
}

export default Matricula;
