import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { QuestionsService } from './questions.service';
import { CreateQuestionDTO, UpdateQuestionDTO } from './questions.dto';

@ApiTags('questions')
@Controller('questions')
export class QuestionsController {
    constructor(private readonly questionsService: QuestionsService) {}

    @Post()
    create(@Body() createQuestionDto: CreateQuestionDTO) {
        return this.questionsService.create(createQuestionDto);
    }

    @Get()
    findAll() {
        return this.questionsService.findAll();
  }

    @Get(':id') 
    findOne(@Param('id') id: number) {
        return this.questionsService.findOne(Number(id));
    }
    
    @Patch(':id')
    update(@Param('id') id: number, @Body() updateQuestionDto: UpdateQuestionDTO ) {
        return this.questionsService.update(Number(id), updateQuestionDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.questionsService.remove(Number(id));
    }
}

