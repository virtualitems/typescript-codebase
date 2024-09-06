// Libraries

// Shared Module

// Other Modules

// Same Layer

// Lower Layers

import UsersArrayDataManager from '../adapters/UsersArrayDataManager.js';
import UsersRepository from '../application/UsersRepository.js';
import UsersFacade from '../application/UsersFacade.js';

// Types

// Constants

export function example()
{
    const database: Record<string, unknown>[] = [];

    const man = new UsersArrayDataManager(database);

    const rep = new UsersRepository(man);

    const facade = new UsersFacade();

    facade.create(rep, { slug: Symbol.for('user-1'), name: 'User 1', email: 'user1@example.com' });
    facade.create(rep, { slug: Symbol.for('user-2'), name: 'User 2', email: 'user2@example.com' });

    facade.find(man).then(console.log);
}
