// Libraries

// Shared Module

import type DataManager from '@shared/application/data/DataManager.js';

import Repository from '@shared/application/data/Repository.js';

// Other Modules

// Same Layer

import type IUsersDataManager from './IUsersDataManager.js';

// Lower Layers

import type User from '../domain/User.js';

import UsersService from '../domain/UsersService.js';

// Types

type TManager = DataManager & IUsersDataManager;

// Constants


/**
 * @description 
 */
export default class UsersRepository extends Repository<TManager>
{

    [property: string | symbol]: unknown;

    // public ATTRIBUTES

    // protected ATTRIBUTES

    // private ATTRIBUTES

    // public static ATTRIBUTES

    // protected static ATTRIBUTES

    // private static ATTRIBUTES

    // Constructor, Getters, Setters

    public constructor(manager: TManager)
    {
        super(manager);
    }

    // public METHODS

    public async all(): Promise<User[]>
    {
        await this.manager.connect();
        const query = await this.manager.all();
        const data = Array.from(query).map(UsersService.createUser);
        await this.manager.disconnect();
        return data;
    }

    public async store(data: User): Promise<void>
    {
        await this.manager.connect();
        await this.manager.store(data.flatten());
        await this.manager.disconnect();
    }

    public async update(target: User, data: Record<string, unknown>): Promise<void>
    {
        await this.manager.connect();
        await this.manager.update(target.flatten(), data);
        await this.manager.disconnect();
    }

    public async delete(target: User): Promise<void>
    {
        await this.manager.connect();
        await this.manager.delete(target.flatten());
        await this.manager.disconnect();
    }

    // protected METHODS

    // private METHODS

    // public static METHODS

    // protected static METHODS

    // private static METHODS

} //:: class
