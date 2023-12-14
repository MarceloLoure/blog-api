import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { FindOneParams, createUserDTO } from './dto/createUserDTO';
import { updateUserDTO } from './dto/updateUserDTO';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Post()
    create(@Body() createUser: createUserDTO ){
        this.usersService.create(createUser);
    }

    @Get()
    findAll(){
        return this.usersService.findAll()
    }

    @Get(':id')
    findOne(@Param() params: FindOneParams){
        return this.usersService.findOne(params.id)
    }

    @Patch(':id')
    update(@Param() params: FindOneParams, @Body() updateDTO: updateUserDTO){
        return this.usersService.update(params.id, updateDTO)
    }

    
}
