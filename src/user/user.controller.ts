import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto, GetUserDto  } from './user.dto';

@Controller('user')
export class UserController {

    @Post()
    create(@Body() createUserDto: CreateUserDto){

        return "this action creates a user"
        // this.UserService.create(CreateUserDto);

    }

    @Get()
    get(@Param() getUserDto: GetUserDto){

        return "this action returns a user"
        // this.UserService.get(GetUserDto);

    }


}
