require("dotenv").config();

const express = require("express");
const cors = require("cors");

const { db } = require("./config/firebase");

const app = express();


// CORS CONFIGURATION
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "https://study-sprint-rosy.vercel.app"
    ],
    methods: [
      "GET",
      "POST",
      "PUT",
      "DELETE"
    ],
    credentials: true
  })
);


// BODY PARSER
app.use(express.json());



// FIREBASE TEST
app.get("/", (req,res)=>{

  res.json({
    message:"StudySprint API Running"
  });

});




// ROUTES

const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
const goalRoutes = require("./routes/goalRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const timerRoutes = require("./routes/timerRoutes");



app.use("/api/auth", authRoutes);

app.use("/api/tasks", taskRoutes);

app.use("/api/goals", goalRoutes);

app.use("/api/dashboard", dashboardRoutes);

app.use("/api/timer", timerRoutes);




// SERVER START

const PORT = process.env.PORT || 5000;


app.listen(PORT,()=>{

    console.log(
      `Server running on port ${PORT}`
    );

});