import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateQuestionDTO {

    @ApiProperty({ description: 'ID da pergunta', example: 11 })
    id: number;

    @ApiProperty({ description: 'Título da pergunta', example: 'Sentimento de Dono' })
    title: string;

    @ApiProperty({ description: 'Descrição da pergunta', example: 'O grau em que se identifica com uma organização...' })
    description: string;

    @ApiProperty({ description: 'Resposta do usuário', example: 4 })
    response: number;

    @ApiProperty({ description: 'Justificativa do usuário', example: 'Sinto que preciso me esforçar mais...' })
    justification: string;
}

export class UpdateQuestionDTO extends PartialType(CreateQuestionDTO) {}