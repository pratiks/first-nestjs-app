import { Module } from '@nestjs/common';
import { ProcoreApiService } from './procore-api.service';
import { HttpModule } from '@nestjs/axios';
import { PROCORE_API_URL } from '../../config';

@Module({
  providers: [ProcoreApiService],
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
      baseURL: PROCORE_API_URL,
    }),
  ],
  exports: [ProcoreApiService],
})
export class ProcoreApiModule {}
