import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppController2 } from './app.controller2';
import { AppService2 } from './app.service2';

@Module({
  imports: [],
  controllers: [AppController, AppController2],
  providers: [AppService, AppService2],
})
export class AppModule {}
