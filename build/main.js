import { program } from 'commander';
import fs from 'fs';
import path from 'path';
program
    .option('--lib <name>', 'creates a new library with it\'s shared directory')
    .option('--ctx <name>', 'creates a new context')
    .option('--dir <path>', 'sets the directory to create the new item')
    .parse(process.argv);
function executeCreateLib(templatesDir, libraryDir) {
    fs.cp(path.join(templatesDir, 'shared'), path.join(libraryDir, 'shared'), {
        recursive: true,
        filter: (src) => (!src.endsWith('.gitkeep'))
    }, (err) => {
        if (err !== null)
            console.error(err);
        fs.copyFile(path.join(templatesDir, 'main.ts'), path.join(libraryDir, 'main.ts'), (err) => {
            if (err !== null)
                console.error(err);
            console.log('Library created successfully');
        });
    });
}
function executeCreateContext(templatesDir, contextDir) {
    fs.cp(path.join(templatesDir, 'example'), contextDir, {
        recursive: true,
        filter: (src) => (!src.endsWith('.gitkeep'))
    }, (err) => (err === null ? console.log('Context created successfully') : console.error(err)));
}
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
