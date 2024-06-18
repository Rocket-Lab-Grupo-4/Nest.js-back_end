import { Module } from '@nestjs/common';
import { AnswerController } from './answer.controller';
import { AnswerService } from './answer.service';
import { PrismaService } from 'src/database/prismaService';

@Module({
  imports: [],
  controllers: [AnswerController],
  providers: [AnswerService, PrismaService],
})
export class AnswerModule {}
