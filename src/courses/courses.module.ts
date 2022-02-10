import { providers } from './providers';
import { CoursesRepository } from './courses-repository';
import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';

@Module({
  controllers: [CoursesController],
  providers: [CoursesService, CoursesRepository, ...providers],
  exports: [CoursesService, CoursesRepository, ...providers],
})
export class CoursesModule {}
