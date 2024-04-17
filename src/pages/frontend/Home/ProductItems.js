import React from "react";
import { Link } from "react-router-dom";

const ProductItems = (props) => {
  const { product } = props;
  return (
    <div className="product-item border">
      <Link to={"/chi-tiet-san-pham/" + product.slug}>
        <img src="https://tse1.mm.bing.net/th?id=OIP.WquaX18eaJhr8bZ1ZYJIewHaKL&pid=Api&P=0&h=180" alt="..." className="img-fluid w-100" />
      </Link>
      <div className="productint4 p-3 " style={{ minHeight: "120px", overflow: "hidden" }}>
        <h2 className="fs-5 text-center text-success">{product.name}</h2>
        <div className="row">
          <div className="col-6">
            <strong className="text-danger">{product.price}VND</strong>
          </div>
          <div className="col-6">
            <button className="btn btn-success form-control">Them vao gio</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItems;
{/* <div className="product__item sale">
<div className="product__item__pic set-bg">
  <img
    className="d-block w-100"
    src="img/product/product-1.jpg"
  />
  <span className="label">Sale</span>
  <ul className="product__hover">
    <li>
      <a href="#">
        <img src="img/icon/heart.png" alt="" />
      </a>
    </li>
    <li>
      <a href="#">
        <img src="img/icon/compare.png" alt="" /> <span>Compare</span>
      </a>
    </li>
    <li>
      <a href="#">
        <img src="img/icon/search.png" alt="" />
      </a>
    </li>
  </ul>
</div>
<div className="product__item__text">
  <h6>ao a b</h6>
  <a href="#" className="add-cart">
    + Add To Cart
  </a>
  <div className="rating ">
    <i className="fa fa-star mx-1" />
    <i className="fa fa-star mx-1" />
    <i className="fa fa-star mx-1" />
    <i className="fa fa-star mx-1" />
    <i className="fa fa-star-o mx-1" />
  </div>
  <h5>12412412$</h5>
  <div className="product__color__select">
    <label htmlFor="pc-28">
      <input type="radio" id="pc-28" />
    </label>
    <label className="active black" htmlFor="pc-29">
      <input type="radio" id="pc-29" />
    </label>
    <label className="grey" htmlFor="pc-30">
      <input type="radio" id="pc-30" />
    </label>
  </div>
</div>
</div> */}

