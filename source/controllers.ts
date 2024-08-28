/**
 * @fileoverview Controllers for the API.
 */

// Libraries

import { type Request, type Response } from 'express';

// Modules

import { database, Item } from './models.js';

// Types

// Constants


export function list(req: Request, res: Response): void
{

    const q = req.query.q;

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
    let data: Item[] = database.slice(start, end);

    if ('string' === typeof q) {
        data = data.filter((item) => item.description?.includes(q));
    }

    else if (q !== undefined) {
        res.status(400).json({ error: 'Invalid search query.' });
        return;
    }

    res.json({
        page: page,
        per_page: perpage,
        total: database.length,
        total_pages: Math.ceil(database.length / perpage),
        data: data,
    });

} //:: ƒ list


export function show(req: Request, res: Response): void
{

    const id = Number(req.params.id ?? NaN);

    if (Object.is(NaN, id)) {
        res.status(400).json({ error: 'Invalid item ID.' });
        return;
    }

    const item = database.find((item) => item.id === id);

    if (item === undefined) {
        res.status(404).json({ error: 'Item not found.' });
        return;
    }

    res.json({ data: item });

} //:: ƒ show


export function store(req: Request, res: Response): void
{
    if (req.body === undefined) {
        res.status(400).json({ error: 'Invalid request body.' });
        return;
    }

    if ('object' !== typeof req.body || req.body === null) {
        res.status(400).json({ error: 'Invalid request body.' });
        return;
    }

    if (Array.isArray(req.body)) {
        res.status(400).json({ error: 'Invalid request body.' });
        return;
    }

    if ('string' !== typeof req.body.description) {
        res.status(400).json({ error: 'Invalid item description.' });
        return;
    }

    if (req.body.description.length === 0) {
        res.status(400).json({ error: 'Invalid item description.' });
        return;
    }

    res.status(201).end();

} //:: ƒ store


export function update(_req: Request, res: Response): void
{
    res.send('update');
} //:: ƒ update


export function remove(_req: Request, res: Response): void
{
    res.send('remove');
} //:: ƒ remove
