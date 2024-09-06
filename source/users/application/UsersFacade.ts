// Libraries

// Shared Module

import Facade from '@shared/application/Facade.js';

// Other Modules

// Same Layer

import type CreateUserDTO from './CreateUserDTO.js';
import type FindUserDTO from './FindUserDTO.js';
import type IUsersDataManager from './IUsersDataManager.js';
import type UsersRepository from './UsersRepository.js';

// Lower Layers

import UsersService from '../domain/UsersService.js';

// Types

// Interfaces

// Constants


/**
 * @description 
 * function arguments are Entity
 */
export default class UsersFacade extends Facade
{

    [property: string]: unknown;

    // public ATTRIBUTES

    // protected ATTRIBUTES

    // private ATTRIBUTES

    // public static ATTRIBUTES

    // protected static ATTRIBUTES

    // private static ATTRIBUTES

    // Constructor, Getters, Setters

    // public METHODS

    public async create(repository: UsersRepository, dto: CreateUserDTO): Promise<void>
    {
        const data = {
            slug: dto.slug,
            name: dto.name,
            email: dto.email,
        };

        const entity = UsersService.createUser(data);
        await repository.store(entity);
    }

    public async find(manager: IUsersDataManager, target?: Partial<FindUserDTO>): Promise<Iterable<FindUserDTO>>
    {
        await manager.connect();

        if (target === undefined) {
            return await manager.all();
        }

        return await manager.filter(target);
    }

    // protected METHODS

    // private METHODS

    // public static METHODS

    // protected static METHODS

    // private static METHODS

} //:: class
