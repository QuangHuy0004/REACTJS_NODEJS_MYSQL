import httpAxios from "../router/httpAxios";

const BannerServices = {
    get_list:()=>{
        return httpAxios.get('/banner/index');
    }
}
export default BannerServices;