// Libraries

import { type Request, type Response } from 'express';

// Modules

import { database, Item } from './models.js';

// Types

// Constants


export function list(req: Request, res: Response): void
{

    const page = Number(req.query.page ?? 1);

    if (Object.is(NaN, page)) {
        res.status(400).json({ error: 'Invalid page number.' });
        return;
    }

    const perpage = Number(req.query.per_page ?? 10);

    if (Object.is(NaN, perpage)) {
        res.status(400).json({ error: 'Invalid per_page number.' });
        return;
    }

    const start = (page - 1) * perpage;
    const end = start + perpage;
    const data: Item[] = database.slice(start, end);

    res.json({
        page: page,
        per_page: perpage,
        total: database.length,
        total_pages: Math.ceil(database.length / perpage),
        data: data,
    });

} //:: ƒ list


export function show(_req: Request, res: Response): void
{
    res.send('show');
} //:: ƒ show


export function store(_req: Request, res: Response): void
{
    res.send('store');
} //:: ƒ store


export function update(_req: Request, res: Response): void
{
    res.send('update');
} //:: ƒ update


export function remove(_req: Request, res: Response): void
{
    res.send('remove');
} //:: ƒ remove
