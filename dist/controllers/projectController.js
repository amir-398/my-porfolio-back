"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Project = require("../models/projectModel");
exports.projectRegister = async (req, res) => {
    try {
        const newProject = new Project(req.body);
        const project = await newProject.save();
        res.status(201).json({ message: `Projet crée ${project}` });
    }
    catch (err) {
        res.status(500).json(err);
    }
};
exports.deleteProjectById = async (req, res) => {
    try {
        const projectId = req.params.id;
        const project = await Project.findById(projectId);
        if (!project) {
            return res.status(404).json({ message: "Projet non trouvé" });
        }
        await Project.findByIdAndDelete(projectId);
        res.status(200).json({ message: "Projet supprimé" });
    }
    catch (err) {
        res.status(500).json(err);
    }
};
exports.updateProjectById = async (req, res) => {
    try {
        const projectId = req.params.id;
        const project = await Project.findById(projectId);
        if (!project) {
            return res.status(404).json({ message: "Projet non trouvé" });
        }
        const updatedProject = await Project.findByIdAndUpdate(projectId, { $set: req.body }, { new: true });
        res.status(200).json(updatedProject);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
exports.getAllProjectsBylng = async (req, res) => {
    const lng = req.params.lng;
    try {
        const projects = await Project.find({}, `client date projectUrl technologies localization.${lng} images created_at updated_at`);
        if (!projects) {
            return res.status(404).json({ message: "Aucun projet trouvé" });
        }
        res.status(200).json(projects);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
exports.getProjectByIdAndByLng = async (req, res) => {
    try {
        const projectId = req.params.id;
        const lng = req.params.lng;
        let project = await Project.findById(projectId, `client date projectUrl technologies localization.${lng} images created_at updated_at`);
        const localizationData = project.localization[lng];
        //remove localization from project
        delete project._doc.localization;
        const data = { ...localizationData._doc, ...project._doc };
        if (!project) {
            return res.status(404).json({ message: "Projet non trouvé" });
        }
        res.status(200).json(data);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
exports.getAllProjectsCards = async (req, res) => {
    const lng = req.params.lng;
    try {
        const projection = {
            [`localization.${lng}.title`]: 1,
            [`localization.${lng}.description`]: 1,
            images: { $slice: 1 },
        };
        const projects = await Project.find({}, projection);
        const data = [];
        projects.forEach((project) => {
            const id = project._id;
            const title = project.localization[lng].title;
            const description = project.localization[lng]
                .description;
            data.push({
                id,
                title,
                description,
                image: project.images[0],
            });
        });
        if (projects.length === 0) {
            // Correction ici pour vérifier si le tableau est vide
            return res.status(404).json({ message: "Aucun projet trouvé" });
        }
        res.status(200).json(data);
    }
    catch (err) {
        res.status(500).json({
            message: "Erreur lors de la récupération des projets",
            error: err,
        });
    }
};
