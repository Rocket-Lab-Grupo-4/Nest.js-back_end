import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { AssignmentService } from './assignment.service';
import { AssignmetAnswerDto, UpdateAssignmentDto } from './assignment.DTO';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('assignment')
@Controller('assignment')
export class AssignmentController {
  constructor(private readonly assignmentService: AssignmentService) {}

  @Post()
  async createAssignment(@Body() createAssignment: AssignmetAnswerDto) {
    return await this.assignmentService.create(createAssignment);
  }

  @Get()
  async findAll() {
    return await this.assignmentService.findAll();
  }

  @Get('assignment/:id')
  async findOne(@Param('id') id: string) {
    return await this.assignmentService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() assignmentData: UpdateAssignmentDto,
  ) {
    return await this.assignmentService.update(id, assignmentData);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.assignmentService.delete(id);
  }
}
