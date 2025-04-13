import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    const filePath = path.join(__dirname, '..', 'users.json');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    this.users = JSON.parse(fileContent);
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}
