const categoryRouter = require('./CategoryRouter');
const brandRouter = require('./BrandRouter');
const productRouter = require('./ProductRouter');
const router = (app) => {
    app.use('/api/category', categoryRouter);
    app.use('/api/brand', brandRouter);
    app.use('/api/product', productRouter);
}
module.exports = router;