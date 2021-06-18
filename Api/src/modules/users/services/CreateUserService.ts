import { inject, injectable } from 'tsyringe';

import AppError from 'shared/errors/AppError';
import User from '../infra/typeorm/entities/User';
import IUsersRepository from '../repositories/IUsersRepository';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';

interface IRequestDTO {
  name: string;
  email: string;
  password: string;
}

@injectable()
export default class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({ password, email, name }: IRequestDTO): Promise<User> {
    const findUserWithSameEmail = await this.usersRepository.findUserByEmail(email);
    if (findUserWithSameEmail) {
      throw new AppError('This email in used by another user');
    }

    const hashedPassword = await this.hashProvider.generateHash(password);

    const newUser = await this.usersRepository.create({
      name,
      password: hashedPassword,
      email,
    });

    return newUser;
  }
}
