import * as operators from 'rxjs/operators';
import * as rxjs from 'rxjs';
import connection from './db';

export const getMessages = async (queue: string = '') => {
  try {
    const data = await connection.raw(`RECEIVE TOP(1) CONVERT(NVARCHAR(MAX), message_body) AS Message FROM ${queue};`);

    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const listen = async (queue: string, callback: (data: any) => void) => {
  return rxjs
    .interval(1000)
    .pipe(
      operators.exhaustMap(() => rxjs.from(getMessages(queue))),
      operators.flatMap(messages => {
        const data = messages.map(m => m.Message);

        return rxjs.of(...data);
      }),
      operators.filter(m => !!m)
    )
    .subscribe(async message => {
      callback(message);
    });
};

export default listen;
