var express = require("express");

var router = express.Router();


router.use("/", require("./selfbot"));


module.exports = router;