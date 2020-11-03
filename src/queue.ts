import { getConnection } from './db';
import { filter, switchMap } from 'rxjs/operators';
import { from, interval } from 'rxjs';

export const getMessages = (queue: string) => {
  return getConnection.pipe(
    switchMap(connection =>
      from(connection.raw(`RECEIVE TOP(1) CONVERT(NVARCHAR(MAX), message_body) AS Message FROM ${queue};`))
    )
  );
};

export const listen = (queue: string) => {
  return interval(1000).pipe(
    switchMap(() => getMessages(queue)),
    filter((m: any[]) => !!m.length)
  );
};
