import {ProductList,ProductCreate,ProductEdit } from '../pages/backend/product';
import Dashboard from './../pages/backend/Dashboard/index';

// String
const BackendRouter =
 [
    {path: "/admin", component: Dashboard},
    {path: "/admin/product", component: ProductList},
    {path: "/admin/product/create", component: ProductCreate},
    {path: "/admin/product/edit/:id", component: ProductEdit},
 ];
 export default BackendRouter;