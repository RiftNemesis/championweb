#!/usr/bin/env node
"use strict";
var debug = require('debug')('champion.gg');
var app = require('../server/app');
var db = require('../server/db');
var port = process.env.PORT || 80

db(function() {
  app.listen(port, function() {
    debug('express server listening on port', port)
  })
})
