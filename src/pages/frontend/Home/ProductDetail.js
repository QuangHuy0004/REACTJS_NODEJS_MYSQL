import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductService from "../../../services/ProductServices";
import ProductItems from "./";
const ProductDetail = () => {
  let { slug } = useParams();
  const [product, setProduct] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await ProductService.detail(slug, 4);
      setProduct(result.product);
      setProducts(result.products);
    })();
  }, []);
  
  return (
    <section className="maincontent mb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src="https://tse1.mm.bing.net/th?id=OIP.WquaX18eaJhr8bZ1ZYJIewHaKL&pid=Api&P=0&h=180" alt="..." className="img-fluid w-100" />
          </div>
          <div className="col-md-6">
            <h1>{product.name}</h1>
            <h2>{product.price}</h2>
            <p>Mo ta san pham</p>
            <input type="number" />
            <button>Them vao gio hang</button>
          </div>
        </div>
        <h2 className="text-success">CHI TIET SAN PHAM</h2>
        <div className="row">
          <div className="col-12">
            <p>{product.detail}</p>
          </div>
        </div>
        <h2 className="text-success">San pham khac</h2>
        <div className="row">
          <div className="row">
            {products &&
              products.lenth > 0 &&
              products.map((product, index) => {
                return (
                  <div className="col-6 col-md-3">
                    <ProductItems product={product} key={index} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;