const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const { Router } = require('express');
const ProfileController = require('./controllers/ProfileController');

const routes = express.Router();


//ROUTES

//ONGS
routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create);

//PROFILE
routes.get('/profile', ProfileController.index);

//INCIDENTS
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;