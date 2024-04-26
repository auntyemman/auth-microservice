import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthMsLogger implements NestInterceptor {
  constructor(readonly msLogger = new Logger(AuthMsLogger.name)) {}
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
    const appContect = context.switchToRpc().getContext();
    const args = appContect['args'][0];
    const payload = JSON.parse(args['content'].toString());
    const queue = args['fields']['routingKey'];

    payload['queue'] = queue;

    if (payload['data']['file']) {
      payload['data']['file'] = { file: '...' };
      this.msLogger.log(JSON.stringify(payload));
      return next.handle();
    }

    this.msLogger.log(JSON.stringify(payload));

    return next.handle();
  }
}
