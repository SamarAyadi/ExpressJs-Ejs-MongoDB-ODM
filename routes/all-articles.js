const express = require("express");
const router = express.Router();
 
// To import controllers file
const articleController = require("../controllers/articleController");
 
// PATH start with '/all-articles'
 
router.get("/", articleController.article_index_get);
 
router.post("/", articleController.article_post);
 
router.get("/:id", articleController.article_details_get);
 
router.delete("/:id", articleController.article_delete);
 
module.exports = router; 
