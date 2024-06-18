import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { AvaliationModule } from './modules/avaliation/avaliation.module';
import { QuestionModule } from './modules/question/question.module';

@Module({
  imports: [UserModule, AvaliationModule, QuestionModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
