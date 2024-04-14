# Backend Portfolio Personnel avec Node.js et MongoDB
![Static Badge](https://img.shields.io/badge/version-1.0.0-blue)

Ce projet est le backend d'un portfolio personnel, conçu pour gérer les données et interactions backend. Il est construit avec Node.js et utilise MongoDB pour la base de données.

## Caractéristiques

- **API RESTful**: Fournit des endpoints pour gérer les projets et les informations personnelles.
- **Authentification**: Sécurisation des routes d'administration avec authentification JWT.
- **Logging**: Intégration de logging pour surveiller les requêtes et les erreurs.

## Technologies Utilisées

- **Node.js**: Un environnement d'exécution JavaScript côté serveur.
- **Express.js**: Un framework web pour Node.js.
- **MongoDB**: Une base de données NoSQL orientée documents.
- **Mongoose**: Une bibliothèque ODM pour MongoDB et Node.js.

## Installation

Pour lancer le projet localement, suivez ces étapes :

1. Clonez le dépôt :

```bash
git clone https://github.com/amir-398/my-portfolio-back.git
cd my-portfolio-back
```
2. Installez les dépendances :
```bash
npm install
```
3. Lancez le serveur de développement :
```bash
npm start
```
## Structure du Projet
```bash
/my-portfolio-back
|-- controllers         # Logique de contrôle pour les routes API
|-- models              # Modèles de données Mongoose
|-- routes              # Définition des routes Express
|-- config              # Configuration de la base de données et autres variables d'environnement
|-- utils               # Utilitaires divers comme la gestion des tokens
|-- logs                # Fichiers de log pour le suivi des activités

```
