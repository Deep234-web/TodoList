const express = require("express");
const bodyParser = require("body-parser");

const app = express();
let items = [];
let workItem = [];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get("/", function(req, res) {
  let today = new Date();

 let options = {
   weekday : "long",
   day : "numeric",
   month : "long",
   year: "numeric"
 };

let day = today.toLocaleDateString("en-US", options);
day = today.toLocaleTimeString("en-US", options);


  res.render("list", {listTitle: day, newListItems: items});
});

  app.post("/", function(req, res){
    let item = req.body.newItem;
    items.push(item);
    res.redirect("/");

});
app.post("/work", function(req,res){
  let item =req.body.newItem;
  workItem.push(item);
  res.redirect("/");
});
app.get("/work", function(req, res){
res.render("List", {listTitle: "Work list",newListItems:workItem});
});


app.listen(3000, function() {
  console.log("Server is running very fast");
});
