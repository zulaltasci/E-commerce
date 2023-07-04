import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import styles from "../../styles/Home.module.css";

const ProductCard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get("http://127.0.0.1:8001/products/");
      setData(res.data);
      console.log(res.data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      {data &&
        data.map((product) => (
          <div key={product.id}>
            <Link href={`/products/${product.id}`}>
              {" "}
              {product.images && product.images.length > 0 ? (
                <Image
                  className={styles.img_man}
                  src={product.images[0].original}
                  alt="ceket"
                  width={378}
                  height={378}
                />
              ) : (
                <div>No Image</div>
              )}
              <div className="py-3">
                <span className="capitalize">{product.title}</span> <br />
                <span>{product.price.incl_tax}</span>
              </div>
            </Link>
          </div>
        ))}
    </>
  );
};

export default ProductCard;
