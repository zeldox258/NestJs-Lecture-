import { Controller, Get } from '@nestjs/common';
import { AppService2 } from './app.service2';

@Controller()
export class AppController2 {
  constructor(private readonly appService: AppService2) {}

  @Get('/nuri')
  goodBy(): string {
    return this.appService.getHelloToNuri();
  }
}
