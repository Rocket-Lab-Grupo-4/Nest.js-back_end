import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'The name of a user',
    example: 'John Doe',
    required: false,
    type: String,
  })
  name?: string;

  @ApiProperty({
    description: 'The email of a user',
    example: 'Teste@gmail.com',
    type: String,
  })
  email: string;

  @ApiProperty({
    description: 'The password of a user',
    example: '123456',
    type: String,
  })
  password: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
