const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const adminRoute = require("./routes/adminRoute");
const app = express();
app.use(cors());
const port = "3001";

// const projectRoute = require("./routes/projectRoute");
// const infoRoute = require("./routes/infoRoute");
// const adminRoute = require("./routes/adminRoute");
mongoose.connect("mongodb://127.0.0.1:27017/portfolio");
app.use(express.urlencoded());
app.use(express.json());

// app.use("/projects", projectRoute);
// app.use("/infos", infoRoute);
app.use("/", adminRoute);
// app.use("/", sendEmailRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
