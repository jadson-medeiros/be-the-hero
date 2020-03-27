const express = require("express");

const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

routes.post("/api/session", SessionController.create);

routes.get("/api/ongs", OngController.index);
routes.post("/api/ongs", OngController.create);

routes.get("/api/incidents", IncidentController.index);
routes.post("/api/incidents", IncidentController.create);
routes.delete("/api/incidents/:id", IncidentController.delete);

routes.get("/api/profile", ProfileController.index);
module.exports = routes;
