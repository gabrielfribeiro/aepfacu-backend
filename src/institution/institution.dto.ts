import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class InstitutionDTO {
  @IsNotEmpty()
  @IsString()
  cnpj: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  confirm_password: string;
}

export class StudentDTO {
  @IsNotEmpty()
  @IsString()
  course: string;

  @IsNotEmpty()
  @IsString()
  scholarship: string;

  @IsNotEmpty()
  @IsString()
  start_course: string;

  @IsNotEmpty()
  @IsString()
  end_course: string;

  @IsNotEmpty()
  @IsString()
  student: string;

  @IsNotEmpty()
  @IsString()
  ra: string;
}
