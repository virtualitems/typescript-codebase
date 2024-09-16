// Libraries

// Shared Module

import Aggregate from '@shared/domain/Aggregate.js';
import EmailValueObject from '@shared/domain/value-objects/EmailValueObject.js';
import SymbolValueObject from '@shared/domain/value-objects/SymbolValueObject.js';
import StringValueObject from '@shared/domain/value-objects/StringValueObject.js';

// Other Modules

// Same Layer

import User from './User.js';

// Lower Layers

// Types

// Constants


/**
 * @description 
 */
export default class UsersAggregate extends Aggregate
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

    // protected METHODS

    // private METHODS

    // public static METHODS

    public static createUser(data?: { id?: symbol, slug?: symbol, name?: string, email?: string; }): User
    {
        const entity = new User();

        if (data === undefined) {
            return entity;
        }

        if (data.id !== undefined) {
            entity.id = SymbolValueObject.from(data.id);
        }

        if (data.slug !== undefined) {
            entity.slug = SymbolValueObject.from(data.slug);
        }

        if (data.name !== undefined) {
            entity.name = StringValueObject.from(data.name);
        }

        if (data.email !== undefined) {
            entity.email = EmailValueObject.from(data.email);
        }

        return entity;
    }

    // protected static METHODS

    // private static METHODS

} //:: class
