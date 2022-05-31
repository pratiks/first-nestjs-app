import { Module } from '@nestjs/common';

import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ProcoreLoginService } from './procore-login.service';
import { PROCORE_AUTH_URL } from '../../config';

@Module({
  providers: [ProcoreLoginService],
  imports: [
    ConfigModule,
    HttpModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          timeout: 5000,
          maxRedirects: 5,
          baseURL: PROCORE_AUTH_URL,
        };
      },
    }),
  ],
  exports: [ProcoreLoginService, ConfigService],
})
export class ProcoreLoginModule {}
