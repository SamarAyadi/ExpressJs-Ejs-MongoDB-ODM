const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
// define the Schema (the structure of the article) DataBase meta3ik bech testa9bel 7aja esmha title & summary & articlBody
const articleSchema = new Schema({
  title: String,
  summary: String,
  articlBody: String,
});
 
 
// Create a model based on that schema
const Article = mongoose.model("Article", articleSchema);
 
 
// export the model
module.exports = Article; 