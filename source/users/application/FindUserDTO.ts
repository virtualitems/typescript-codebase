// Libraries

// Shared Module

import DataTransferObject from '@shared/application/DataTransferObject.js';

// Other Modules

// Same Layer

// Lower Layers

// Types

// Interfaces

// Constants


/**
* @description 
*/
export default class FindUserDTO extends DataTransferObject
{

    [property: string | symbol]: unknown;

    // public ATTRIBUTES

    // protected ATTRIBUTES

    // private ATTRIBUTES

    // public static ATTRIBUTES

    // protected static ATTRIBUTES

    // private static ATTRIBUTES

    // Constructor, Getters, Setters

    public constructor(
        public readonly slug?: symbol,
        public readonly name?: string,
        public readonly email?: string,
    )
    {
        super();
    }

    // public METHODS

    // protected METHODS

    // private METHODS

    // public static METHODS

    // protected static METHODS

    // private static METHODS

} //:: class
