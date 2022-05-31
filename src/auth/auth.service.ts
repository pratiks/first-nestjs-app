import { Injectable } from '@nestjs/common';
import { PROCORE_AUTH_URL, PROCORE_CLIENT_ID, PROCORE_REDIRECT_URI, PROCORE_CLIENT_SECRET } from '../config';
import {AuthorizationCallbackDto, OauthTokenResponseDto, OauthTokenRequestDto} from './auth.dto';
import { ProcoreLoginService } from '../procore/procore-login/procore-login.service';



@Injectable()
export class AuthService {

        constructor(private procoreLoginService: ProcoreLoginService){

        }


        AuthRedirectUrl(){
            return `${PROCORE_AUTH_URL}/oauth/authorize?response_type=code&client_id=${PROCORE_CLIENT_ID}&redirect_uri=${PROCORE_REDIRECT_URI}`
        }
        

        async getToken(callbackDto: AuthorizationCallbackDto): Promise<any> {
            
            // send Procore the code and receive the token in the response
            const requestDto = new OauthTokenRequestDto();
            
            
            requestDto.code = callbackDto.code; 
            requestDto.client_id = PROCORE_CLIENT_ID;
            requestDto.client_secret = PROCORE_CLIENT_SECRET;
            requestDto.grant_type = 'authorization_code';
            requestDto.redirect_uri = PROCORE_REDIRECT_URI;
            
            const response = this.procoreLoginService.getAccessToken(callbackDto.code);
            return response;

        }


}
