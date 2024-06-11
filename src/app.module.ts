import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { AvaliationModule } from './modules/avaliation/avaliation.module';

@Module({
  imports: [UserModule, AvaliationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
