import httpAxios from "../httpAxios";

const TopicServices = {
    get_list:()=>{
        return httpAxios.get('/topic/index');
    }
}
export default TopicServices;