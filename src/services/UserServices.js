import httpAxios from "../router/httpAxios";

const UserServices = {
    get_list:()=>{
        return httpAxios.get('/user/index');
    }
}
export default UserServices;