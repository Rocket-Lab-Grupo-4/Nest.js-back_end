import { ApiProperty, PartialType } from '@nestjs/swagger';

export class AssignmetAnswerDto {
  @ApiProperty({
    description: 'Status',
    example: 'true',
  })
  status: boolean;

  @ApiProperty({
    description: 'Type',
    example: 'type',
  })
  type: string;

  @ApiProperty({
    description: 'Data Answered',
    example: '2021-09-26T00:00:00Z',
  })
  dataAnswered: Date;

  @ApiProperty({
    description: 'Date Concluded',
    example: '2021-09-26T00:00:00Z',
  })
  dateConcluded: Date;
}

export class UpdateAssignmentDto extends PartialType(AssignmetAnswerDto) {}
