const Menu = require('../modules/Menu');

const MenuController = {
    list: async (req, res) => {
        try {
           const parentid = req.params.parentid;
           const limit = req.params.limit;
           await Menu.getList(parentid, limit, function (menus) {
              if (menus == null) {
                 const result = {
                    menus: null,
                    status: false,
                    message: "Không tìm thấy thông tin!",
                 };
                 return res.status(200).json(result);
              } else {
                 const result = {
                    menus: menus,
                    status: true,
                    message: "Tải dữ liệu thành công!",
                 };
                 return res.status(200).json(result);
              }
           });
        } catch (error) {
           const result = {
              menus: null,
              status: false,
              message: error.message,
           };
           return res.status(200).json(result);
        }
    },
}

module.exports = MenuController;