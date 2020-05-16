const express = require("express");
const path = require("path");
const bodyParser = require("body-parser")

const app = express();
const port = process.env.PORT || "3000";

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(bodyParser.urlencoded({extended:true}))

app.get("/", (req, res) => {
    res.render("index");
  });
app.post("/check-status", (req, res)=>{
    console.log(req.body.licenseNumber);
    
    res.render("results")
});  

  app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });