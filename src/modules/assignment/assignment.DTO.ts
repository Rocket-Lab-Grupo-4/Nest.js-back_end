import { ApiProperty, PartialType } from '@nestjs/swagger';

export class AssignmetAnswerDto {
  @ApiProperty({
    description: 'Ciclo de avaliação',
    example: 'Ciclo de avaliação',
  })
  type: string;

  @ApiProperty({
    description: 'Data Answered',
    example: '2021-09-26',
  })
  dataAnswered: Date;

  @ApiProperty({
    description: 'Date Concluded',
    example: '2021-09-26',
  })
  dateConcluded: Date;
}

export class UpdateAssignmentDto extends PartialType(AssignmetAnswerDto) {}
