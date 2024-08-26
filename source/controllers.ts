// Libraries

import { type Request, type Response } from 'express';

// Modules

// Constants


function list(_req: Request, _res: Response): void
{
    console.debug('list');
}

function show(_req: Request, _res: Response): void
{
    console.debug('show');
}

function store(_req: Request, _res: Response): void
{
    console.debug('store');
}

function update(_req: Request, _res: Response): void
{
    console.debug('update');
}

function remove(_req: Request, _res: Response): void
{
    console.debug('remove');
}


export default {
    list,
    show,
    store,
    update,
    remove,
};
