"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerOptions = {
    definition: {
        openapi: "3.0.0", // Utilisation de la version 3.0.0 pour la meilleure compatibilité
        info: {
            title: "Portfolio API",
            version: "0.1.0",
            description: "This is a simple CRUD API application made with Express and documented with Swagger",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
                name: "Amir",
                email: "amir.meb398@gmail.com",
            },
        },
        servers: [
            {
                url: "http://localhost:3001",
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
        },
    },
    apis: ["./routes/*.ts"], // Assurez-vous que ce chemin est correct pour votre structure de projet
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
module.exports = swaggerDocs;
