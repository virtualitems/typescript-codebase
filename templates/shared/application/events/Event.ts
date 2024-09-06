// Libraries

// Same Layer

// Lower Layers

// Types

// Interfaces

// Constants


/**
 * @description 
 */
export default abstract class Event
{

    [property: string]: unknown;

    // public ATTRIBUTES

    public readonly timestamp: number;

    public readonly details?: Generic;

    // protected ATTRIBUTES

    // private ATTRIBUTES

    // public static ATTRIBUTES

    // protected static ATTRIBUTES

    // private static ATTRIBUTES

    // Constructor, Getters, Setters

    public constructor(timestamp: number, details?: Generic)
    {
        this.timestamp = timestamp;
        this.details = details;
    }

    // public METHODS

    // protected METHODS

    // private METHODS

    // public static METHODS

    // protected static METHODS

    // private static METHODS

} //:: class
