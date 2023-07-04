import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import * as Yup from "yup";
import { useRouter } from "next/router";
import axios from "axios";
import { Formik, Form, Field } from "formik";

const Register = () => {
  const initialValues = {
    email: "",
    password1: "",
    password2: "",
  };

  const registerValidationSchema = Yup.object({
    email: Yup.string()
      .nullable()
      .notRequired()
      .email("Geçerli bir email adresi giriniz.")
      .required("Email boş bırakılamaz."),
    password1: Yup.string()
      .required("Şifre boş bırakılamaz.")
      .min(8, "Şifre çok kısa - en az 8 karakter olmalıdır.")
      .matches(/[a-zA-Z]/, "Şifre Sadece Alfabetik karakterler içermelidir."),
    password2: Yup.string()
      .required("Şifre boş bırakılamaz.")
      .min(8, "Şifre çok kısa - en az 8 karakter olmalıdır.")
      .matches(/[a-zA-Z]/, "Şifre Sadece Alfabetik karakterler içermelidir."),
  });

  const router = useRouter();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8001/api/register/",
        values,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      if (response.status === 201) {
        router.push("/login");
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
                      <h2 className={styles.login_style}>Üye Ol</h2>
                      <span>
                        {" "}
                        <small>veya</small>
                      </span>
                      <Link href={"/login"}>
                        {" "}
                        <small className="text-success">Giriş Yap</small>
                      </Link>

                      <div className=" mt-2">
                        <label className="font-weight-normal text-muted">
                          {" "}
                          <small> EMAIL</small>
                        </label>
                        <Field
                          className={styles.input}
                          id="email"
                          type="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                        />
                        {errors.email && touched.email ? (
                          <div className="fs-6 text-danger">{errors.email}</div>
                        ) : null}
                      </div>
                      <div className="mt-3">
                        <label className="font-weight-normal text-muted">
                          {" "}
                          <small>PASSWORD</small>{" "}
                        </label>
                        <Field
                          className={styles.input}
                          id="password1"
                          type="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password1}
                        />
                        {errors.password1 && touched.password1 ? (
                          <div className="fs-6 text-danger">
                            {errors.password1}
                          </div>
                        ) : null}
                      </div>
                      <div className="mt-3 mb-1">
                        <label className="font-weight-normal text-muted">
                          {" "}
                          <small>PASSWORD TEKRAR</small>{" "}
                        </label>
                        <Field
                          className={styles.input}
                          id="password2"
                          type="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password2}
                        />
                        {errors.password2 && touched.password2 ? (
                          <div className="fs-6 text-danger">
                            {errors.password2}
                          </div>
                        ) : null}
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <button
                          className="btn btn-dark rounded-pill ps-5 pe-5 px-3 py-3 mt-2"
                          style={{ color: "#57b846" }}
                          type="submit"
                          id="button"
                          disabled={
                            errors.password1 && errors.email ? true : false
                          }
                        >
                          Üye Ol
                        </button>
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

export default Register;
