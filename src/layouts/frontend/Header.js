import { Link } from "react-router-dom";
import MainMenu from "./MainMenu";
const Header = () => {
  return (
    <>
      <section className="header">
        <div className="header__top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-7">
                <div className="header__top__left">
                  <p>Free shipping, 30-day return or refund guarantee.</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-5">
                <div className="header__top__right">
                  <div className="header__top__links">
                    <Link to="#">Sign in</Link>
                    <Link to="#">FAQs</Link>
                  </div>
                  <div className="header__top__hover">
                    <span>Usd <i className="arrow_carrot-down"></i></span>
                    <ul>
                      <li>USD</li>
                      <li>EUR</li>
                      <li>USD</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 ">
              <div className="header__logo ">
                <Link to="http://localhost:3000/"><img src="img/logo.png" alt="" /></Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
            <MainMenu />
            </div>
            <div className="col-lg-3 col-md-3">
              <div className="header__nav__option">
                <Link to="#" className="search-switch"><img src="img/icon/search.png" alt=""/></Link>
                <Link to="#"><img src="img/icon/heart.png" alt="" /></Link>
                <Link to="http://localhost:3000/shopping-cart"><img src="img/icon/cart.png" alt="" /> <span>0</span></Link>
              </div>
            </div>
          </div>
          <div className="canvas__open"><i className="fa fa-bars"></i></div>
        </div>
      </section>
    </>
  );
};

export default Header;



