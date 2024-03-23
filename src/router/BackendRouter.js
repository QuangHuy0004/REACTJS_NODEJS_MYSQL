import BrandCreate from '../pages/backend/brand/BrandCreate';
import CategoryList from '../pages/backend/category/CategoryList';
import BannerCreate from '../pages/backend/giaodien/BannerCreate';
import PageCreate from '../pages/backend/post/PageCreate';
import PageList from '../pages/backend/post/PageList';
import PostCreate from '../pages/backend/post/PostCreate';
import BlogList from '../pages/backend/post/PostList';
import TopicCreate from '../pages/backend/post/TopicCreate';
import TopicList from '../pages/backend/post/TopicList';
import {ProductList,ProductCreate,ProductEdit } from '../pages/backend/product';
import UserCreate from '../pages/backend/user/UserCreate';
import UserList from '../pages/backend/user/UserList';
import Dashboard from './../pages/backend/Dashboard/index';
import BrandList from './../pages/backend/brand/BrandList';

// String
const BackendRouter =
 [
    {path: "/admin", component: Dashboard},

    {path: "/admin/product", component: ProductList},
    {path: "/admin/product/create", component: ProductCreate},
    {path: "/admin/product/edit/:id", component: ProductEdit},

    {path: "/admin/brand/list", component: BrandList},
    {path: "/admin/brand/create", component: BrandCreate},

    {path: "/admin/category/list", component: CategoryList},

    {path: "/admin/giaodien", component: BannerCreate},

    {path: "/admin/page/create", component: PageCreate},
    {path: "/admin/page/list", component: PageList},

    {path: "/admin/post/create", component: PostCreate},
    {path: "/admin/post/list", component: BlogList},

    {path: "/admin/user/create", component: UserCreate},
    {path: "/admin/user/list", component: UserList},
    
    {path: "/admin/topic/create", component: TopicCreate},
    {path: "/admin/topic/create", component: TopicList}

 ];
 export default BackendRouter;