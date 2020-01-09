const express = require('express');
const products = require('../utils/mockups/products.json');

function productsApi(app) {
    const router = express.Router();
    app.use('/products', router);

    router.get('/', async (req, res, next) => {
        res.json(products);
    },
    );
};

module.exports = productsApi;
