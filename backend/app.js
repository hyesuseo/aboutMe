const express = require("express");
const path = require("path");
const app = express();
const session = require("express-session")

const config = require("./config/dbConfig")
app.use(session(config.sessionConfig));
const router = require("./src/router/")(app)
const bodyParser = require("body-parser")


app.set("views", "./src/views");
app.set("view engine", "ejs");


app.use(express.static(path.join(__dirname, "public")));
app.use("/", router);

app.listen(3000, () => console.log("3000 서버 구동")); 
