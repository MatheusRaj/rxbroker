import knex from 'knex';
import { ReplaySubject } from 'rxjs';

const $connection = new ReplaySubject<any>(1);

export const init = params => {
  $connection.next(knex(params));
};

export const getConnection = $connection.asObservable();
