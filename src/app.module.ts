import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppController2 } from './app.controller2';
import { AppService2 } from './app.service2';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [AppController, AppController2, CatsController],
  providers: [AppService, AppService2, CatsService],
})
export class AppModule {}
