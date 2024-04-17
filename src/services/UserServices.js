import httpAxios from "../httpAxios";

const UserServices = {
    get_list:()=>{
        return httpAxios.get('/user/index');
    }
}
export default UserServices;