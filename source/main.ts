/**
 * @fileoverview Typescript REST API.
 */

// Libraries

import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import multer from 'multer';

// Modules

import * as controllers from './controllers.js';

// Constants

const port = 3000;

// Express app

const app = express();

// Express middlewares

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

// Express routes middlewares

const multerMemoryStorage = multer({ storage: multer.memoryStorage() }).any();

const contentTypeJSON = controllers.headers({ 'content-type': 'application/json' });

// Express routes

app.get('/api/items', controllers.list);

app.get('/api/items/:id', controllers.show);

app.post('/api/items', contentTypeJSON, controllers.store);

app.put('/api/items/:id', contentTypeJSON, controllers.update);

app.delete('/api/items/:id', controllers.remove);

app.post('/api/upload', multerMemoryStorage, controllers.upload);

// Express server

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
