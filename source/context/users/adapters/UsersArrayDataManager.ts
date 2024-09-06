// Libraries

// Shared Module

import ArrayDataManager from '@shared/adapters/data/ArrayDataManager.js';

// Other Modules

// Same Layer

// Lower Layers

import IUsersDataManager from '../application/IUsersDataManager.js';

// Types

// Interfaces

// Constants


/**
* @description 
*/
export default
    class
    UsersArrayDataManager
    extends
    ArrayDataManager<TObject>
    implements
    IUsersDataManager
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

    public async all(): Promise<TObject[]>
    {

        if (!this._connection) {
            throw new Error('Database not connected.');
        }

        return Array.from(this._connection);
    }

    public async filter(target: Partial<TObject>): Promise<TObject[]>
    {

        if (!this._connection) {
            throw new Error('Database not connected.');
        }

        const result: TObject[] = [];

        for (const item of this._connection) {

            let match = true;

            for (const key in target) {

                if (target[key] === undefined) {
                    continue;
                }

                if (item[key] !== target[key]) {
                    match = false;
                    break;
                }

            }

            if (match) {
                result.push(item);
            }

        } //:: for

        return result;

    }

    public async store(data: TObject): Promise<void>
    {

        if (!this._connection) {
            throw new Error('Database not connected.');
        }

        this._connection.push(data);

    }

    public async update(target: Partial<TObject>, data: Partial<TObject>): Promise<void>
    {

        if (!this._connection) {
            throw new Error('Database not connected.');
        }

        for (const item of this._connection) {

            let match = true;

            for (const key in target) {

                if (target[key] === undefined) {
                    continue;
                }

                if (item[key] !== target[key]) {
                    match = false;
                    break;
                }

            }

            if (match) {
                Object.assign(item, data);
            }

        } //:: for

    }

    public async delete(target: Partial<TObject>): Promise<void>
    {

        if (!this._connection) {
            throw new Error('Database not connected.');
        }

        for (let i = 0; i < this._connection.length; i++) {

            const item = this._connection[i];

            for (const key in item) {
                if (item[key] !== target[key]) {
                    continue;
                }
            }

            this._connection.splice(i, 1);

        } //:: for

    }

    // protected METHODS

    // private METHODS

    // public static METHODS

    // protected static METHODS

    // private static METHODS

} //:: class
