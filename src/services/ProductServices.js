import httpAxios from "../router/httpAxios";

const ProductServices = {
    get_list:()=>{
        return httpAxios.get('/product/index');
    }
}
export default ProductServices;