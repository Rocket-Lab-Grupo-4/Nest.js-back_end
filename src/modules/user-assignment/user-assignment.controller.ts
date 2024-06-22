import {
  Controller,
  Body,
  Param,
  Get,
  Post,
  Patch,
  Delete,
} from '@nestjs/common';
import { UserAssignmentService } from './user-assignment.service';
import {
  CreateUserAssignmentDto,
  UpdateUserAssignmentDto,
} from './user-assignment.DTO';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('User Assignment')
@Controller('user-assignment')
export class UserAssignmentController {
  constructor(private readonly userAssignmentService: UserAssignmentService) {}

  @Post()
  async create(@Body() CreateUserAssignmentDto: CreateUserAssignmentDto) {
    return await this.userAssignmentService.create(CreateUserAssignmentDto);
  }

  @Get()
  async findMany() {
    return await this.userAssignmentService.findMany();
  }

  @Get('userAssignment/:id')
  async findOne(@Param('id') id: string) {
    return await this.userAssignmentService.findOne(id);
  }

  @Get('user/:userId')
  async findByUser(@Param('userId') userId: string) {
    return await this.userAssignmentService.findByUser(userId);
  }

  @Get('assignment/:assignmentId')
  async findByAssignment(@Param('assignmentId') assignmentId: string) {
    return await this.userAssignmentService.findByAssignment(assignmentId);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: UpdateUserAssignmentDto) {
    return await this.userAssignmentService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.userAssignmentService.delete(id);
  }
}
