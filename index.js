#!/usr/bin/env node
"use strict";

let syncOpen = require("sync-open"),
    program = require("commander");

program
  .arguments('<dir>')
  .action((dir) => {
    syncOpen(dir);
  })
  .parse(process.argv);