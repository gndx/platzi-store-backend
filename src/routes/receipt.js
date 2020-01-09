const express = require('express');
const path = require("path")

function receiptApi(app) {
    const router = express.Router();
    app.use('/receipts', router);

    router.get('/', async (req, res, next) => {
        const file = path.join(__dirname, "assets/receipt.pdf");
        res.sendFile(file);
    },
    );
}

module.exports = receiptApi;
