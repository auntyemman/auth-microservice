import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';
import { AuthMsLogger } from './common/utils/logger.interceptor';
import * as http from 'http';

async function bootstrap() {
  const logger = new Logger('AuthMicroservice');
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [process.env.RABBITMQ_URL],
      queue: process.env.QUEUE_NAME,
      queueOptions: {
        durable: true,
      },
    },
  });

  app.useGlobalInterceptors(new AuthMsLogger());

  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.end('This is an HTTP response');
  });

  server.listen(process.env.PORT);

  await app.listen().finally(() => logger.log(`Auth Microservice: EventBus: User authentication service`));
}
bootstrap();
