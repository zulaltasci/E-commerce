import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import * as Yup from "yup";
import { useRouter } from "next/router";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

const Login = () => {
  const { setLoggedInUser } = useContext(UserContext);
  const initialValues = {
    username: "",
    password: "",
  };

  const registerValidationSchema = Yup.object({
    username: Yup.string()
      .email("Geçerli bir email adresi giriniz.")
      .required("Email boş bırakılamaz."),
    password: Yup.string()
      .required("Şifre boş bırakılamaz.")
      .min(8, "Şifre çok kısa - en az 8 karakter olmalıdır.")
      .matches(/[a-zA-Z]/, "Şifre Sadece Alfabetik karakterler içermelidir."),
  });

  const router = useRouter();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8001/api/login/",
        values,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      if (response.status === 200) {
        setLoggedInUser(values.username);
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={registerValidationSchema}
      >
        {({
          errors,
          touched,
          handleSubmit,
          handleChange,
          handleBlur,
          values,
        }) => (
          <div className={styles.font_raleway}>
            <div className={styles.form_div}>
              <div className="container ">
                <div className="row ">
                  <div className="col-12">
                    <Form className="p-5" onSubmit={handleSubmit}>
                      <h2 className={styles.login_style}>Giriş Yap</h2>
                      <span>
                        {" "}
                        <small>veya</small>
                      </span>
                      <Link href={"/register"}>
                        {" "}
                        <small className="text-success">Üye Ol</small>
                      </Link>

                      <div className=" mt-2">
                        <label className="font-weight-normal text-muted">
                          {" "}
                          <small> EMAIL</small>
                        </label>
                        <Field
                          className={styles.input}
                          id="username"
                          type="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.username}
                        />
                        {errors.username && touched.username ? (
                          <div className="fs-6 text-danger">
                            {errors.username}
                          </div>
                        ) : null}
                      </div>
                      <div className="mt-3">
                        <label className="font-weight-normal text-muted">
                          {" "}
                          <small>PASSWORD</small>{" "}
                        </label>
                        <Field
                          className={styles.input}
                          id="password"
                          type="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                        />
                        {errors.password1 && touched.password1 ? (
                          <div className="fs-6 text-danger">
                            {errors.password1}
                          </div>
                        ) : null}
                      </div>

                      <div className="d-flex align-items-center justify-content-between">
                        {/* <Link href={"/"}> */}
                        <button
                          className="btn btn-dark rounded-pill ps-5 pe-5 px-3 py-3 mt-2"
                          style={{ color: "#57b846" }}
                          type="submit"
                          id="button"
                          disabled={
                            errors.password1 && errors.email ? true : false
                          }
                        >
                          Giriş Yap
                        </button>
                        {/* </Link> */}
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};

export default Login;
