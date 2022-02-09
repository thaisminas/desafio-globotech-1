import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class CourseEntity extends Model {
  @Column
  name: string;
}
