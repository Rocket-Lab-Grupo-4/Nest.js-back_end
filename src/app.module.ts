import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { AvaliationModule } from './modules/avaliation/avaliation.module';
import { QuestionModule } from './modules/question/question.module';
import { AnswerModule } from './modules/answer/answer.module';

@Module({
  imports: [UserModule, AvaliationModule, QuestionModule, AnswerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
