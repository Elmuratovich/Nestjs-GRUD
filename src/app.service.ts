import { Injectable } from '@nestjs/common';
import { User } from './users/users.model';

@Injectable()
export class AppService {
  private users: User[] = [];
}
