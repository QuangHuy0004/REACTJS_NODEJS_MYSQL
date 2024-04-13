// const Category = require("../modules/Category");
const convertSlug = require("../utils/ConvertSlug");
const CategoryController = {
  index: async (req, res) => {
    try {
      await Category.getAll(function (categorys) {
        const result = {
          category: categorys,
          status: true,
          message: "Tải dữ liệu thành công!",
        };
        return res.status(200).json(result);
      });
    } catch (error) {
      const result = {
        category: null,
        status: false,
        message: error.message,
      };
      return res.status(200).json(result);
    }
  },

  show: async (req, res) => {
    try {
      const id = req.params.id;
      await Category.getById(id, function (category) {
        if (category == null) {
          const result = {
            category: null,
            status: false,
            message: "Không tìm thấy dữ liệu!",
          };
          return res.status(200).json(result);
        } else {
          const result = {
            category: category,
            status: true,
            message: "Tải dữ liệu thành công!",
          };
          return res.status(200).json(result);
        }
      });
    } catch (error) {
      const result = {
        category: null,
        status: false,
        message: error.message,
      };
      return res.status(200).json(result);
    }
  },

  store: (req, res) => {
    const formBody = req.body;
    let d = new Date();
    let imageName = null;
    if (req.files && req.files.image) {
      let image = req.files.image;
      image.mv(
        "./assets/images/categories/" + image.name,
        function (err, result) {
          if (err) throw err;
        }
      );
      imageName = image.name;
    } 
    const category = {
      name: formBody.name,
      parent_id: formBody.parent_id,
      sort_order: formBody.sort_order,
      image: imageName,
      description: formBody.description,
      status: formBody.status,
      // slug: convertSlug(formBody.name),
      slug: "convertSlug(formBody.name),",
      created_at: `${d.getFullYear()}-${d.getMonth()}-${d.getDay()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`,
    };
    Category.store(category, function (data, status) {
      //data thứ mà nó trả về
      if (status == true) {
        return res.status(200).json({
          category: data,
          status: true,
          message: "Thêm thành công",
        });
      } else {
        return res.status(200).json({
          category: null,
          status: false,
          message: "Thêm thất bại",
        });
      }
    });
  },

  edit: async (req, res) => {
    try {
      const id = req.params.id;
      let bodyData = req.body;
      //image
      let image = req.files.image;
      image.mv(
        "./assets/images/categories/" + image.name,
        function (err, result) {
          if (err) throw err;
        }
      );
      let d = new Date();
      //object data to store
      const data = {
        name: bodyData.name,
        slug: myslug(bodyData.name),
        description: bodyData.description,
        image: image.name,
        sort_order: bodyData.sort_order,
        parent_id: bodyData.parent_id,
        status: bodyData.status,
        updated_by: 1,
        updated_at: `${d.getFullYear()}-${d.getMonth()}-${d.getDay()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`,
      };
      await Category.update(data, id, function (category) {
        const result = {
          category: category,
          status: true,
          message: "Cập nhật dữ liệu thành công!",
        };
        return res.status(200).json(result);
      });
    } catch (error) {
      const result = {
        category: null,
        status: false,
        message: error.message,
      };
      return res.status(200).json(result);
    }
  },

  // delete: (id, mycallback) => {
  //   const sql = `DELETE FROM db_category WHERE id='${id}'`;
  //   conn.query(sql, function (err, category) {
  //     if (err) {
  //       mycallback(null);
  //     } else {
  //       mycallback(`Xóa thành công ${id}`);
  //     }
  //   });
  // },

  list: async (req, res) => {
    try {
      const parentid = req.params.parentid;
      await Category.getList(parentid, function (categorys) {
        if (categorys == null) {
          const result = {
            categorys: null,
            status: false,
            message: "Không tìm thấy thông tin!",
          };
          return res.status(200).json(result);
        } else {
          const result = {
            categorys: categorys,
            status: true,
            message: "Tải dữ liệu thành công!",
          };
          return res.status(200).json(result);
        }
      });
    } catch (error) {
      const result = {
        categorys: null,
        status: false,
        message: error.message,
      };
      return res.status(200).json(result);
    }
  },
};

module.exports = CategoryController;
