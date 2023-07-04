import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductSmall from "../components/Product/ProductSmall";
import ProductCardEquals from "../components/Product/ProductCardEquals";
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
      <ProductSmall />
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
            <h1 className="text-center text-3xl mt-5 ">#EQUALS</h1>
          </div>
        </div>

        <div className=" mt-5 gy-3">
          <div className="grid grid-cols-4 gap-4">
            <ProductCardEquals />
          </div>
          {/* <div className="col-6 col-md-3">
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
            </div> */}
        </div>
      </div>

      <Footer />
    </>
  );
}
