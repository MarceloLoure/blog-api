import { IsEmail, IsNotEmpty, IsNumberString, IsString } from "class-validator"


export class createUserDTO {
    @IsString()
    name:string

    @IsString()
    username: string

    @IsEmail()
    email: string

    @IsNotEmpty()
    password: string
}

export class FindOneParams {
    @IsNumberString()
    id: number;
}