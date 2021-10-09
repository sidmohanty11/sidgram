import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { UsersType } from './users.type';

@Resolver((of) => UsersType)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query((returns) => UsersType)
  user() {
    return {
      id: 'sdga',
      username: 'sid',
      email: 'sid@sid.com',
      password: 'sid',
      joined_at: new Date().toISOString(),
    };
  }

  @Mutation((returns) => UsersType)
  createUser(
    @Args('username') username: string,
    @Args('email') email: string,
    @Args('password') password: string,
  ) {
    return this.usersService.createUser(username, email, password);
  }
}
