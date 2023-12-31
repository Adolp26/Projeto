const express = require('express');
const routes = express.Router();



// Importaões dos Controllers
const AnnotationController = require('./controllers/AnnotationController');
const PriorityController = require('./controllers/PriorityController');
const ContentController = require('./controllers/ContentController')


// Rotas para manipulação das anotações
routes.post('/annotations', AnnotationController.create);
routes.get('/annotations', AnnotationController.read)
routes.delete('/annotations/:id', AnnotationController.delete)


//Rota Priority
routes.get('/priorities', PriorityController.read)
routes.put('/priorities/:id', PriorityController.update)


// Rota Content
routes.put('/contents/:id', ContentController.update)

module.exports = routes;