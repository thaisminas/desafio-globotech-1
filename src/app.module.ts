import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CoursesModule } from './courses/courses.module';
import { DatabaseModule } from './database/database-module';

@Module({
  imports: [CoursesModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
