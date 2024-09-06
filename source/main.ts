import { program } from 'commander';
import fs from 'fs';
import path from 'path';


// COMMANDER SETUP

program
    .option('--lib <name>', 'creates a new library with it\'s shared directory')
    .option('--ctx <name>', 'creates a new context')
    .option('--dir <path>', 'sets the directory to create the new item');

program.parse();


// FUNCTIONS

function executeCreateLib(templatesDir: string, libraryDir: string)
{
    fs.cp(
        path.join(templatesDir, 'shared'),
        path.join(libraryDir, 'shared'),
        {
            recursive: true,
            filter: (src) => (!src.endsWith('.gitkeep'))
        },
        (err) => (err === null ? console.log('Library created successfully') : console.error(err))
    );

    fs.cp(
        path.join(templatesDir, 'main.ts'),
        path.join(libraryDir),
        {},
        (err) => (err === null ? console.log('Ready to start!') : console.error(err))
    );
}


function executeCreateContext(templatesDir: string, contextDir: string)
{
    fs.cp(
        path.join(templatesDir, 'example'),
        contextDir,
        {
            recursive: true,
            filter: (src) => (!src.endsWith('.gitkeep'))
        },
        (err) => (err === null ? console.log('Context created successfully') : console.error(err))
    );
}


// CLI

const templatesDir = path.join(import.meta.dirname, '..', 'templates');

const options = program.opts();

let targetDir = path.resolve(options.dir ?? process.cwd());

if (options.lib !== undefined) {
    targetDir = path.join(targetDir, options.lib);
    executeCreateLib(templatesDir, targetDir);
}

if (options.ctx !== undefined) {
    targetDir = path.join(targetDir, options.ctx);
    executeCreateContext(templatesDir, targetDir);
}
