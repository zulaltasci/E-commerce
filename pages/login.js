import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

function login() {
  return (
    <>
      <div className={styles.font_raleway}>
        <div className={styles.form_div}>
          <div className="container ">
            <div className="row ">
              <div className="col-12">
                <form className="p-5">
                  <h2 className={styles.login_style}>ACCOUNT LOGIN</h2>
                  <span>
                    {" "}
                    <small>or </small>
                  </span>
                  <Link href={"/register"}>
                    {" "}
                    <small className="text-success">Sign up</small>
                  </Link>
                  <div className=" mt-5">
                    <label className="font-weight-normal text-muted">
                      {" "}
                      <small> EMAIL</small>
                    </label>
                    <input className={styles.input} id="email" type="email" />
                  </div>
                  <div className="mt-3">
                    <label className="font-weight-normal text-muted">
                      {" "}
                      <small>PASSWORD</small>{" "}
                    </label>
                    <input
                      className={styles.input}
                      id="password"
                      type="password"
                    />
                    <p className="fst-italic fw-light mt-1 ">
                      <small>Please choose a password.</small>
                    </p>
                  </div>
                  <div class="d-flex align-items-center justify-content-between ">
                    <Link href={"/"}>
                      <button
                        class="btn btn-dark rounded-pill ps-5 pe-5 px-3 py-3"
                        type="button"
                        id="button"
                      >
                        Login
                      </button>
                    </Link>
                    <a
                      class="inline-block align-baseline text-sm text-gray-500 hover:text-[#57B846] text-muted"
                      href="#"
                    >
                      <small> Forgot Password?</small>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default login;
