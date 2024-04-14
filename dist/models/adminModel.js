"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const adminSchema = new Schema({
    identifiant: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    updated_at: {
        type: Date,
        default: Date.now,
    },
});
// Hook pour hacher le mot de passe avant de sauvegarder l'utilisateur
adminSchema.pre("save", async function (next) {
    // Si le mot de passe n'a pas été modifié, passe à la suite
    if (!this.isModified("password"))
        return next();
    // Hacher le mot de passe
    try {
        const salt = await bcrypt.genSalt(10); // Générer un sel
        this.password = await bcrypt.hash(this.password, salt); // Hacher le mot de passe avec le sel
        next();
    }
    catch (error) {
        next(error);
    }
});
module.exports = mongoose.model("Admin", adminSchema);
