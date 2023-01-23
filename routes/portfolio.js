var express = require("express");
var router = express.Router();
var path = require("path");
var index = path.join(__dirname, '..', 'ml', 'index.html');

//render a file with express
router.get("/", (req, res)=>{
	res.sendFile(index);
});

module.exports = router;