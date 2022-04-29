import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(userService: UsersService) {}

  @Get()
  getUsers() {
    return 'Hello';
  }
}
