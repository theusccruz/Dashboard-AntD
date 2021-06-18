import ICreateUserDTO from '../dtos/ICreateUserDTO';
import User from '../infra/typeorm/entities/User';

export default interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<User>;
  save(user: User): Promise<User>;
  findUserById(user_id: string): Promise<User | undefined>;
  findUserByEmail(email: string): Promise<User | undefined>;
  findAllUsers(): Promise<User[]>;
}
