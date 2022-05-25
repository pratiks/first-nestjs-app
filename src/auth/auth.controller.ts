import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService  } from './auth.service';
import {AuthorizationCallbackDto} from './auth.dto';
@Controller('')
export class AuthController {


    constructor(private authService: AuthService){}

    @Get('/login')
    getAppRedirectUrl(){

        // return our 
        const redirectUrl = this.authService.AuthRedirectUrl();
        return {
            data: redirectUrl
        }
    }

    @Post('/login')
    callback(@Body() authorizationCallbackDto: AuthorizationCallbackDto){
        return this.authService.getToken(authorizationCallbackDto)
    }


    

}
