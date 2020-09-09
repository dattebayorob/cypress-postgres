/// <reference types="cypress" />
const runQuery = require('./run-query');

module.exports = ( on, config ) => {
  on('task', {
    query: runQuery(config)
  })
}