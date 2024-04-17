import httpAxios from "../httpAxios";

const BrandServices = {
    get_list:()=>{
        return httpAxios.get('/brand/index');
    }
}
export default BrandServices;