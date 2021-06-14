import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { InstitutionDTO, StudentDTO } from './institution.dto';
import { InstitutionService } from './institution.service';

@Controller('/institution')
export class InstitutionController {
  constructor(private readonly institution: InstitutionService) {}

  @Post()
  async create(@Body() institution_data: InstitutionDTO) {
    return this.institution.create(institution_data);
  }

  @Get()
  async list() {
    return this.institution.list();
  }

  @Post('/student')
  async createStudent(@Body() student: StudentDTO) {
    return this.institution.createStudent(student);
  }

  @Delete('/student')
  async deleteStudent(@Query('ra') ra: string) {
    return this.institution.deleteStudent(ra);
  }
}
