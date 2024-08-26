// Libraries

import { type Request, type Response } from 'express';

// Modules

import { database, Item } from './models.js';

// Types

// Constants


function list(req: Request, res: Response): void
{

    const page = Number(req.query.page);

    if (Object.is(NaN, page)) {
        res.status(400).json({ error: 'Invalid page number.' });
        return;
    }

    const perpage = Number(req.query.per_page);

    if (Object.is(NaN, perpage)) {
        res.status(400).json({ error: 'Invalid per_page number.' });
        return;
    }

    const start = (page - 1) * perpage;
    const end = start + perpage;
    const data: Item[] = database.slice(start, end);

    res.json(data);

} //:: ƒ list


function show(_req: Request, res: Response): void
{
    res.send('show');
} //:: ƒ show


function store(_req: Request, res: Response): void
{
    res.send('store');
} //:: ƒ store


function update(_req: Request, res: Response): void
{
    res.send('update');
} //:: ƒ update


function remove(_req: Request, res: Response): void
{
    res.send('remove');
} //:: ƒ remove


export default {
    list,
    show,
    store,
    update,
    remove,
};
