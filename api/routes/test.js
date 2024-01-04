// import { Router } from "express";
var express = require('express');
var router = express.Router();

router.get("/",function(req,res,next) {
    res.send("DONE.")
})

module.exports = router;