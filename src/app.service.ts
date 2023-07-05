import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHelloToAlberto(): string {
    return 'Hello Mysterious Alberto You are number one!';
  }
}
