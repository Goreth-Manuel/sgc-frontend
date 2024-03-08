import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ToastContainer, toast } from "react-toastify";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Button from "../../components/Button";
import api from "../../api/api";
import { LoginTag } from "./style";
import { useEffect } from "react";
//import { useAuth } from "../../core/zustand/auth";
// 1
function Login() {
  const navigate = useNavigate(); //1

  useEffect(() => {
    if(sessionStorage.getItem("user-name")){ //2
      navigate("/");  //3
    }
  }, [])
  
  const ValidateSchema = Yup.object().shape({  //4
    email: Yup.string().email("email inválido").required("Digite o seu email"),
    senha: Yup.string()
      .min(6, "A senha deve conter pelo menos 6 caracteres") 
      .max(50)
      .required("Digite a sua senha"), 
  });

  const handleSubmit = async (values) => {  //5
    try { //6
      
      const { data: userData } = await api.post("/auth/login", { //7
        email: values.email,
        senha: values.senha
      });

      sessionStorage.setItem("user-token", userData.token);
      sessionStorage.setItem("user-name", userData.username);

        notify();
        setTimeout(() => {  
          navigate("/");
        }, 2000);       
      } catch (error) { 
        
      if (error instanceof AxiosError && error.response?.data.message) { // 8
        notifyError(error.response?.data.message);  //9
      } else {
        notifyError(error.response?.data.message); // 10
      }  
    }
  };//11

  function notify() {
    toast.success("Login feito com sucesso"); //13
  }

  function notifyError(message) {  // 14
    toast.error(`${message}`);
  }

  const renderError = (message) => <span className="error">{message}</span>; // 13

  return (
    <LoginTag>
      <ToastContainer position="top-center" reverseOrder={false} />
      <section>
        <div id="form">
          <h1>SGC - Sistema de Gestão de Crianças</h1>

          <Formik
            initialValues={{
              email: "",
              senha: "",
            }}
            validationSchema={ValidateSchema}
            onSubmit={ async (values, { resetForm }) => {
              await handleSubmit(values);
              resetForm();
           }}
          >
            {({ errors, touched, isSubmitting, resetForm }) => (
              <>
                <Form className="form">
                  <div className="form-control">
                    <label>Email</label>
                    <br />
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
                    <br />
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
                    Não tem uma conta?
                    <a href="./Cadastro">Cadastro</a>
                  </p>
                </Form>
              </>
            )}
          </Formik>
        </div>
      </section>
    </LoginTag>
  );
}
export default Login;
