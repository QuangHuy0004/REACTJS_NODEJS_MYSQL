import About from '../pages/frontend/Home/About';
import Blog from '../pages/frontend/Home/Blog';
import Contact from '../pages/frontend/Home/Contact';
import Login from '../pages/frontend/Home/Login';
import MainContent from '../pages/frontend/Home/Main-content';
import Product from '../pages/frontend/Home/Product';
import ProductDetail from '../pages/frontend/Home/ProductDetail';
import Shop from '../pages/frontend/Home/Shop';
import ShopDetail from '../pages/frontend/Home/Shop-detail';
import ShoppingCart from '../pages/frontend/Home/Shopping-cart';
import Home from './../pages/frontend/Home/index';

const FrontendRouter =
 [
    {path: "/", component: Home},
    {path: "/product", component: Product},
    {path: "/product-detail/:slug", component: ProductDetail},
    {path: "/shop", component: Shop},
    {path: "/login", component: Login},
    {path: "/pages", component: MainContent},
    {path: "/about", component: About},
    {path: "/shop-details", component: ShopDetail},
    {path: "/shopping-cart", component: ShoppingCart},
    {path: "/blog-details", component: MainContent},
    {path: "/blog", component: Blog},
    {path: "/contact", component: Contact},
 ];
 export default FrontendRouter;