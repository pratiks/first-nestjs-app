import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { HttpModule } from '@nestjs/axios';
import { PROCORE_API_URL, PROCORE_AUTH_URL } from 'src/config';

@Module({
  providers: [AuthService],
  imports: [ HttpModule.register({
    baseURL: PROCORE_AUTH_URL,
    timeout: 50000,
    maxRedirects: 5,
  }),],
  controllers: [AuthController],

  exports: [AuthService]
})
export class AuthModule {}
