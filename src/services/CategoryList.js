import httpAxios from "../router/httpAxios";

const CategoryList = {
    get_list:()=>{
        return httpAxios.get('/category/index');
    }
}
export default CategoryList;