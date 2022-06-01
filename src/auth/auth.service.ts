import { Injectable } from '@nestjs/common';
import { PROCORE_AUTH_URL, PROCORE_CLIENT_ID, PROCORE_REDIRECT_URI, PROCORE_CLIENT_SECRET } from '../config';
import {OauthTokenRequestDto} from './auth.dto';
import { HttpService } from '@nestjs/axios';
import { map } from  'rxjs/operators'


@Injectable()
export class AuthService {

        constructor(private httpService: HttpService){

        }


        AuthRedirectUrl(){
            return `${PROCORE_AUTH_URL}/oauth/authorize?response_type=code&client_id=${PROCORE_CLIENT_ID}&redirect_uri=${PROCORE_REDIRECT_URI}`
        }


        async getToken(callbackDto): Promise<any> {

            // send Procore the code and receive the token in the response
            const requestDto: OauthTokenRequestDto = new OauthTokenRequestDto();

            requestDto.code = callbackDto;
            requestDto.client_id = PROCORE_CLIENT_ID;
            requestDto.client_secret = PROCORE_CLIENT_SECRET;
            requestDto.grant_type = 'authorization_code';
            requestDto.redirect_uri = PROCORE_REDIRECT_URI;
            console.log(requestDto)
            const response = await this.httpService.post('/oauth/token', requestDto).
            pipe(map( response =>
                response.data
            ))

            return response;

        }


}
