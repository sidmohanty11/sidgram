import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity('User')
export class User {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  image_url: string;

  @Column()
  following: string[];

  @Column()
  followers: string[];

  @Column()
  joined_at: string;
}
