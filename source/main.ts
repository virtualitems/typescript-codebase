/**
 * @fileoverview This file is used only for exporting ports.
 */

import express from 'express';

const port = 3000;

const app = express();

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
