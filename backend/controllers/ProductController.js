const Product = require('../modules/Product');

const ProductController = {
    index: (req, res) => {
        Product.getAll((data) => {
            if (data == null) {
                return res.status(200).json({
                    products: null,
                    status: false,
                    message: "Khong tim thay du lieu"
                });
            }
            else {
                return res.status(200).json({
                    products: data,
                    status: true,
                    message: "Tim thay du lieu thanh cong"
                });
            }
        })

    },
    productdetail: async (req, res) => {
        try {
            const slug = req.params.slug;
            const limit = req.params.limit;
            await Product.getBySlug(slug, function (product) {
                if (product == null) {
                    const result = {
                        product: null,
                        status: false,
                        message: "Không tìm thấy thông tin!",
                    };
                    return res.status(200).json(result);
                } else {
                    Product.getListProductOther(product.category_id, product.id, limit, function (products) {
                        const result = {
                            product: product,
                            products: products,
                            status: true,
                            message: "Tải dữ liệu thành công!",
                        };
                        return res.status(200).json(result);
                    });
                }
            });
        } catch (error) {
            const result = {
                products: null,
                status: false,
                message: error.message,
            };
            return res.status(200).json(result);
        }
    },
    listnew: async (req, res) => {
        try {
            const limit = req.params.limit;
            //
            await Product.getListNew(limit, function (products) {
                if (products == null) {
                    const result = {
                        products: null,
                        status: false,
                        message: "Không tìm thấy thông tin!",
                    };
                    return res.status(200).json(result);
                } else {
                    const result = {
                        products: products,
                        status: true,
                        message: "Tải dữ liệu thành công!",
                    };
                    return res.status(200).json(result);
                }
            });
        } catch (error) {
            const result = {
                products: null,
                status: false,
                message: error.message,
            };
            return res.status(200).json(result);
        }
    },
    list_category: async (req, res) => {
        try {
            const categoryid = req.params.categoryid;
            const limit = req.params.limit;
            await Product.getListByCategory(categoryid, limit, function (products) {
                if (products == null) {
                    const result = {
                        products: null,
                        status: false,
                        message: "Không tìm thấy thông tin!",
                    };
                    return res.status(200).json(result);
                } else {
                    const result = {
                        products: products,
                        status: true,
                        message: "Tải dữ liệu thành công!",
                    };
                    return res.status(200).json(result);
                }
            });
        } catch (error) {
            const result = {
                products: null,
                status: false,
                message: error.message,
            };
            return res.status(200).json(result);
        }
    },
   
    list_brand: async (req, res) => {
        try {
            const brandid = req.params.brandid;
            const limit = req.params.limit;
            await Product.getListByBrand(brandid, limit, function (products) {
                if (products == null) {
                    const result = {
                        products: null,
                        status: false,
                        message: "Không tìm thấy thông tin!",
                    };
                    return res.status(200).json(result);
                } else {
                    const result = {
                        products: products,
                        status: true,
                        message: "Tải dữ liệu thành công!",
                    };
                    return res.status(200).json(result);
                }
            });
        } catch (error) {
            const result = {
                products: null,
                status: false,
                message: error.message,
            };
            return res.status(200).json(result);
        }
    },
    list: async (req, res) => {
        try {
           const page = req.params.page;
           const limit = req.params.limit;
           //Xử lý page
           let offset = (page - 1) * limit;
           //
           await Product.getList(limit, offset, function (products) {
              if (products == null) {
                 const result = {
                    products: null,
                    status: false,
                    message: "Không tìm thấy thông tin!",
                 };
                 return res.status(200).json(result);
              } else {
                 const result = {
                    products: products,
                    status: true,
                    message: "Tải dữ liệu thành công!",
                 };
                 return res.status(200).json(result);
              }
           });
        } catch (error) {
           const result = {
              products: null,
              status: false,
              message: error.message,
           };
           return res.status(200).json(result);
        }
     },
     list_product_category: async (req, res) => {
        try {
           const categoryid = req.params.categoryid;
           const page = req.params.page;
           const limit = req.params.limit;
           //Xử lý page
           let offset = (page - 1) * limit;
           //
           await Product.getListProductCategory(categoryid, limit, offset, function (products) {
              if (products == null) {
                 const result = {
                    products: null,
                    status: false,
                    message: "Không tìm thấy thông tin!",
                 };
                 return res.status(200).json(result);
              } else {
                 const result = {
                    products: products,
                    status: true,
                    message: "Tải dữ liệu thành công!",
                 };
                 return res.status(200).json(result);
              }
           });
        } catch (error) {
           const result = {
              products: null,
              status: false,
              message: error.message,
           };
           return res.status(200).json(result);
        }
     },
     delete: async (req, res) => {
        try {
            const productId = req.params.id; // Lấy ID của sản phẩm từ yêu cầu

            // Gọi hàm xóa sản phẩm từ model Product
            await Product.delete(productId, function (result) {
                if (result === null) {
                    // Nếu không tìm thấy sản phẩm để xóa, trả về thông báo lỗi
                    return res.status(404).json({
                        status: false,
                        message: "Không tìm thấy sản phẩm để xóa."
                    });
                } else {
                    // Nếu xóa thành công, trả về thông báo thành công
                    return res.status(200).json({
                        status: true,
                        message: "Xóa sản phẩm thành công."
                    });
                }
            });
        } catch (error) {
            // Nếu xảy ra lỗi trong quá trình xóa sản phẩm, trả về thông báo lỗi
            return res.status(500).json({
                status: false,
                message: "Lỗi trong quá trình xóa sản phẩm: " + error.message
            });
        }
    }
  
  
}

module.exports = ProductController