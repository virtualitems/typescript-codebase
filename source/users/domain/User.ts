// Libraries

// Shared Module

import Entity from '@shared/domain/Entity.js';

import EmailValueObject from '@shared/domain/value-objects/EmailValueObject.js';
import SymbolValueObject from '@shared/domain/value-objects/SymbolValueObject.js';
import StringValueObject from '@shared/domain/value-objects/StringValueObject.js';

// Other Modules

// Same Layer

// Lower Layers

// Types

// Interfaces

// Constants


/**
 * @description 
 */
export default class User extends Entity
{

    [property: string | symbol]: unknown;

    // public ATTRIBUTES

    public id?: SymbolValueObject;

    public slug?: SymbolValueObject;

    public email?: EmailValueObject;

    public name?: StringValueObject;

    // protected ATTRIBUTES

    // private ATTRIBUTES

    // public static ATTRIBUTES

    // protected static ATTRIBUTES

    // private static ATTRIBUTES

    // Constructor, Getters, Setters

    public constructor()
    {
        super();
    }

    // public METHODS

    public override equals(other: User): boolean
    {

        const existsID = this.id !== undefined && other.id !== undefined;
        const existsSlug = this.slug !== undefined && other.slug !== undefined;

        if (!existsID && !existsSlug) {
            return false;
        }

        if (existsID && !(this.id!.equals(other.id!))) {
            return false;
        }

        if (existsSlug && !(this.slug!.equals(other.slug!))) {
            return false;
        }

        return true;

    }

    public override flatten(): Record<string, unknown>
    {
        return {
            id: this.id?.value,
            slug: this.slug?.value,
            name: this.name?.value,
            email: this.email?.value
        };
    }

    // protected METHODS

    // private METHODS

    // public static METHODS

    // protected static METHODS

    // private static METHODS

} //:: class
