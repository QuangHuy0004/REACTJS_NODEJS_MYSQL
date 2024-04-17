import httpAxios from "../httpAxios";

const MenuService = {
  get_list: () => {
    return httpAxios.get("menu/index");
  },

  mainmenu: async (parentid, limit) => {
    return await httpAxios.get(`/menu/list/${parentid}/${limit}`);
  },
};
export default MenuService;
