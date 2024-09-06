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

    all(): Promise<Iterable<Generic>>;

    filter(target: Generic): Promise<Iterable<Generic>>;

    store(data: Generic): Promise<void>;

    update(target: Generic, data: Generic): Promise<void>;

    delete(target: Generic): Promise<void>;

    // protected METHODS

    // private METHODS

    // public static METHODS

    // protected static METHODS

    // private static METHODS

} //:: class
