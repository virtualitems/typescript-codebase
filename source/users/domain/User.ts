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

// Constants


/**
 * @description 
 */
export default class User extends Entity
{

    [property: string | symbol]: unknown;

    // public ATTRIBUTES

    public id: SymbolValueObject | null;
    public slug: SymbolValueObject | null;
    public email: EmailValueObject | null;
    public name: StringValueObject | null;

    // protected ATTRIBUTES

    // private ATTRIBUTES

    // public static ATTRIBUTES

    // protected static ATTRIBUTES

    // private static ATTRIBUTES

    // Constructor, Getters, Setters

    public constructor()
    {
        super();
        this.id = null;
        this.slug = null;
        this.email = null;
        this.name = null;
    }

    // public METHODS

    public override equals(other: User): boolean
    {
        const existsID = this.id !== null && other.id !== null;
        const existsSlug = this.slug !== null && other.slug !== null;

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
            id: this.id?.value ?? null,
            slug: this.slug?.value ?? null,
            name: this.name?.value ?? null,
            email: this.email?.value ?? null,
        };
    }

    // protected METHODS

    // private METHODS

    // public static METHODS

    // protected static METHODS

    // private static METHODS

} //:: class
