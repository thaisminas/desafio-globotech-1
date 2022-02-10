import { CoursesRepository } from './courses-repository';
import { Injectable } from '@nestjs/common';
import { CourseDTO } from './course-dto';

@Injectable()
export class CoursesService {
  constructor(private courseRepository: CoursesRepository) {}

  create(name: CourseDTO) {
    return this.courseRepository.createCourses(name);
  }

  findAll() {
    return this.courseRepository.findAllCourses();
  }

  findOne(id: CourseDTO) {
    return this.courseRepository.findOneCourses(id);
  }

  remove(id: CourseDTO) {
    return this.courseRepository.deleteCourses(id);
  }
}
