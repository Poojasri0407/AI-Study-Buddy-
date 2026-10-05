require("dotenv").config();

const express = require("express");
const connectDB = require("./src/utils/db");
const authRoutes = require("./src/routes/authRoutes");
const studyRoutes = require("./src/routes/studyRoutes");
const aiRoutes = require("./src/routes/aiRoutes");
const app = express();

app.use(express.json());

connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/study", studyRoutes);
app.use("/api/ai", aiRoutes);
app.get("/", (req, res) => {
    res.json({
        message: "AI StudyBuddy API is running"
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});