import { ApiProperty, PartialType } from '@nestjs/swagger';
// avaliationType String

export class CreateAvaliationDto {
  @ApiProperty({
    description: 'Avaliation Type',
    example: 'AutoAvaliation | avaliationByManager',
  })
  avaliationType: string;
  @ApiProperty({
    description: 'UserAssignment Id',
    example: 'cajskdadjkaldajklsdaj',
  })
  userAssignmentId: string;

  @ApiProperty({
    description: 'Media',
    example: 1,
    required: false,
  })
  media: number;
}

export class UpdateUserDto extends PartialType(CreateAvaliationDto) {}
