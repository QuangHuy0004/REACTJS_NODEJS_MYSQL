const conn = require('../configs/dbmysql');
const Category = {
    getAll: (result) => {
        conn.query("SELECT * FROM db_brand", function (err, category) {
            if (err) {
                result(null);
            }
            else {
                result(category);
            }
        });
    }
}

module.exports = Category;
