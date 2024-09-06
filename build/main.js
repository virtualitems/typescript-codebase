#!/usr/bin/env node
import { program } from 'commander';
import fs from 'fs';
import path from 'path';
program
    .name('tshex')
    .option('--lib <name>', 'creates a new library with it\'s shared directory')
    .option('--ctx <name>', 'creates a new context')
    .option('--cls <name>', 'creates a new class')
    .option('--dir <path>', 'sets the directory to create the new item')
    .parse(process.argv);
function executeCreateLib(templatesDir, libraryDir) {
    try {
        fs.cpSync(path.join(templatesDir, 'lib'), libraryDir, {
            recursive: true,
            filter: (src) => (!src.endsWith('.gitkeep'))
        });
        console.log('Library created successfully');
    }
    catch (err) {
        console.error(err);
    }
}
function executeCreateContext(templatesDir, contextDir) {
    try {
        fs.cpSync(path.join(templatesDir, 'ctx'), contextDir, {
            recursive: true,
            filter: (src) => (!src.endsWith('.gitkeep'))
        });
        console.log('Context created successfully');
    }
    catch (err) {
        console.error(err);
    }
}
function executeCreateClass(templatesDir, classDir) {
    try {
        fs.cpSync(path.join(templatesDir, 'class.ts'), classDir, {});
        console.log('Class created successfully');
    }
    catch (err) {
        console.error(err);
    }
}
(function () {
    const templatesDir = path.join(import.meta.dirname, '..', 'templates');
    const options = program.opts();
    let targetDir = path.resolve(options.dir ?? process.cwd());
    if (Object.keys(options).length === 0) {
        program.help();
        return;
    }
    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
    }
    if (options.lib !== undefined) {
        targetDir = path.join(targetDir, options.lib);
        executeCreateLib(templatesDir, targetDir);
    }
    if (options.ctx !== undefined) {
        const ctxDir = path.join(targetDir, options.ctx);
        executeCreateContext(templatesDir, ctxDir);
    }
    if (options.cls !== undefined) {
        const clsDir = path.join(targetDir, options.cls + '.ts');
        executeCreateClass(templatesDir, clsDir);
    }
})();
