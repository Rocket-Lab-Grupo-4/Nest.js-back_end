import { Injectable } from '@nestjs/common';
import UserRepository from './user.repositories';
import { CreateUserDto, UpdateUserDto } from './user.dto';

@Injectable()
export class UserService {
  async create(createUserDto: CreateUserDto) {
    try {
      const userExists = await UserRepository.findOne({
        email: createUserDto.email,
      });

      if (userExists) {
        return 'User already exists';
      }

      const newProduct = await UserRepository.create(createUserDto);

      if (!newProduct) {
        return 'Error creating user';
      }

      return newProduct;
    } catch (error) {
      return 'Error creating user';
    }
  }

  async findAll() {
    try {
      const users = await UserRepository.findAll();

      if (!users) {
        return 'No users found';
      }

      return users;
    } catch (error) {
      return 'Error fetching users';
    }
  }

  async findOne(id: string) {
    try {
      const user = await UserRepository.findOne({
        id,
      });

      if (!user) {
        return 'User not found';
      }

      return user;
    } catch (error) {
      return 'Error fetching user';
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    try {
      const userExists = await UserRepository.findOne({
        id,
      });

      if (!userExists) {
        return 'User not found';
      }

      const user = await UserRepository.update(id, updateUserDto);

      if (!user) {
        return 'Error updating user';
      }

      return user;
    } catch (error) {
      return 'Error updating user';
    }
  }

  async remove(id: string) {
    try {
      const userExists = await UserRepository.findOne({
        id,
      });

      if (!userExists) {
        return 'User not found';
      }

      const user = await UserRepository.remove({
        id,
      });

      if (!user) {
        return 'Error deleting user';
      }

      return user;
    } catch (error) {
      return 'Error deleting user';
    }
  }
}
