const Project = require("../models/projectModel");
import { Request, Response } from "express";
exports.projectRegister = async (req :Request, res : Response) => {
  try {
    console.log(req.body);
    const newProject = new Project(req.body);
    const project = await newProject.save();
    res.status(201).json({ message: `Projet crée ${project}` });
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.deleteProjectById = async (req :Request, res : Response) => {
  try {
    const projectId = req.params.id;
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ message: "Projet non trouvé" });
    }
    await Project.findByIdAndDelete(projectId);
    res.status(200).json({ message: "Projet supprimé" });
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.updateProjectById = async (req :Request, res : Response) => {
  try {
    const projectId = req.params.id;
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ message: "Projet non trouvé" });
    }
    const updatedProject = await Project.findByIdAndUpdate(
      projectId,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedProject);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getAllProjects = async (req :Request, res : Response) => {
  try {
    const projects = await Project.find();
    if (!projects) {
      return res.status(404).json({ message: "Aucun projet trouvé" });
    }
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getProjectById = async (req :Request, res : Response) => {
  try {
    const projectId = req.params.id;
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ message: "Projet non trouvé" });
    }
    res.status(200).json(project);
  } catch (err) {
    res.status(500).json(err);
  }
};
