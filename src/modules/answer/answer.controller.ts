import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { AnswerService } from './answer.service';
import { CreateAnswersDto, UpdateAnswerDto } from './answer.DTO';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('answers')
@Controller('answers')
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}

  @Post()
  async create(@Body() createAnswersDto: CreateAnswersDto) {
    const answer = await this.answerService.createMany(createAnswersDto);
    return answer;
  }

  @Get()
  async findAll() {
    const answer = await this.answerService.findAll();
    return answer;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const answer = await this.answerService.findOne(id);
    return answer;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAnswerDto: UpdateAnswerDto,
  ) {
    const answer = await this.answerService.update(id, updateAnswerDto);
    return answer;
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const answer = await this.answerService.delete(id);
    return answer;
  }
}
