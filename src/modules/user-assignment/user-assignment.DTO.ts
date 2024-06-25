import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateUserAssignmentDto {
  @ApiProperty({
    description: 'User Id',
    example: 'casldkjafna',
  })
  userId: string;

  @ApiProperty({
    description: 'Assignment Id',
    example: 'casdklasdnan',
  })
  assignmentId: string;

  @ApiProperty({
    description: 'Status',
    example: 'true',
  })
  status: boolean;
}

export class UpdateUserAssignmentDto extends PartialType(
  CreateUserAssignmentDto,
) {}
