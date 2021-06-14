import { HttpException, Injectable } from '@nestjs/common';
import { InstitutionDTO, StudentDTO } from './institution.dto';
import { IInstitutionList, IStudent } from './institution.interface';

const course_list: IInstitutionList[] = [];
const student_list: IStudent[] = [];

@Injectable()
export class InstitutionService {
  public async create(institution: InstitutionDTO) {
    if (institution.password !== institution.confirm_password) {
      throw new HttpException('As senhas devem ser iguais', 422);
    }
    return institution;
  }

  public async list() {
    return course_list.map((item) => {
      return {
        course_name: item.course_name,
        student_list: student_list.filter(
          (student) => student.course === item.course_name,
        ),
      };
    });
  }

  public async createStudent(student: StudentDTO) {
    const is_exist = student_list.some((item) => item.ra === student.ra);
    const is_exist_course = course_list.some(
      (item) => item.course_name === student.course,
    );

    if (!is_exist_course) {
      course_list.push({ course_name: student.course, student_list: [] });
    }

    if (is_exist) {
      throw new HttpException('Aluno já foi cadastrado', 400);
    }

    const new_student = student_list.push(student);
    return { status: `Successfully created - ${new_student}` };
  }

  public async deleteStudent(ra: string) {
    const index = student_list.findIndex((item) => item.ra === ra);

    if (index < 0) {
      throw new HttpException('Não existe aluno com esse RA', 422);
    }

    if (index >= 0) {
      student_list.splice(index, 1);
    }

    throw new HttpException('Aluno deletado com sucesso', 200);
  }
}
