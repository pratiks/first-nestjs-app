import { Body, Controller, Get, Query } from '@nestjs/common';
import { AuthService  } from './auth.service';
import {AuthorizationCallbackDto} from './auth.dto';
@Controller('')
export class AuthController {


    constructor(private authService: AuthService){}

    // Redirects user to login via the Procore authorization server
    @Get('/login')
    getAppRedirectUrl(){
        // return our
        const redirectUrl = this.authService.AuthRedirectUrl();
        return {
            data: redirectUrl
        }
    }

    // Procore Authorization Server calls back to this endpoint to then fetch the access token using code
    @Get('/callback')
    callback(@Query('code') callbackCode:string){
        return this.authService.getToken(callbackCode)
    }




}
