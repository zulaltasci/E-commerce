import { CiSearch } from "react-icons/ci";
import { UserContext } from "../context/UserContext";
import { useContext, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const getProductData = async () => {
  try {
    const response = await axios.get(`http://127.0.0.1:8001/api/categories/`);
    return response.data;
  } catch (error) {
    console.error("Hata:", error);
    return null;
  }
};

const Navbar = () => {
  const { categoriesData, setCategoriesData } = useContext(UserContext);
  const { loggedInUser } = useContext(UserContext);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getProductData();
      setCategoriesData(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="bg-[#fecbdf]">
        <div className="grid grid-cols-3 content-center justify-items-center h-14">
          <div className="flex justify-end items-end">
            <CiSearch className="inline-block" size={25} />
            <input
              type="search"
              className="bg-transparent border-0 outline-none text-black placeholder:text-gray-600"
              placeholder="Search..."
            />
          </div>
          <div>
            <p className="text-black">
              {" "}
              Sign up for our newsletter here & get 10% off
            </p>
          </div>
          <div>
            {loggedInUser ? (
              <span>{loggedInUser}</span>
            ) : (
              <Link href={"/login"} className="flex flex-row">
                <div>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-person-circle me-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path
                      fillRule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                    />
                  </svg>
                </div>
                <div>
                  {" "}
                  <span> Log In / Sign Up</span>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>

      <nav
        className="navbar "
        style={{ padding: "50px 0px 50px 0px" }}
        aria-label="Dark offcanvas navbar"
      >
        <div className="container-fluid d-flex align-items-center">
          <div
            className="offcanvas offcanvas-start "
            tabIndex="-1 "
            id="offcanvasNavbarDark"
            aria-labelledby="offcanvasNavbarDarkLabel"
          >
            <div className="offcanvas-header">
              <Link href="/">
                <h5 className="offcanvas-title" id="offcanvasNavbarDarkLabel">
                  Equals
                </h5>
              </Link>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                {categoriesData &&
                  categoriesData.map((category) => (
                    <li className="nav-item" key={category.slug}>
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        {category.name}
                      </a>
                    </li>
                  ))}
              </ul>
              <form className="d-flex mt-3" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbarDark"
            aria-controls="offcanvasNavbarDark"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link href="/">
            {" "}
            <h1 className="text-center text-4xl">EQUALS</h1>
          </Link>
          <a className="navbar-brand" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className="bi bi-basket2-fill"
              viewBox="0 0 16 16"
            >
              <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383L5.93 1.757zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1z" />
            </svg>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
