const { Pool } = require('pg');
const logger = require('../utils/logger');

// Create a connection pool
const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false,
  max: 20, // Maximum number of clients in the pool
  idleTimeoutMillis: 30000, // How long a client is allowed to remain idle before being closed
  connectionTimeoutMillis: 2000, // How long to wait for a connection to become available
});

// Pool error handling
pool.on('error', (err, client) => {
  logger.error('Unexpected error on idle client', err);
  process.exit(-1);
});

// Pool connect handling
pool.on('connect', () => {
  logger.info('Connected to PostgreSQL database');
});

// Test the connection
const testConnection = async () => {
  try {
    const client = await pool.connect();
    logger.info('Database connection test successful');
    client.release();
    return true;
  } catch (err) {
    logger.error('Database connection test failed', err);
    return false;
  }
};

// Query helper function
const query = async (text, params) => {
  const start = Date.now();
  try {
    const res = await pool.query(text, params);
    const duration = Date.now() - start;
    logger.debug('Executed query', { text, duration, rows: res.rowCount });
    return res;
  } catch (err) {
    logger.error('Error executing query', { text, error: err.message });
    throw err;
  }
};

module.exports = {
  pool,
  query,
  testConnection
};