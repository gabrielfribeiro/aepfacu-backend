export interface IInstitutionList {
  course_name: string;
  student_list: IStudent[];
}

export interface IStudent {
  course: string;
  scholarship: string;
  start_course: string;
  end_course: string;
  student: string;
  ra: string;
}
