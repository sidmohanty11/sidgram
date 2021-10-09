import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field((type) => ID)
  id: string;

  @Field()
  username: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  image_url: string;

  @Field((type) => [String])
  following: string[];

  @Field((type) => [String])
  followers: string[];

  @Field()
  joined_at: string;
}
