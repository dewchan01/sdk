import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  public getVersion(): string {
    // eslint-disable-next-line
    const packageJson = require('../package.json');
    return (
      process.env.APP_VERSION ??
      (packageJson?.version as string) ??
      'Error retrieving version'
    );
  }
}
