import { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { CiHeart } from "react-icons/ci";
import Link from "next/link";

const ProductDetail = ({ productData }) => {
  console.log(productData.children[0].title);

  const [selectedSize, setSelectedSize] = useState("");
  const [product, setProduct] = useState(productData.id);
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(productData.price.excl_tax || 0);
  const [user, setUser] = useState(1);
  const [address, setAddress] = useState(
    "456 Elm Street Los Angeles 90001 United States"
  );

  const handeSale = () => {
    const formData = {
      product,
      quantity,
      total,
      user,
      address,
    };

    axios
      .post("http://127.0.0.1:8001/sale/", formData)
      .then((response) => {
        console.log("İstek başarıyla gönderildi. Yanıt:", response.data);
      })
      .catch((error) => {
        console.error("İstek gönderilirken bir hata oluştu:", error);
      });

    console.log("Gönderilecek veri:", formData);
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const textWithTags = productData.description;
  const textWithoutTags = textWithTags.replace(/<\/?[^>]+(>|$)/g, "");
  return (
    <>
      <div className="mt-10 grid grid-cols-2 content-center ">
        <div className="flex justify-end">
          <Image
            src={
              productData.images[0].original && productData.images[0].original
            }
            width={500}
            height={500}
            alt="ceket"
          />
        </div>

        <div className="flex flex-col gap-3 justify-start px-5">
          <h1 className="text-5xl   text-gray-800 uppercase">
            {productData.title}
          </h1>
          <p className="text-lg  text-gray-600 ">
            {" "}
            {productData.price.excl_tax == null
              ? "399,99"
              : productData.price.excl_tax}
          </p>
          <span className="text-sm text-gray-400">Size</span>
          <select
            className="border border-black bg-transparent p-2 w-3/4"
            value={selectedSize}
            onChange={handleSizeChange}
          >
            <option value=""> Seç</option>
            {productData.children.map((child) => (
              <option key={child.id} value={child.title}>
                {child.title}
              </option>
            ))}
          </select>
          <span className="text-sm text-gray-400">Color</span>
          <div className="flex flex-row gap-3">
            <div className="rounded-full bg-blue-600 w-7 h-7"></div>
            <div className="rounded-full bg-blue-200 w-7 h-7"></div>
            <div className="rounded-full bg-orange-500 w-7 h-7"></div>
          </div>
          <span className="text-sm text-gray-400">Adet</span>
          <p>{textWithoutTags}</p>
          <input
            placeholder="1"
            disabled
            className="border border-black bg-transparent p-2 w-[20%]"
          />
          <div className="flex flex-row w-[75%] gap-3">
            <button className="bg-transparent text-black p-2 border-2 border-black w-5/6">
              Sepete Ekle
            </button>
            <button className="bg-transparent text-black  p-2 border-2 border-black w-1/6">
              <CiHeart className="inline-block" size={25} />
            </button>
          </div>

          <button
            className="bg-black text-white  p-2  w-[75%]"
            onClick={handeSale}
          >
            Şimdi Satın Al
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
