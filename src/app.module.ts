import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';

import { AppController } from './app.controller';

import { AppService } from './app.service';
import { ConfigService } from './config/config.service';

import { Configuration } from './config/config.keys';

@Module({
  imports: [ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  static port: number | string;

  constructor(private readonly _configService: ConfigService) {
    AppModule.port = _configService.get(Configuration.PORT);
  }
}
