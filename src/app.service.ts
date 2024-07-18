import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getFortune(): number {
    return Math.floor(1000 + Math.random() * 9000);
  }

  getFortuneStr(): string {
    return this.getFortune().toString();
  }
}
