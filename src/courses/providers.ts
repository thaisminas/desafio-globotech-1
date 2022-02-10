import { CourseEntity } from './course-entity';

export const providers = [
  {
    provide: 'COURSES_REPOSITORY',
    useValue: CourseEntity,
  },
];
