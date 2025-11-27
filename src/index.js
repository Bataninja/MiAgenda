const parser = require("body-parser");
const cors = require("cors");
const express = require('express');
const app = express();
app.use(cors());
const port = 3000;
const eventRoutes = require("./routes/eventRoutes");
const userRoutes = require("./routes/userRoutes");
const cooperativoRoutes = require("./routes/cooperativoRoutes");
const mongoose = require("mongoose");
require('dotenv').config();

app.use(parser.urlencoded({ extended: false })); 
app.use(parser.json()); 

app.use("/api", eventRoutes);
app.use("/api", userRoutes);
app.use("/api", cooperativoRoutes)
app.use(express.json());
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Conexión exitosa"))
  .catch((error) => console.log(error));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

