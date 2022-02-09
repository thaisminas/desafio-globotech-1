import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CourseDTO } from './dto/course-dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  create(@Body() name: CourseDTO) {
    return this.coursesService.create(name);
  }

  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  @Get(':id')
  findOne(@Param() id: CourseDTO) {
    return this.coursesService.findOne(id);
  }

  @Delete(':id')
  remove(@Param() id: CourseDTO) {
    return this.coursesService.remove(id);
  }
}
