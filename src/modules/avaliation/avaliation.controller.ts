import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AvaliationService } from './avaliation.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateAvaliationDto } from './avaliation.DTO';

@ApiTags('avaliation')
@Controller('avaliation')
export class AvaliationController {
  constructor(private readonly avaliationService: AvaliationService) {}

  @Post(':evaluatorId/:evaluatedId')
  async create(
    @Param('evaluatorId') evaluatorId: string,
    @Param('evaluatedId') evaluatedId: string,
    @Body() createAvaliationDto: CreateAvaliationDto,
  ) {
    return this.avaliationService.create(
      evaluatorId,
      evaluatedId,
      createAvaliationDto,
    );
  }

  @Get()
  async findAll() {
    return this.avaliationService.findAll();
  }

  @Get('findOne/:id')
  async findOne(@Param('id') id: string) {
    return this.avaliationService.findOne(id);
  }

  @Get('findByEvaluatedId/:evaluatedId')
  async findByEvaluatedId(@Param('evaluatedId') evaluatedId: string) {
    return this.avaliationService.findByEvaluatedId(evaluatedId);
  }

  @Get('findByEvaluatorId/:evaluatorId')
  async findByEvaluatorId(@Param('evaluatorId') evaluatorId: string) {
    return this.avaliationService.findAvaliationByEvaluatorId(evaluatorId);
  }

  @Get('findByAvaliationType/:avaliationType')
  async findByAvaliationType(@Param('avaliationType') avaliationType: string) {
    return this.avaliationService.findByAvaliationType(avaliationType);
  }

  @Get('findByUserAssignmentId/:userAssignmentId')
  async findByUserAssignmentId(
    @Param('userAssignmentId') userAssignmentId: string,
  ) {
    return this.avaliationService.findAvaliationByUserAssignmentId(
      userAssignmentId,
    );
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAvaliationDto: CreateAvaliationDto,
  ) {
    return this.avaliationService.update(id, updateAvaliationDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.avaliationService.remove(id);
  }
}
