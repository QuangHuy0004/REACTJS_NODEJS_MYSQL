const Banner = require("../modules/Banner");
const BannerController = {
  index: (req, res) => {
    Banner.getAll((data) => {
      if (data == null) {
        return res.status(200).json({
          banner: null,
          status: false,
          message: "Không tìm thấy dữ liệu",
        });
      } else {
        return res.status(200).json({
          banner: data,
          status: true,
          message: "Lấy dữ liệu thành công",
        });
      }
    });
  },

  list: async (req, res) => {
    try {
      const position = req.params.position;
      await Banner.getList(position, function (banners) {
        if (banners == null) {
          const result = {
            banners: null,
            status: false,
            message: "Không tìm thấy thông tin!",
          };
          return res.status(200).json(result);
        } else {
          const result = {
            banners: banners,
            status: true,
            message: "Tải dữ liệu thành công!",
          };
          return res.status(200).json(result);
        }
      });
    } catch (error) {
      const result = {
        banners: null,
        status: false,
        message: error.message,
      };
      return res.status(200).json(result);
    }
  },
};

module.exports = BannerController;