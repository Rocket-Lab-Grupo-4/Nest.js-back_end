import { Module } from '@nestjs/common';
import { UserAssignmentService } from './user-assignment.service';
import { UserAssignmentController } from './user-assignment.controller';

@Module({
  controllers: [UserAssignmentController],
  providers: [UserAssignmentService],
})
export class UserAssignmentModule {}
