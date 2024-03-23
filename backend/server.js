const express = require('express')
const app = express()
const cors = require('cors');
const apiRoutes = require("./routers");
const conn = require('./configs/dbmysql');
const port = 5000
app.use(cors());
apiRoutes(app);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

module.exports = conn;