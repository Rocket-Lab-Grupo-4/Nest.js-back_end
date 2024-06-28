import { ApiProperty, PartialType } from '@nestjs/swagger';

export class AssignmetAnswerDto {
  @ApiProperty({
    description: 'Data Answered',
    example: '2021-09-26',
    required: false,
  })
  dataAnswered: Date;

  @ApiProperty({
    description: 'Date Opened',
    example: '2021-09-26',
  })
  dateOpened: Date;

  @ApiProperty({
    description: 'Date Concluded',
    example: '2021-09-26',
  })
  dateConcluded: Date;
}

export class UpdateAssignmentDto extends PartialType(AssignmetAnswerDto) {}
