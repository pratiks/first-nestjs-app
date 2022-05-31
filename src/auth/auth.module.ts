import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { HttpModule } from '@nestjs/axios';
import { PROCORE_API_URL, PROCORE_AUTH_URL } from 'src/config';
import { ProcoreLoginService } from '../procore/procore-login/procore-login.service';

@Module({
  providers: [AuthService],
  imports: [ ProcoreLoginService], 
  controllers: [AuthController],

  exports: [AuthService]
})
export class AuthModule {}
