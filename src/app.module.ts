import { Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { existsSync, mkdirSync } from 'fs';
import * as path from 'path';
import { AuthModule } from './auth/auth.module';
import { EmailModule } from './email/email.module';

@Module({
  imports: [
    /** Native Auth Module and Email Module */
    AuthModule,
    EmailModule,

    /** Mongoose Module */
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        uri: config.get<string>('MONGODB_URI'),
      }),
    }),

    /** Config Module */
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnModuleInit {
  async onModuleInit(): Promise<void> {
    if (!existsSync(path.join(__dirname, '..', 'logs'))) {
      mkdirSync(path.join(__dirname, '..', 'logs'));
    }
    return;
  }
}
