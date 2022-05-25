// todo: ask Rafa about DTOs as classes vs types 
// When importing your DTOs, you can't use a type-only import as that would be erased at runtime, i.e. remember to import { CreateUserDto } instead of import type { CreateUserDto }.

import { IsNotEmpty,IsNumberString  } from "class-validator";

 class CreateUserDto {


/**
 * 
 * Now we can add a few validation rules in our CreateUserDto. 
 * We do this using decorators provided by the class-validator package, described in detail here.
 *  In this fashion, any route that uses the CreateUserDto will automatically enforce these validation rules.
 * 
 * With these rules in place, if a request hits our endpoint with an invalid email property in the request body,
 * the application will automatically respond with a 400 Bad Request code, along with the following response body:
 * 
    {
    "statusCode": 400,
    "error": "Bad Request",
    "message": ["email must be an email"]
    }

 */
@IsNotEmpty()
username: string;

@IsNotEmpty()
password: string;

}

class GetUserDto {

    @IsNumberString()
    id: number; 

}

export {  CreateUserDto, GetUserDto }