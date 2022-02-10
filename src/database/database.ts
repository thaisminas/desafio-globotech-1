import { Sequelize } from 'sequelize-typescript';
import { CourseEntity } from '../courses/course-entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'db',
        port: 5432,
        username: 'tminas',
        password: 'password',
        database: 'desafio_globotech_1',
      });
      sequelize.addModels([CourseEntity]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
