import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

import { OuathTokenRevokeRequestDto } from './dto/ouath-token-revoke-request.dto';
import {
  PROCORE_CLIENT_ID,
  PROCORE_CLIENT_SECRET,
  PROCORE_REDIRECT_URI,
  PROCORE_SA_CLIENT_ID,
  PROCORE_SA_CLIENT_SECRET,
} from '../../config';
import { OauthTokenRequestDto } from './dto/oauth-token-request.dto';

@Injectable()
export class ProcoreLoginService {
  constructor(private readonly httpService: HttpService) {}

  async getAccessToken(code: string): Promise<any> {
    const dto: OauthTokenRequestDto = new OauthTokenRequestDto();

    dto.client_id = PROCORE_CLIENT_ID;
    dto.client_secret = PROCORE_CLIENT_SECRET;
    dto.code = code;
    dto.redirect_uri = PROCORE_REDIRECT_URI;
    dto.grant_type = 'authorization_code';

    return await this.httpService.post('/oauth/token', dto).toPromise();
  }

  async revokeToken(token: string): Promise<any> {
    const dto: OuathTokenRevokeRequestDto = new OuathTokenRevokeRequestDto();
    dto.client_id = PROCORE_CLIENT_ID;
    dto.client_secret = PROCORE_CLIENT_SECRET;
    dto.token = token;

    return await this.httpService.post('/oauth/revoke', dto).toPromise();
  }

  async getAccessTokenByClientCredentials(): Promise<any> {
    const dto: OauthTokenRequestDto = new OauthTokenRequestDto();

    dto.client_id = PROCORE_SA_CLIENT_ID;
    dto.client_secret = PROCORE_SA_CLIENT_SECRET;
    dto.grant_type = 'client_credentials';

    return await this.httpService.post('/oauth/token', dto).toPromise();
  }
}
