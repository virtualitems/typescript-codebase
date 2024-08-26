// Libraries

import { type Request, type Response } from 'express';

// Modules

import { database, Item } from './models.js';

// Types

// Constants


function list(_req: Request, res: Response): void
{
    const data: Item[] = database.slice(0, 10);
    res.json(data);
}

function show(_req: Request, res: Response): void
{
    res.send('show');
}

function store(_req: Request, res: Response): void
{
    res.send('store');
}

function update(_req: Request, res: Response): void
{
    res.send('update');
}

function remove(_req: Request, res: Response): void
{
    res.send('remove');
}


export default {
    list,
    show,
    store,
    update,
    remove,
};
