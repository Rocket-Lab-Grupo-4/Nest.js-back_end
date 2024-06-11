import { ApiProperty, PartialType } from '@nestjs/swagger';

// id            String   @id @default(cuid())
//   image         String?
//   name          String
//   office        String
//   dateNaissance DateTime
//   rg            String
//   adress        String
//   ctps          String
//   issuingBody   String
//   number        String
//   cpf           String
//   cep           String
//   complement    String
//   manager       Boolean

export class CreateUserDto {
  @ApiProperty({
    description: 'Image',
    type: String,
    required: false,
    example: 'https://www.example.com/image.jpg',
  })
  image: string;

  @ApiProperty({
    description: 'Name',
    type: String,
    required: true,
    example: 'John Doe',
  })
  name: string;

  @ApiProperty({
    description: 'Office',
    type: String,
    required: true,
    example: 'Developer',
  })
  office: string;

  @ApiProperty({
    description: 'Date of Birth',
    type: Date,
    required: true,
    example: '1990-01-01',
  })
  dateNaissance: Date;

  @ApiProperty({
    description: 'RG',
    type: String,
    required: true,
    example: '123456789',
  })
  rg: string;

  @ApiProperty({
    description: 'Adress',
    type: String,
    required: true,
    example: '123 Main St, City, State, Country',
  })
  adress: string;

  @ApiProperty({
    description: 'CTPS',
    type: String,
    required: true,
    example: '123456789',
  })
  ctps: string;

  @ApiProperty({
    description: 'Issuing Body',
    type: String,
    required: true,
    example: 'SSP',
  })
  issuingBody: string;

  @ApiProperty({
    description: 'Number',
    type: String,
    required: true,
    example: '123456789',
  })
  number: string;

  @ApiProperty({
    description: 'CPF',
    type: String,
    required: true,
    example: '123456789',
  })
  cpf: string;

  @ApiProperty({
    description: 'CEP',
    type: String,
    required: true,
    example: '12345678',
  })
  cep: string;

  @ApiProperty({
    description: 'Complement',
    type: String,
    required: true,
    example: 'Apt 123',
  })
  complement: string;

  @ApiProperty({
    description: 'Manager',
    type: Boolean,
    required: true,
    example: false,
  })
  manager: boolean;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
