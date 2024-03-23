import Slider from "./Slider.js";
import Service from "./Service.js";
import Recommend from "./Recommend.js";
import Listproduct from "./Listproduct.js";
import Voucher from "./Voucher.js";
import NewProduct from "./Newproduct.js"
import Blog from './Blog.js';
import Category from "./Category.js";
import Product2 from "./Product2.js";
import Memory from "./Memory.js";
import Video from "./Videos.js";
const LayoutFrontend = () => {
  return (  
    <>
      <Slider />
      <Service />
      <Category />
      <Recommend />
      <Listproduct />
      <Voucher />
      <NewProduct />
      <div className="tqh-banner row mx-3 py-4">
        <h1 className="row my-4">Set sản phẩm nổi bật</h1>
        <div className="col-md-4">
          <img
            className="img-fluid rounded-4"
            src="https://bizweb.dktcdn.net/100/491/897/themes/915864/assets/image_set_1.png?1706431926539"
            alt=""
          />
        </div>
        <div className="col-md-4">
          <img
            className="img-fluid rounded-4"
            src="https://bizweb.dktcdn.net/100/491/897/themes/915864/assets/image_set_2.png?1706431926539"
            alt=""
          />
        </div>
        <div className="col-md-4">
          <img
            className="img-fluid rounded-4"
            src="https://bizweb.dktcdn.net/100/491/897/themes/915864/assets/image_set_3.png?1706431926539"
            alt=""
          />
        </div>
      </div>
      <Listproduct />
      <div class="tqh-banner row mx-3 py-4"><div class="col-md-6">
        <img class="img-fluid rounded-4" src="https://bizweb.dktcdn.net/100/491/897/themes/915864/assets/banner1.png?1706431926539" alt="" />
      </div>
        <div class="col-md-6 ">
          <img class="img-fluid rounded-4" src="https://bizweb.dktcdn.net/100/491/897/themes/915864/assets/banner2.png?1706431926539" alt="" />
        </div>
      </div>
      <Product2 />
      <div className="tqh-video mt-5">
        <div className="container">
          <div className="row">
            <h3 className="px-0">SPECIAL COLLECTIONS</h3>
          </div>
          <div className="row">
            <Video />
          </div>
        </div>
      </div>
      <Blog />
      <Memory />
    </>

  );
};

export default LayoutFrontend;
