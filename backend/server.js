const express = require("express");

const cors = require("cors");

require("dotenv").config();



require("./config/firebase");



const app = express();





app.use(cors({

origin:[

"http://localhost:5173"

],

credentials:true

}));




app.use(express.json());







const taskRoutes = require("./routes/taskRoutes");

const goalRoutes = require("./routes/goalRoutes");

const dashboardRoutes = require("./routes/dashboardRoutes");

const timerRoutes = require("./routes/timerRoutes");







app.use("/api/tasks",taskRoutes);

app.use("/api/goals",goalRoutes);

app.use("/api/dashboard",dashboardRoutes);

app.use("/api/timer",timerRoutes);








app.get("/",(req,res)=>{


res.send("StudySprint API Running");


});







const PORT = process.env.PORT || 5000;



app.listen(PORT,()=>{


console.log(

`Server running on port ${PORT}`

);


});