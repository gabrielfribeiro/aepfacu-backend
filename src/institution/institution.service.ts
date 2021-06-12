import { HttpException, Injectable } from '@nestjs/common';
import { InstitutionDTO, StudentDTO } from './institution.dto';
import { IInstitutionList } from './institution.interface';

const list: IInstitutionList = { course_name: '', student_list: [] };

@Injectable()
export class InstitutionService {
  public async create(institution: InstitutionDTO) {
    if (institution.password !== institution.confirm_password) {
      throw new HttpException('As senhas devem ser iguais', 422);
    }
    return institution;
  }

  public async list() {
    return [list];
  }

  public async createStudent(student: StudentDTO) {
    const is_exist = list.student_list.some((item) => item.ra === student.ra);
    const array_list = [list];

    const is_exist_course = array_list.some(
      (item) => student.course === item.course_name,
    );

    if (is_exist) {
      throw new HttpException('Aluno já foi cadastrado', 400);
    }

    if (!is_exist_course) {
      list.course_name = student.course;
    } else {
      return array_list.push({
        course_name: student.course,
        student_list: [student],
      });
    }

    const new_student = list.student_list.push(student);
    return { status: `Successfully created - ${new_student}` };
  }
}
