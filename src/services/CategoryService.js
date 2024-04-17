import httpAxios from "../httpAxios";

const CategoryService = {
  get_list: () => {
    return httpAxios.get("/category/index");
  },
  store: (formData) => {
    return httpAxios.post("/category/store", formData);
  },
  delete: (id) => {
    return httpAxios.delete("/category/delete/" + id);
  },
  update: (id, formData) => {
    return httpAxios.put(`/category/edit/${id}`, formData);
},
};

export default CategoryService;
