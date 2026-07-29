const express = require("express");
const cors = require("cors");
require("dotenv").config();

const aiRoutes = require("./routes/aiRoutes");


const app = express();


app.use(cors());
app.use(express.json());


app.use("/api/ai", aiRoutes);


app.get("/", (req,res)=>{
    res.send("AI Career Mentor Backend Running 🚀");
});


app.listen(5000,()=>{
    console.log("Server running on port 5000");
});