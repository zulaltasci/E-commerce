import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductDetail from "../../components/Product/ProductDetail";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useRouter } from "next/router";

const getProductData = async (productId) => {
  try {
    const response = await axios.get(
      `http://127.0.0.1:8001/products/${productId}/`
    );
    return response.data;
  } catch (error) {
    console.error("Ürün verileri getirilirken bir hata oluştu:", error);
    return null;
  }
};

const ProductPage = () => {
  const [productData, setProductData] = useState(null);
  const router = useRouter();
  const { productId } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      if (productId) {
        const data = await getProductData(productId);
        setProductData(data);
      }
    };

    fetchData();
  }, [productId]);

  return (
    <div>
      <Navbar />
      {productData && <ProductDetail productData={productData} />}
      <Footer />
    </div>
  );
};

export default ProductPage;
