// Libraries

// Shared Module

import DataManager from '@shared/application/data/DataManager.js';
import UseCase from '@shared/application/UseCase.js';

// Other Modules

// Same Layer

import type FindUserDTO from './FindUserDTO.js';
import type IUsersDataManager from './IUsersDataManager.js';

// Lower Layers

// Types

type TManager = DataManager & IUsersDataManager;

// Interfaces

// Constants


/**
* @description 
*/
export default class FindUsersUseCase extends UseCase
{

    [property: string | symbol]: unknown;

    // public ATTRIBUTES

    // protected ATTRIBUTES

    protected _manager: TManager;

    // private ATTRIBUTES

    // public static ATTRIBUTES

    // protected static ATTRIBUTES

    // private static ATTRIBUTES

    // Constructor, Getters, Setters

    public constructor(manager: TManager)
    {
        super();
        this._manager = manager;
    }

    // public METHODS

    public override async execute(target?: Partial<FindUserDTO>): Promise<Iterable<FindUserDTO>>
    {
        await this._manager.connect();

        if (target === undefined) {
            return await this._manager.all();
        }

        return await this._manager.filter(target);
    }

    // protected METHODS

    // private METHODS

    // public static METHODS

    // protected static METHODS

    // private static METHODS

} //:: class
