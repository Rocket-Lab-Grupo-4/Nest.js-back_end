import { Injectable } from '@nestjs/common';
import UserRepository from './user.repositories';
import { CreateUserDto, UpdateUserDto } from './user.dto';

@Injectable()
export class UserService {
  async create(createUserDto: CreateUserDto) {
    try {
      const userExists = await UserRepository.findOne({
        cpf: createUserDto.cpf,
      });

      if (userExists) {
        return 'User already exists';
      }

      const dateNaissance = new Date(createUserDto.dateNaissance);

      const userDtoWithDate = {
        ...createUserDto,
        dateNaissance: dateNaissance,
      };

      const newProduct = await UserRepository.create(userDtoWithDate);

      if (!newProduct) {
        return 'Error creating user';
      }

      return newProduct;
    } catch (error) {
      return `${error} Error creating user`;
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

      const dateNaissance = updateUserDto.dateNaissance
        ? new Date(updateUserDto.dateNaissance)
        : userExists.dateNaissance;

      const userDtoWithDate = {
        ...updateUserDto,
        dateNaissance: dateNaissance,
      };

      const user = await UserRepository.update(id, userDtoWithDate);

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
