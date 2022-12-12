//  to controll ur website
const express = require("express");
const app = express();
const port = 5000;
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// To import routes file
const allArticlesRouter = require('./routes/all-articles')



// for auto refresh
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "public"));

const connectLivereload = require("connect-livereload");
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

// mongoose
const mongoose = require("mongoose");

mongoose
  .connect(
  //  use ur link database
  )
  .then((result) => {
    app.listen(port, () => {
      console.log(`Marhba Bik  on port at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });


//all-articles PATH

app.use('/all-articles', allArticlesRouter)

app.get("/", (req, res) => {
  res.redirect("/all-articles");
});
app.get("/add-new-article", (req, res) => {
  res.render("add-new-article", { mytitle: "Create new Article" });
});


// all-articles PATH
app.use("/all-articles", allArticlesRouter); 


app.use((req, res) => {
  res.status(404).send("Sorry can't find that!");
});
