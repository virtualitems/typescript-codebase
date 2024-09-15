// Libraries

// Shared Module

// Other Modules

// Same Layer

// Lower Layers

import UsersArrayDataManager from '../adapters/UsersArrayDataManager.js';
import UsersRepository from '../application/UsersRepository.js';
import UsersService from '../application/UsersService.js';

// Types

// Constants

export async function example()
{
    const database: Record<string, unknown>[] = [];

    const man = new UsersArrayDataManager(database);

    const rep = new UsersRepository(man);

    const service = new UsersService();

    await service.create(rep, { slug: Symbol.for('user-1'), name: 'User 1', email: 'user1@example.com' });
    await service.create(rep, { slug: Symbol.for('user-2'), name: 'User 2', email: 'user2@example.com' });

    await service.find(man).then(console.log);
}
