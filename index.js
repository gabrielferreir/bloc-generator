#!/usr/bin/env node

const program = require('commander');
const create = require('./bin/create');

program
    .command('create <name>')
    .alias('c')
    // .option('-r, --recursive', 'Remove recursively')
    .action(create);

program.parse(process.argv);
