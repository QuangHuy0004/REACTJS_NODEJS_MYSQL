import httpAxios from "../httpAxios";


const BannerService = {
  get_list: () => {
    return httpAxios.get( "banner/index");
  },

  slideshow: async (position) => {
    return await httpAxios.get( `banner/list/${position}`);
  }
};
export default BannerService;