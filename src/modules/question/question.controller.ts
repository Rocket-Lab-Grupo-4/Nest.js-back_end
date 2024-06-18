import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { QuestionService } from './question.service';
import { CreateQuestionDto, UpdateUserDto } from './question.DTO';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('question')
@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Post()
  async create(@Body() createQuestionDto: CreateQuestionDto) {
    return await this.questionService.create(createQuestionDto);
  }

  @Get()
  async findAll() {
    return await this.questionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.questionService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateQuestionDto: UpdateUserDto,
  ) {
    return await this.questionService.update(id, updateQuestionDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.questionService.remove(id);
  }
}
