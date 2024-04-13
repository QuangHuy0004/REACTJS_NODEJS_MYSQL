const express = require("express");
const app = express();
const fileUpload = require("express-fileupload");
const path = require("path")
const cors = require('cors');
const bodyParser = require("body-parser");
const apiRoutes = require("./routers");
const port = 8080;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(fileUpload())
app.use(cors());

apiRoutes(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port} \n  http://localhost:${port}`);
});

