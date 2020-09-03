//======= require all dependencies
require("dotenv").config();
const express = require("express");
const app = express();
var cors = require('cors')
const path = require("path")
//=== add all middlewares
app.use(cors());
require("./config/db"); //calls my mongoose connection to cleanup this file
app.use(express.json()); //allows me to receive JSON files from HEADER of REQUEST
app.use(express.static("frontend/build"))

//=== setup my routes
app.use("/api/auth", require("./routes/auth.route"));
app.use("/api/booking", require("./routes/booking.route"));
//=== 404 errors
// app.get("*", (req, res) => {
//   res.status(404).json({ message: "estas perdido", code: "EB404" });
// });

app.get("/*",(req, res)=>{
  res.sendFile(path.join(__dirname,"frontend/build/index.html"))
});

//=== setup the server port
app.listen(process.env.PORT, () =>
  console.log(`running on ${process.env.PORT}`)
);