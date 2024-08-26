// Libraries

import express from 'express';

// Shared Module

// Other Modules

// Same Layer

// Lower Layers

// Types

// Interfaces

// Constants


/**
 * @description Express application adapter.
 */
export default class Server
{

    [property: string]: unknown;

    // public ATTRIBUTES

    public port;

    // protected ATTRIBUTES

    protected app: express.Application;

    // private ATTRIBUTES

    // public static ATTRIBUTES

    // protected static ATTRIBUTES

    // private static ATTRIBUTES

    // Constructor, Getters, Setters

    public constructor(port: number)
    {
        this.port = port;
        this.app = express();
    }

    // public METHODS

    public listen(callback: () => void): void
    {
        this.app.listen(this.port, callback);
    }

    // protected METHODS

    // private METHODS

    // public static METHODS

    // protected static METHODS

    // private static METHODS

} //:: class
