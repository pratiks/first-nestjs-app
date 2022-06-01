import { Body, Controller, Get, Post } from '@nestjs/common';
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
    @Post('/login')
    callback(@Body() authorizationCallbackDto: AuthorizationCallbackDto){
        return this.authService.getToken(authorizationCallbackDto)
    }




}
