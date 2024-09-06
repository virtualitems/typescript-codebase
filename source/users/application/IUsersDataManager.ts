// Libraries

// Shared Module

// Other Modules

// Same Layer

// Lower Layers

// Types

// Interfaces

// Constants


/**
* @description 
*/
export default interface IUsersDataManager
{

    [property: string | symbol]: unknown;

    // public ATTRIBUTES

    // protected ATTRIBUTES

    // private ATTRIBUTES

    // public static ATTRIBUTES

    // protected static ATTRIBUTES

    // private static ATTRIBUTES

    // Constructor, Getters, Setters

    // public METHODS

    connect(...args: unknown[]): Promise<unknown>;

    disconnect(): Promise<unknown>;

    all(): Promise<Iterable<Record<string, unknown>>>;

    filter(target: Record<string, unknown>): Promise<Iterable<Record<string, unknown>>>;

    store(data: Record<string, unknown>): Promise<void>;

    update(target: Record<string, unknown>, data: Record<string, unknown>): Promise<void>;

    delete(target: Record<string, unknown>): Promise<void>;

    // protected METHODS

    // private METHODS

    // public static METHODS

    // protected static METHODS

    // private static METHODS

} //:: class
