/**
 * @fileoverview Typescript REST API.
 */

// Libraries

import express from 'express';

// Modules

import * as controllers from './controllers.js';

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

app.get('/api/items', controllers.list);

app.get('/api/items/:id', controllers.show);

app.post('/api/items', controllers.store);

app.put('/api/items/:id', controllers.update);

app.delete('/api/items/:id', controllers.remove);

// Express server

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
