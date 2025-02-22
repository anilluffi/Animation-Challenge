import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost', //  база запущена локально
  port: 5432,
  username: 'postgres', //  логин
  password: '1', //  пароль
  database: 'animation_db', // Название базы
  entities: [__dirname + '/../**/*.entity.{js,ts}'], // Поиск сущностей
  synchronize: true, // Автосоздание таблиц (не для продакшена!)
  logging: true,
};
