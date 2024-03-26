import httpAxios from "../router/httpAxios";

const PostServices = {
    get_list:()=>{
        return httpAxios.get('/post/index');
    }
}
export default PostServices;