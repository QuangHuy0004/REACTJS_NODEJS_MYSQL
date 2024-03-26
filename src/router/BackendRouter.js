import Dashboard from '../pages/backend/dashboard/Dashboard';
import ProductList from './../pages/backend/product/ProductList';
import ProductCreate from './../pages/backend/product/ProductCreate';
import ProductEdit from './../pages/backend/product/ProductEdit';
import BannerList from './../pages/backend/banner/BannerList';
import BannerCreate from './../pages/backend/banner/BannerCreate';
import PageCreate from './../pages/backend/page/PageCreate';
import PostList from '../pages/backend/post/PostList';
import PostCreate from './../pages/backend/post/PostCreate';
import UserList from './../pages/backend/user/UserList';
import UserCreate from './../pages/backend/user/UserCreate';
import BrandCreate from './../pages/backend/brand/BrandCreate';
import TopicCreate from './../pages/backend/topic/TopicCreate';
import { TopicList } from '../pages/backend/topic';
import BrandList from '../pages/backend/brand/BrandList';

const BackendRouter = [
    {path:"/admin",component: Dashboard},
    //Product
    {path:"/admin/product/list",component: ProductList},
    {path:"/admin/product/create",component:ProductCreate},
    {path:"/admin/product/edit/:id",component:ProductEdit},
    //Banner
    {path:"/admin/banner/list",component: BannerList},
    {path:"/admin/banner/create",component:BannerCreate},
    //Page
    {path:"/admin/page/create",component:PageCreate},
    //Post
    {path:"/admin/post",component: PostList},
    {path:"/admin/post/create",component:PostCreate},
     //User
     {path:"/admin/user",component: UserList},
     {path:"/admin/user/create",component:UserCreate},
     //Brand
     {path:"/admin/brand",component:BrandCreate},
     {path:"/admin/brand/list",component:BrandList},
     //Category
    //  {path:"/admin/category/create",component:CategoryCreate},
    //  {path:"/admin/category/list",component:CategorysList},
     //Topic
     {path:"/admin/topic/create",component:TopicCreate},
     {path:"/admin/topic/list",component:TopicList}

];
export default BackendRouter;