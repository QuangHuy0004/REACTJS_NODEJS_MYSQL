const Category = require('../modules/Category');
const CategoryController = {    
    index: (req, res) => {
        Category.getAll((data) => {
            if (data == null) {
                return res.status(200).json({
                    category: null,
                    status: false,
                    message: "Khong tim thay du lieu"
                });
            }
            else {
                return res.status(200).json({
                    category: data,
                    status: true,
                    message: "Tim thay du lieu thanh cong"
                });
            }
        })

    },
};

module.exports = CategoryController;