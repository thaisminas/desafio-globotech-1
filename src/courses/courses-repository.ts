import { Inject, Injectable } from '@nestjs/common';
import { CourseDTO } from './course-dto';
import { CourseEntity } from './course-entity';

@Injectable()
export class CoursesRepository {
  constructor(
    @Inject('COURSES_REPOSITORY')
    private courseRepository: typeof CourseEntity,
  ) {}

  createCourses(name: CourseDTO) {
    return this.courseRepository.create({ name: name.name });
  }

  findOneCourses(id: CourseDTO) {
    return this.courseRepository.findOne({
      where: {
        id: id.id,
      },
    });
  }

  findAllCourses() {
    return this.courseRepository.findAll();
  }

  deleteCourses(id: CourseDTO) {
    return this.courseRepository.destroy({
      where: {
        id: id.id,
      },
    });
  }
}
