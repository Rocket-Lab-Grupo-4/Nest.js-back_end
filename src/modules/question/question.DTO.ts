import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateQuestionDto {
  @ApiProperty({
    description: 'Título da pergunta',
    example: 'Ambiente de trabalho',
  })
  title: string;

  @ApiProperty({
    description: 'Qual a sua pergunta?',
    example: 'Como você avalia o ambiente?',
  })
  question: string;
}

export class UpdateUserDto extends PartialType(CreateQuestionDto) {}
