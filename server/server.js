const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 8090;
const app = express();
app.use(cors());
const getHolidaySpot = require("./library/getHolidaySpot")


app.get("/getholidayspot", getHolidaySpot);



app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
