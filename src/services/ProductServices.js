import httpAxios from "../httpAxios";

const ProductService = {
  get_list: async () => {
    return await httpAxios.get("product/index");
  },
  list: async (page, limit) => {
    return await httpAxios.get(`product/list/${page}/${limit}`);
  },
  detail: async (slug, limit) => {
    return await httpAxios.get(`product/productdetail/${slug}/${limit}`);
  },
};
export default ProductService;