import { InputType, Field } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@InputType()
export class CreateUserInput {
  @MinLength(1)
  @Field()
  username: string;

  @MinLength(1)
  @Field()
  email: string;

  @MinLength(1)
  @Field()
  password: string;
}
