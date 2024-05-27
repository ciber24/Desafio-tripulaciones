const express = require('express');
const resourcesRouter = express.Router();
const resources = require('../controllers/resources');
const getAccessToken = require('../middlewares/getAccessToken');
const decodeToken = require('../middlewares/decodeToken');
const adminRoutes = require('../middlewares/adminRoutes');
const clientRoutes = require('../middlewares/clientRoutes');


resourcesRouter.get('/protectedresource', getAccessToken, decodeToken, clientRoutes, resources.getProtectedResources);




module.exports = resourcesRouter;