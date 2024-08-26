/**
 * @fileoverview Typescript REST API.
 */

// Libraries

import express from 'express';

// Constants

const port = 3000;

// Express

const app = express();

app.set('view engine', 'ejs');
app.set('views', './source/views');

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
