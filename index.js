const express = require("express");
const app = express();
const path = require("path");
const mongoDB = require("./MongoDB/server");
const movieSchema = require("./models/movie");
const userSchema = require("./models/user");
const ejsMate = require("ejs-mate");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoDB();
// Set the default templating engine to ejs
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", async (req, res) => {
  const movies = await movieSchema.find({});

  res.render("home", { movies });
});
app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", async (req, res) => {
  const { username, email, password, mobilenumber } = req.body;
  const newUser=new userSchema({username,email,password,mobilenumber});
  await newUser.save();
  console.log(newUser);
  res.send("sent");
});
app.get("/search", (req, res) => {
  // const {search}=req.body;
  console.log(req.body);
  res.send(req.body);
});
app.get("/login", (req, res) => {
  res.render("login");
});
app.listen(3000, () => {
  console.log("Listening");
});
