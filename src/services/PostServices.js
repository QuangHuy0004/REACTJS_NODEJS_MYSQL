import httpAxios from "../httpAxios";

const ProductService = {
  get_list: async () => {
    return await httpAxios.get("post/index");
  },
};
export default ProductService;