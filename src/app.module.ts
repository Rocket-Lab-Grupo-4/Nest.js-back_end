import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { AvaliationModule } from './modules/avaliation/avaliation.module';
import { QuestionsModule } from './modules/questions/questions.module';

@Module({
  imports: [UserModule, AvaliationModule, QuestionsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
