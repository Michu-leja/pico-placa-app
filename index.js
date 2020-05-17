const express = require("express");
const path = require("path");
const bodyParser = require("body-parser")
const picoPlaca = require("./methods/PicoPlaca.js")

const app = express();
const port = process.env.PORT || "3000";

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.render("index");
});
app.post("/check-status", (req, res) => {
    
    let licensePlateNumber = req.body.licenseNumber
    let date = req.body.date
    let hour = req.body.hour
    let result = picoPlaca.isAllowedToRoad(picoPlaca.getDayOfDate(date), picoPlaca.getLastDigitOfLicensePlate(licensePlateNumber), picoPlaca.isHourInTheThreshold(hour))
    
    res.render("index", { result: result, enable:true})
});

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});