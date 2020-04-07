import * as express from 'express';
import * as mysql from 'mysql';
import dbPool from '../model/connection';

const router: express.Router = express.Router();

/* GET home page. */
router.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  dbPool.getConnection((err: mysql.MysqlError, conn: mysql.PoolConnection) => {
    if (err) {
      console.log(err);
      return;
    }
    /* get query */
    conn.query('SELECT * from auto', (err2: mysql.MysqlError, result: any) => {
      if (err2) throw err2;
      console.log(result[0]);
    });
  });
  res.render('index', { title: 'Express' });
});

export default router;
