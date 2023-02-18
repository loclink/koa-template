import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export default class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({
    type: 'varchar',
    comment: '用户名',
    unique: true,
  })
  username: string;
}
