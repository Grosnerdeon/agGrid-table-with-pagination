import { Controller, Post, Get, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async getCollection(@Body() body: any) {
    const result = await this.appService.getCollection(body);
    return result;
  }
}
