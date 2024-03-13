import Product from './../pages/frontend/Product';
import Contact from './../pages/frontend/Contact';
import Home from './../pages/frontend/Home/index';

const FrontendRouter =
 [
    {path: "/", component: Home},
    {path: "/san-pham", component: Product},
    {path: "/lien-he", component: Contact}
 ];
 export default FrontendRouter;