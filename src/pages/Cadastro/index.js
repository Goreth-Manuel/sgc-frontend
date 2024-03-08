import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../../components/Button";
import api from "./../../api/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { DivMain } from "./style";
import { useEffect}  from "react";

function Cadastro() {

  const navigate = useNavigate();
  const ValidateSchema = Yup.object().shape({
    nome: Yup.string()
      .min(8, "o nome deve ter pelo menos 8 caracteres")
      .max(50)
      .required("Digite o seu nome"),
    email: Yup.string().email("email inválido").required("Digite o seu email"),
    senha: Yup.string()
      .min(6, "A senha deve conter pelo menos 6 caracteres")
      .max(50)
      .required("Digite a sua senha"),
  });

  useEffect(() => {
    if(sessionStorage.getItem("user-name")){
      navigate("/");
    }
  }, [])

  // Declarar a variável para receber a mensagem

  // receber os dados dos campos do formulário
  // Executar a função quando o usuário clicar no botão do formulário

  const addUsuario = async (values) => {
    // Bloquear o recarregamento da página
   // console.log(values);

    // Criar a constante com os dados do cabeçalho

    try {
      const { data: userData } = await api.post("/auth/register", {
        nome: values.nome,
        email: values.email,
        senha: values.senha,
        perfil: "user"
      });

      sessionStorage.setItem("user-token", userData.token);
      sessionStorage.setItem("user-name", userData.newUser.nome);

      notify();
      setTimeout(() => {
        navigate("/");
      }, 4000);
    } catch (error) {
       if(error instanceof AxiosError && error.response?.data.message) {
        notifyError(error.response?.data.message);
       // toast.error(error);
       }else{
         notifyError(error.response?.data.message);
       }
    }
  };

  function notify() {
    toast.success("Cadastro feito com sucesso")
  }

  function notifyError(message) {
    toast.error(`${message}`)
  }


  const renderError = (message) => <span className="error">{message}</span>;

  return (
    <>
      <DivMain>
      <ToastContainer position="top-center" reverseOrder={false} />
        <section>
          <div id="form">
            <h1>SGC - Sistema de Gestão de Crianças</h1>

            <Formik
              initialValues={{
                nome: "",
                email: "",
                senha: "",
              }}
              validationSchema={ValidateSchema}
              onSubmit={ async (values, { resetForm }) => {
                 await addUsuario(values);
                 resetForm();
              }}
            >
              {({ errors, isValid, isSubmitting, resetForm }) => (
                <Form className="form" >
                  <div className="form-control">
                    <label>Nome</label>
                    <Field
                      className="col"
                      type="text"
                      name="nome"
                      placeholder="nome"
                    />
                    <ErrorMessage name="nome" render={renderError} />
                  </div>
                  <div className="form-control">
                    <label>Email</label>
                    <Field
                      className="col"
                      type="text"
                      name="email"
                      placeholder="email"
                    />
                    <ErrorMessage name="email" render={renderError} />
                  </div>
                  <div className="form-control">
                    <label>Senha</label>
                    <Field
                      className="col"
                      type="password"
                      name="senha"
                      placeholder="senha"
                    />
                    <ErrorMessage name="senha" render={renderError} />
                  </div>
                 
                  <div className="form-control">
                    <Button isSubmiting={isSubmitting} />
                  </div>
                  <p>
                    Já tem uma conta?
                    <a href="./Login">Login</a>
                  </p>
                </Form>
              )}
            </Formik>
          </div>
        </section>
      </DivMain>
    </>
  );
}

export default Cadastro;
