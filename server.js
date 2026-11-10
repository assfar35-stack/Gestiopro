import express from "express";
import "dotenv/config";
import projectRoutes from "./routes/projects.js";

const app = express();
app.use(express.json());
app.use("/projects", projectRoutes);

let projects = [
  {
    id: 1,
    name: "Site vitrine ",
    determine: false,
  },

  {
    id: 2,
    name: "Application web ",
    determine: false,
  },
];

app.get("/", (req, res) => {
  res.json({ message: "GestoPro  V1" });
});

// Get a specific project by ID
app.get("/projects/:id", (req, res) => {
  const { id } = req.params;
  const project = projects.find((p) => p.id === Number(id));
  if (!project) {
    return res.status(404).json({ message: "Project not found" });
  }
  res.json(project);
});

// Delete a project by ID
app.delete("/projects/:id", (req, res) => {
    const { id } = req.params;
    const projectIndex = projects.findIndex((p) => p.id === Number(id));
    if (projectIndex === -1) {
      return res.status(404).json({ message: "Project not found" });
    }
    projects.splice(projectIndex, 1);
    res.status(200).json({ message: "Project deleted" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running`);
});
