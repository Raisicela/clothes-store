import { Injectable } from '@nestjs/common';
import { Seeder } from 'nestjs-seeder';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../entities/user.entity';
import { Model } from 'mongoose';
import * as bcryptjs from 'bcryptjs';

@Injectable()
export class UsersSeeder implements Seeder {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
  ) {}

  async seed(): Promise<any> {
    const users = [
      {
        email: 'admin@store.com',
        name: 'Admin',
        password: 'admin123',
        isActive: true,
        isAdmin: true,
        roles: ['admin'],
      },
      {
        email: 'user@store.com',
        name: 'User',
        password: 'user123',
        isActive: true,
        isAdmin: false,
        roles: ['user'],
      },
    ];

    const currentUsers = await this.userModel.find();
    if (currentUsers.length > 0) {
      return;
    }
    for (const user of users) {
      const { password, ...userData } = user;
      await this.userModel.create({
        password: bcryptjs.hashSync(password, 10),
        ...userData,
      });
    }
  }

  async drop(): Promise<any> {
    return this.userModel.deleteMany({});
  }
}
