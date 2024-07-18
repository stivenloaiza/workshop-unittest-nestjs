import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/fortune')
  getFortune(): number {
    return this.appService.getFortune();
  }

  @Get('/fortune')
  getFortuneStr(): string {
    return this.appService.getFortuneStr();
  }
}
