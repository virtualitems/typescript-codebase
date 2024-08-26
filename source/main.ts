/**
 * @fileoverview Typescript REST API.
 */

// Libraries

import express from 'express';

// Modules

import controllers from './controllers.js';

// Constants

const port = 3000;

// Express app

const app = express();

// Express settings

app.set('view engine', 'ejs');
app.set('views', './source/views');

// Express middlewares

app.use(express.static('public'));

// Express routes

app.get('/api/items/list', controllers.list);

app.get('/api/items/show', controllers.show);

app.post('/api/items/store', controllers.store);

app.put('/api/items/update', controllers.update);

app.delete('/api/items/remove', controllers.remove);

// Express server

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
