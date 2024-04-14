"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Info = require("../models/infoModel");
exports.infoRegister = async (req, res) => {
    try {
        const newInfo = new Info(req.body);
        const info = await newInfo.save();
        res.status(201).json({ message: `Info crée ${info}` });
    }
    catch (err) {
        res.status(500).json(err);
    }
};
exports.getAllInfo = async (req, res) => {
    try {
        const info = await Info.find();
        res.status(200).json(info);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
exports.updateInfo = async (req, res) => {
    try {
        const infoId = req.params.id;
        const info = await Info.findById(infoId);
        if (!info) {
            res.status(404).json({ message: "Info non trouvé" });
        }
        else {
            const updatedInfo = await Info.findByIdAndUpdate(infoId, req.body, {
                new: true,
                runValidators: true,
            });
            res.status(200).json(updatedInfo);
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
};
