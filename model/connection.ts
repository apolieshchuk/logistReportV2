import * as mysql from 'mysql';
import * as dotenv from 'dotenv';

dotenv.config();

const pool: mysql.Pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

pool.on('connection', (conn: mysql.PoolConnection) => {
  conn.query('SET character_set_client=\'utf8mb4\'');
  conn.query('SET character_set_connection=\'utf8mb4\'');
  conn.query('SET character_set_results=\'utf8mb4\'');
  conn.query('SET NAMES utf8mb4');
});

export default pool;
