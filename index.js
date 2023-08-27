const express = require("express");

const app = express();
const colors = require("colors");
const cors = require("cors");
const dotenv = require("dotenv");
const PortfolioRoute = require("./Routes/PortfolioRoutes");
const path = require('path');
//config
dotenv.config();

// middelware
app.use(express.json());
app.use(cors());

// buil file access

app.use(express.static(path.join(__dirname,'../frontend/build')));

// routes
app.use("/", PortfolioRoute);

app.get('*', function(req,resp){
  resp.sendFile(path.join(__dirname,'../frontend/build/index.html'));
})
//port
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} port`.bgCyan.white);
});
