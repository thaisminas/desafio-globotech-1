import { CourseEntity } from '../entities/course-entity';

export const providers = [
  {
    provide: 'COURSES_REPOSITORY',
    useValue: CourseEntity,
  },
];
