import * as express from 'express';
import * as mysql from 'mysql';
import dbPool from '../model/connection';

const router: express.Router = express.Router();

/* GET home page. */
router.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  dbPool.getConnection((err: mysql.MysqlError, conn: mysql.PoolConnection) => {
    if (err) {
      res.render('error', { err });
      return next(err);
    }
    /* get query */
    conn.query('SELECT * from auto', (err2: mysql.MysqlError, result: any) => {
      if (err2) {
        res.render('error', { err });
        return next(err);
      }
      console.log(result[0]);
      return res.render('index', { autos: result });
    });
  });
});

export default router;
