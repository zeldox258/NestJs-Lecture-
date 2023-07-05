import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService2 {
  getHelloToNuri(): string {
    return 'Hello Mysterious Nuri You are number one!';
  }
}
