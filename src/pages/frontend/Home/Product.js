import { useEffect, useState } from "react";
import ProductService from "../../../services/ProductServices";
import CategoryService from "../../../services/CategoryService";
import { MdOutlineExpandMore } from "react-icons/md";

const Product = () => {
    const [limit, setLimit] = useState(6);
    const [category, setCategory] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await ProductService.list(1, limit);
            setProducts(result.products);
            console.log(result.products)
        })();
    }, [limit]);

    useEffect(() => {
        (async () => {
            const result = await CategoryService.get_list();
            setCategory(result.category);
            console.log(result.category)
        })();
    }, []);

    const handleReadMore = () => {
        setLimit(limit + 3);
    }
    return (

        <section className="shop">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="shop__sidebar">
                            <div className="shop__sidebar__search">
                                <form action="#">
                                    <input type="text" placeholder="Search..." />
                                    <button type="submit">
                                        <span className="icon_search" />
                                    </button>
                                </form>
                            </div>
                            <div className="shop__sidebar__accordion">
                                <div className="accordion" id="accordionExample">
                                    <div className="card">
                                        <div className="card-heading">
                                            <a data-toggle="collapse" data-target="#collapseOne">
                                                Categories
                                            </a>
                                        </div>
                                        <div
                                            id="collapseOne"
                                            className="collapse show"
                                            data-parent="#accordionExample"
                                        >
                                            <div className="card-body">
                                                <div className="shop__sidebar__categories">
                                                    {category && category.length > 0 ? (
                                                        category.map((item, index) => (
                                                            <li key={index}>
                                                                <a href="#">{item.name} ({item.quantity})</a>
                                                            </li>
                                                        ))
                                                    ) : (
                                                        <li>No categories found</li>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-heading">
                                            <a data-toggle="collapse" data-target="#collapseTwo">
                                                Branding
                                            </a>
                                        </div>
                                        <div
                                            id="collapseTwo"
                                            className="collapse show"
                                            data-parent="#accordionExample">
                                            <div className="card-body">
                                                <div className="shop__sidebar__brand">
                                                    <ul>
                                                        <li>
                                                            <a href="#">Louis Vuitton</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Chanel</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Hermes</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Gucci</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-heading">
                                            <a data-toggle="collapse" data-target="#collapseThree">
                                                Filter Price
                                            </a>
                                        </div>
                                        <div
                                            id="collapseThree"
                                            className="collapse show"
                                            data-parent="#accordionExample"
                                        >
                                            <div className="card-body">
                                                <div className="shop__sidebar__price">
                                                    <ul>
                                                        <li>
                                                            <a href="#">$0.00 - $50.00</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">$50.00 - $100.00</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">$100.00 - $150.00</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">$150.00 - $200.00</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">$200.00 - $250.00</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">250.00+</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-heading">
                                            <a data-toggle="collapse" data-target="#collapseFour">
                                                Size
                                            </a>
                                        </div>
                                        <div
                                            id="collapseFour"
                                            className="collapse show"
                                            data-parent="#accordionExample"
                                        >
                                            <div className="card-body">
                                                <div className="shop__sidebar__size">
                                                    <label htmlFor="xs">
                                                        xs
                                                        <input type="radio" id="xs" />
                                                    </label>
                                                    <label htmlFor="sm">
                                                        s
                                                        <input type="radio" id="sm" />
                                                    </label>
                                                    <label htmlFor="md">
                                                        m
                                                        <input type="radio" id="md" />
                                                    </label>
                                                    <label htmlFor="xl">
                                                        xl
                                                        <input type="radio" id="xl" />
                                                    </label>
                                                    <label htmlFor="2xl">
                                                        2xl
                                                        <input type="radio" id="2xl" />
                                                    </label>
                                                    <label htmlFor="xxl">
                                                        xxl
                                                        <input type="radio" id="xxl" />
                                                    </label>
                                                    <label htmlFor="3xl">
                                                        3xl
                                                        <input type="radio" id="3xl" />
                                                    </label>
                                                    <label htmlFor="4xl">
                                                        4xl
                                                        <input type="radio" id="4xl" />
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-heading">
                                            <a data-toggle="collapse" data-target="#collapseFive">
                                                Colors
                                            </a>
                                        </div>
                                        <div
                                            id="collapseFive"
                                            className="collapse show"
                                            data-parent="#accordionExample">
                                            <div className="card-body">
                                                <div className="shop__sidebar__color">
                                                    <label className="c-1" htmlFor="sp-1">
                                                        <input type="radio" id="sp-1" />
                                                    </label>
                                                    <label className="c-2" htmlFor="sp-2">
                                                        <input type="radio" id="sp-2" />
                                                    </label>
                                                    <label className="c-3" htmlFor="sp-3">
                                                        <input type="radio" id="sp-3" />
                                                    </label>
                                                    <label className="c-4" htmlFor="sp-4">
                                                        <input type="radio" id="sp-4" />
                                                    </label>
                                                    <label className="c-5" htmlFor="sp-5">
                                                        <input type="radio" id="sp-5" />
                                                    </label>
                                                    <label className="c-6" htmlFor="sp-6">
                                                        <input type="radio" id="sp-6" />
                                                    </label>
                                                    <label className="c-7" htmlFor="sp-7">
                                                        <input type="radio" id="sp-7" />
                                                    </label>
                                                    <label className="c-8" htmlFor="sp-8">
                                                        <input type="radio" id="sp-8" />
                                                    </label>
                                                    <label className="c-9" htmlFor="sp-9">
                                                        <input type="radio" id="sp-9" />
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-heading">
                                            <a data-toggle="collapse" data-target="#collapseSix">
                                                Tags
                                            </a>
                                        </div>
                                        <div
                                            id="collapseSix"
                                            className="collapse show"
                                            data-parent="#accordionExample"
                                        >
                                            <div className="card-body">
                                                <div className="shop__sidebar__tags">
                                                    <a href="#">Product</a>
                                                    <a href="#">Bags</a>
                                                    <a href="#">Shoes</a>
                                                    <a href="#">Fashio</a>
                                                    <a href="#">Clothing</a>
                                                    <a href="#">Hats</a>
                                                    <a href="#">Accessories</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="shop__product__option">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="shop__product__option__left">
                                        <p>Showing 8 of 14 results</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="shop__product__option__right">
                                        <p>Sort by Price:</p>
                                        <select>
                                            <option value="">Low To High</option>
                                            <option value="">$0 - $55</option>
                                            <option value="">$55 - $100</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {products && products.length > 0 ? (
                                products.map((item, index) => (
                                    <div key={index} className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="product__item sale">
                                            <div className="product__item__pic set-bg">
                                                <img className="d-block w-100" src={`${item.image}`} alt={item.name} />
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
                                                <h6>{item.name}</h6>
                                                <a href="#" className="add-cart">+ Add To Cart</a>
                                                <div className="rating">
                                                    <i className="fas fa-star mx-1" />
                                                    <i className="fas fa-star mx-1" />
                                                    <i className="fas fa-star mx-1" />
                                                    <i className="fas fa-star mx-1" />
                                                    <i className="far fa-star mx-1" />
                                                </div>
                                                <h5 className="text-dark" >{item.price} $</h5>
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
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="col-lg-12">
                                    <p>Product not found!</p>
                                </div>
                            )}
                        </div>


                        <div className="row">
                            <div className="col-lg-12">
                                <div className="product__pagination">
                                    <a className="active" onClick={handleReadMore} ><MdOutlineExpandMore /></a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default Product;
