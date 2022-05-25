import { IsNotEmpty } from "class-validator";

export class AuthorizationCallbackDto {

    @IsNotEmpty()
    code: string;

}

export class OauthTokenResponseDto {
    access_token: string;
    token_type: string;
    expires_in: number;
    refresh_token: string;
    created_at: number;
  }
  



  export class OauthTokenRequestDto {
    grant_type: string;
    client_id: string;
    client_secret: string;
    code: string;
    redirect_uri: string;
    refresh_token: string;
  }