import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { UsersEntity } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private usersRepository: Repository<UsersEntity>,
  ) {}

  async createUser(username, email, password): Promise<UsersEntity> {
    const user = this.usersRepository.create({
      id: uuid(),
      username,
      email,
      password,
    });

    return this.usersRepository.save(user);
  }
}
