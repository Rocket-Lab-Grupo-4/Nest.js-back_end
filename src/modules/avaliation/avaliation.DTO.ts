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
}

export class UpdateUserDto extends PartialType(CreateAvaliationDto) {}
