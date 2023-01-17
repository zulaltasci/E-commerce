import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <div className="row mb-5 d-flex justify-content-center">
          <div className="col-10">
            <div className="row ">
              <div className="col-6 d-flex flex-column align-items-end">
                {/* <span className={styles.shopMan}>Shop Men</span> */}
                <div>
                  <img
                    className={styles.img_man}
                    src="https://static.wixstatic.com/media/ebd955_59f6850fd65c448ea93b1db254ee4bb2~mv2_d_3744_5615_s_4_2.png/v1/crop/x_0,y_132,w_3744,h_5351/fill/w_514,h_770,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/ebd955_59f6850fd65c448ea93b1db254ee4bb2~mv2_d_3744_5615_s_4_2.png"
                  />
                </div>
                <div className="mt-3">
                  {" "}
                  <span className=" fs-5 fw-semibold ">Shop Man</span>
                </div>
              </div>
              <div className="col-6 ">
                <div>
                  {" "}
                  <img
                    className={styles.img_man}
                    src="https://static.wixstatic.com/media/ebd955_7e944e84dee44943983e589c702efb5b~mv2_d_3425_5446_s_4_2.png/v1/crop/x_72,y_80,w_3258,h_4897/fill/w_514,h_770,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/ebd955_7e944e84dee44943983e589c702efb5b~mv2_d_3425_5446_s_4_2.png"
                  />
                </div>
                <div className="mt-3">
                  {" "}
                  <span className=" fs-5 fw-semibold">Shop Woman</span>
                </div>
                {/* <span className={styles.shopWoman}>Shop Women</span> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div
          className="row"
          style={{
            backgroundColor: "#FFC924",
            marginTop: "100px ",
          }}
        >
          <h4 className="text-center" style={{ marginTop: "100px" }}>
            MOST WANTED ITEMS
          </h4>
          <div className="col-8 offset-2 mt-5">
            <div className="row">
              <div className="col-12 col-md-4">
                <a href="">
                  {" "}
                  <img
                    className="w-100"
                    src="https://static.wixstatic.com/media/ebd955_7419812472024c998ed8bb4f890c3238~mv2_d_2000_2000_s_2.png/v1/fill/w_378,h_378,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ebd955_7419812472024c998ed8bb4f890c3238~mv2_d_2000_2000_s_2.png"
                    alt=""
                  />
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      marginTop: "20px",
                    }}
                  >
                    <span>T-shirt</span> <br />
                    <span>190.99 TL</span>
                  </div>
                </a>
              </div>
              <div className="col-12 col-md-4">
                <a href="">
                  {" "}
                  <img
                    className="w-100"
                    src="https://static.wixstatic.com/media/ebd955_915f8ab149a14b06a487f745a8730838~mv2_d_2000_2000_s_2.png/v1/fill/w_378,h_378,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ebd955_915f8ab149a14b06a487f745a8730838~mv2_d_2000_2000_s_2.png"
                    alt=""
                  />
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      marginTop: "20px",
                    }}
                  >
                    <span>Gömlek</span> <br />
                    <span>690.99 TL</span>
                  </div>
                </a>
              </div>
              <div className="col-12 col-md-4">
                <a href="">
                  <img
                    className="w-100"
                    src="https://static.wixstatic.com/media/ebd955_58f728f8436040a896df0c6c4292fb07~mv2_d_1800_1800_s_2.png/v1/fill/w_378,h_378,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ebd955_58f728f8436040a896df0c6c4292fb07~mv2_d_1800_1800_s_2.png"
                    alt=""
                  />
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      marginTop: "20px",
                    }}
                  >
                    <span>Hoodie</span> <br />
                    <span>490.99 TL</span>
                  </div>
                </a>
              </div>
              <div className="col-12 col-md-4 mt-5">
                <a href="">
                  {" "}
                  <img
                    className="w-100"
                    src="https://static.wixstatic.com/media/ebd955_3f1610f0bbde41d28857d95a58fe8f44~mv2_d_1600_1600_s_2.png/v1/fill/w_378,h_378,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ebd955_3f1610f0bbde41d28857d95a58fe8f44~mv2_d_1600_1600_s_2.png"
                    alt=""
                  />
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      marginTop: "20px",
                    }}
                  >
                    <span>Çorap</span> <br />
                    <span>90.99 TL</span>
                  </div>
                </a>
              </div>
              <div className="col-12 col-md-4 mt-5">
                <a href="">
                  {" "}
                  <img
                    className="w-100"
                    src="https://static.wixstatic.com/media/ebd955_0ed18ce0b9004035bb65dc60f65867b6~mv2.png/v1/fill/w_378,h_378,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ebd955_0ed18ce0b9004035bb65dc60f65867b6~mv2.png"
                    alt=""
                  />
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      marginTop: "20px",
                    }}
                  >
                    <span>Telefon Kılıfı</span> <br />
                    <span>190.99 TL</span>
                  </div>
                </a>
              </div>
              <div className="col-12 col-md-4 mt-5">
                <a href="">
                  {" "}
                  <img
                    className="w-100"
                    src="https://static.wixstatic.com/media/ebd955_564156beb44d40db8a5f6f03bb3ca4dc~mv2_d_2000_2000_s_2.png/v1/fill/w_378,h_378,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ebd955_564156beb44d40db8a5f6f03bb3ca4dc~mv2_d_2000_2000_s_2.png"
                    alt=""
                  />
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      marginTop: "20px",
                    }}
                  >
                    <span>Elbise</span> <br />
                    <span>990.99 TL</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <h5 className="text-center mt-5" style={{ marginBottom: "70px" }}>
            <a href="" style={{ textDecoration: "underline" }}>
              Shop All Items
              <svg
                preserveAspectRatio="xMidYMid meet"
                data-bbox="14.5 55 171.1 90"
                viewBox="14.5 55 171.1 90"
                height="40"
                width="40"
                xmlns="http://www.w3.org/2000/svg"
                data-type="color"
                role="presentation"
                aria-hidden="true"
                className="m-1"
              >
                <g>
                  <path
                    d="M179.3 76.6c-3.9-1.6-9.6-2.5-19.7-3.2-24.6-1.4-25-1.5-36.5-3.4-5.7-6.7-9.9-9.8-15.6-11.1-1.4-.3-2.7-.6-3.8-.9-2-.4-3.6-.8-4.8-1.1l-.4-.1c-6.9-1.6-7.7-1.8-11.9-1.8-4.8 0-10.3 1-15.1 2.9-5.8 2.5-15.9 8.6-20.4 12.4-2.9 2.6-3.6 3-5.3 3.2-5.1-5.1-7.1-6.4-12.4-6.4-.7 0-.7 0-6.8.4-3.5.2-4.8.6-6.6 2.3-3.8 3.5-5.5 11.2-5.5 24.2 0 14.2 2.2 26.3 6 33.3 1.8 3.1 5 3.7 9.9 3.7 3.6 0 9.1-.5 10.9-1.2 1.5-.6 2.9-1.5 4.7-3.3 3.5 1.4 5 2.3 9.7 5.2 15.3 9.3 21 11.6 28.8 11.6 2.5 0 4.2 0 8.4-.3 4.1 1.4 7 2 9.1 2 6.1 0 11.7-4.8 11.7-10v-.2c.7.2 1.4.3 2.1.3 6.9 0 12.8-6.3 12.8-13.7 0-1.3-.1-2.3-.5-3.7 6.1-1.2 10.2-6.1 10.2-12.5 0-2.8-.4-4.5-1.6-6.9h17.7c16.1 0 22.1-.8 26.5-3.8 3.2-2.1 4.7-4.8 4.7-8.3-.1-3.9-2.6-7.8-6.3-9.6zM128.9 79c2.2.2 5.4.5 9.5.8l9.9.8c11.8.9 19.3 1.6 22.5 1.9 1 .1 1.6.1 1.7.1 2.3.5 4.9 1.6 4.9 3.8 0 .5-1.2 1.9-2.9 2.4-3 .9-12.5 1.2-35 1.2h-6.2c-.5-3.7-1.7-6.9-4.4-11zM89.6 97.7l.1-.1s0 .1-.1.1zm31.7-4.7c-4.4 0-8.1-2.3-11.3-7.1-1.7-2.4-2-2.5-5.4-3.7-4.2-1.7-4.3-1.7-6.3-2.3l-1-.3-.6.8c-3.3 4.2-7.2 7.7-13.1 11.4-4.5 3-9.2 4.2-16.2 4.2h-.8c-5.5-.6-5.5-.6-5.8-.6-2.3 0-3.9 1.4-3.9 3.6 0 3 3.6 5.1 9 5.1 3.4 0 11.1-1.1 14.1-1.9 1.4-.4 2.3-.8 4.2-1.8-1.9 1.8-3 4.3-3 7.3 0 .5.1 1.1.2 1.7-5.2.9-8.7 5.3-8.7 11.3 0 4.5 2.4 8.9 7.8 13.9-4.3-1-8.6-3-13.7-6.1L55.2 122c-5.6-2.6-5.7-2.7-8.5-4.4-2.1-3-2.7-4.6-3.4-9-.5-2.6-.9-6.6-.9-8.5 0-.6.1-3 .2-5.4.1-2.7.2-5.4.2-6 .3-3.5.4-4.3 1.4-6.6.2.1.5.1.7.1 3 0 5.9-1.3 10.4-4.9 5.1-3.9 14-9.3 18.6-11.4 4.3-1.9 8.3-2.8 12.5-2.8 2.5 0 7.8 1 14.3 2.7 9.6 2.7 11.8 4.1 16.8 11.2 4.4 6 7.7 12.6 7.7 13.9 0 1.5-2 2.1-3.9 2.1zm-37.5 24.8c.5 0 .8 0 2.1 1.3 1.6 1.7 4.1 3.6 8.7 6.5 7.5 4.5 7.5 4.5 8.7 5.5 1.6 1.5 2.4 2.5 2.4 3.3 0 1.5-2 2.7-4.4 2.7-3.7 0-8.2-2.3-13.7-7-4.2-3.7-6.7-7.5-6.7-9.8-.1-1.3 1.4-2.5 2.9-2.5zm9.1-12.7c1.5 0 1.8 0 6.8 3.1 2.4 1.5 11.9 6.3 16.9 8.5 1.9.9 3.6 3.7 3.6 5.2 0 2.3-2.2 4.5-4.4 4.5-2.6 0-6.9-1.9-13.9-6-9.1-5.5-12.9-8.8-12.9-11.5 0-1.9 1.9-3.8 3.9-3.8zM97 93.3c0-1.5 2.4-3.9 4.3-3.9.7 0 1 0 2.5 2.3 2.2 3.3 5.9 6.5 8.5 7.6 3.2 1.2 6.7 1.9 9.4 1.9 2.2 0 3.7-.4 6.1-1.4.6.8 1.5 2.3 1.8 3.3.3.6.6 1.8.6 2.2 0 2.6-2.5 5-5.2 5-1.3 0-7.5-1.9-11.2-3.6-.2-.1-1.4-.6-10.2-5.6-5.9-3.4-6.6-6.1-6.6-7.8zm-59.5 24.5c.8 2 1.5 3.6 1.6 3.9-.8.7-6.7.7-9.2.7-2.6 0-2.8-.1-3.8-2.7-2.6-6.5-3.7-13.8-3.7-24.6 0-8 .7-15 1.7-17.8.5-1.3.9-1.8 4.6-1.8h3.9c1-.2 1.4-.2 2.1-.2 1.3 0 2.3.6 2.6.9l-2.9 20.2v.2c-.1 8.9 1.1 16.8 3.1 21.2z"
                    fill="#000016"
                    data-color="1"
                  ></path>
                </g>
              </svg>
            </a>
          </h5>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div
            className="col-md-6 col-12 d-flex justify-content-center"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/2567550/pexels-photo-2567550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            }}
          >
            <div
              style={{
                width: "70%",
                height: "60%",
                backgroundColor: "#FFC924",
                marginTop: "100px",
                padding: "40px",
                marginBottom: "100px",
              }}
            >
              <h1 style={{ fontSize: "2rem" }}>
                {" "}
                Sunshine <br /> State of Mind
              </h1>
              <a
                href="#"
                style={{
                  fontSize: "1.5rem",

                  textDecoration: "underline",
                }}
              >
                See Our Lookbook
              </a>
            </div>
          </div>
          <div
            className="col-md-6 col-12 d-flex justify-content-center"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/6965699/pexels-photo-6965699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            }}
          >
            <div
              style={{
                width: "70%",
                height: "60%",
                backgroundColor: "whitesmoke",
                marginTop: "100px",
                padding: "40px",
                marginBottom: "100px",
              }}
            >
              <h1 style={{ fontSize: "2rem" }}>
                {" "}
                Best Time for a Sale is Always
              </h1>
              <a
                href="#"
                style={{
                  fontSize: "1.5rem",

                  textDecoration: "underline",
                }}
              >
                Shop Sale Items
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-12">
            <h1
              className="text-center "
              style={{
                fontSize: "22px",
                fontWeight: "normal",
                marginTop: "50px",
              }}
            >
              #EQUALS
            </h1>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row d-flex justify-content-between mt-5 gy-3">
            <div className="col-6 col-md-3">
              <a href="">
                <img
                  className="w-100"
                  src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Urban%20Fashion%20Brand/01.jpg"
                />
              </a>
            </div>
            <div className="col-6 col-md-3">
              <a href="">
                {" "}
                <img
                  className="w-100"
                  src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Urban%20Fashion%20Brand/02.jpg"
                />
              </a>
            </div>
            <div className="col-6 col-md-3">
              <a href="">
                {" "}
                <img
                  className="w-100"
                  src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Urban%20Fashion%20Brand/03.jpg"
                />
              </a>
            </div>
            <div className="col-6 col-md-3">
              <a href="">
                {" "}
                <img
                  className="w-100"
                  src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Urban%20Fashion%20Brand/04.jpg"
                />
              </a>
            </div>
            <div className="col-6 col-md-3">
              <a href="">
                <img
                  className="w-100"
                  src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Urban%20Fashion%20Brand/05.jpg"
                />
              </a>
            </div>

            <div className="col-6 col-md-3">
              <a href="">
                <img
                  className="w-100"
                  src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Urban%20Fashion%20Brand/01.jpg"
                />
              </a>
            </div>
            <div className="col-6 col-md-3">
              <a href="">
                {" "}
                <img
                  className="w-100"
                  src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Urban%20Fashion%20Brand/02.jpg"
                />
              </a>
            </div>
            <div className="col-6 col-md-3">
              <a href="">
                {" "}
                <img
                  className="w-100"
                  src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Urban%20Fashion%20Brand/03.jpg"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
