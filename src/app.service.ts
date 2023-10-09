import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    let count = 0;
    for (let index = 0; index < 1_000_000_000; index++) {
      count++;
    }
    return `serving from ${process.pid}-${count}`;
  }
}
