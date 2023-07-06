import { Controller, Get, Post, Body } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller()
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get('/cats')
  findAll(): any {
    return this.catsService.findAll();
  }

  @Post('/addCat')
  addNew(@Body() cat: any): any {
    return this.catsService.addCat(cat);
  }
}
