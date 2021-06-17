import { compare, hash } from 'bcryptjs';

import IHashProvider from '../models/IHashProvider';

export default class BCryptHashProvider implements IHashProvider {
  public async generateHash(password: string): Promise<string> {
    return hash(password, 10);
  }

  public async compare(password: string, hashed: string): Promise<boolean> {
    return compare(password, hashed);
  }
}
