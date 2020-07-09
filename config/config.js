'use strict';

module.exports = {
  'development': {
    'username': 'postgres',
    'password': 'postgres',
    'database': 'fc-demo',
    'host': '127.0.0.1',
    'dialect': 'postgres',
    migrationStorage: 'json'

  },
  production: {
    'username': process.env.DB_USER,
    'password': process.env.DB_PASS,
    'database': process.env.DB_NAME,
    'host': process.env.DB_HOST,
    'dialect': 'postgres',
    migrationStorage: 'json'
  }
};
