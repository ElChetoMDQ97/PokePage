const { Router } = require("express");
const fetch = require("node-fetch");
const { Tipo } = require("../db.js");

const router = Router();

router.get('/', async (req, res) => {
    res.json({info: "favicon"});
})



module.exports = router;
