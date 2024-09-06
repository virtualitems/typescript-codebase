# Hexagonal Architecture CLI

This CLI will help you to generate a hexagonal architecture project structure.

# Installation

```bash
npm install -g tshexcli
```
<!-- 
program
    .option('--lib <name>', 'creates a new library with it\'s shared directory')
    .option('--ctx <name>', 'creates a new context')
    .option('--dir <path>', 'sets the directory to create the new item');

program.parse(); -->
# Usage

## Help

```bash
tshexcli -h

tshexcli --help
```

## Create a new library

```bash
tshexcli --lib <name>
```

## Create a new context

```bash
tshexcli --ctx <name>
```

## Set the directory to create the new item

```bash
tshexcli --lib <name> --dir <path>

tshecli --ctx <name> --dir <path>
```
