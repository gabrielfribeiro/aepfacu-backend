import { IsNotEmpty, IsString } from 'class-validator';

export class UserLoginDTO {
  @IsNotEmpty()
  @IsString()
  cnpj: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
