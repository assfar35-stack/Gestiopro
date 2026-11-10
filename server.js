import express from "express";
import "dotenv/config";
import projectRoutes from "./routes/projects.js";

const app = express();
app.use(express.json());
app.use("/projects", projectRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running`);
});
