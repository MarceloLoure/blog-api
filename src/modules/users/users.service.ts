import { Injectable } from '@nestjs/common';
import { User } from './interface/user.interface';
import { updateUserDTO } from './dto/updateUserDTO';


@Injectable()
export class UsersService {
    users: User[] = [
        {
            id: 1,
            name: "Marcelo",
            username:"pangzinn2",
            password:"teste123",
            email:"pangzinn2@gmail.com"
        },
    ]

    create(user: User){
        this.users.push(user)
    }

    findAll():User[] {
        return this.users;
    }

    findOne(id: number):User {
        return this.users.find(user => user.id === id);
    }

    update(id: number, updatedUser: updateUserDTO) {
        const findUser = this.findOne(id)

        return findUser
    }

}
