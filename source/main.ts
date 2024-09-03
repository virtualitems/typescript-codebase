/**
 * @fileoverview Typescript REST API.
 */

// Libraries

import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

// Modules

import * as controllers from './controllers.js';

// Constants

const port = 3000;

// Express app

const app = express();

// Express middlewares

app.use(cors());

app.use(
    function (req, res, next)
    {
        if (req.headers['content-type'] === undefined) {
            return next();
        }
        if (req.headers['content-type'] !== 'application/json') {
            res.status(400).json({ error: 'Invalid content type.' });
            return;
        }
        return next();
    }
);

app.use(bodyParser.json());

// Express routes

app.get('/api/items', controllers.list);

app.get('/api/items/:id', controllers.show);

app.post('/api/items', controllers.store);

app.put('/api/items/:id', controllers.update);

app.delete('/api/items/:id', controllers.remove);

// Express server

app.listen(port, () =>
{
    console.log(`Server is running on http://localhost:${port}`);
});
