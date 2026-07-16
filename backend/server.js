const express = require("express");
const cors = require("cors");

require("dotenv").config();

require("./config/firebase");


const taskRoutes = require("./routes/taskRoutes");

const timerRoutes = require("./routes/timerRoutes");

const dashboardRoutes = require("./routes/dashboardRoutes");

const authRoutes = require("./routes/authRoutes");



const app = express();




app.use(cors());

app.use(express.json());




app.use("/tasks", taskRoutes);

app.use("/timer", timerRoutes);

app.use("/dashboard", dashboardRoutes);

app.use("/auth", authRoutes);





app.get("/",(req,res)=>{


    res.send("StudySprint Backend Running");


});





app.listen(5000,()=>{


    console.log("Server running on port 5000");


});