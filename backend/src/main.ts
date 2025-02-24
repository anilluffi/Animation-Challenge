import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Разрешаем CORS
  app.enableCors({
    origin: 'http://localhost:3001', // Разрешаем фронтенду делать запросы
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Разрешаем кук и заголовки авторизации
  });

  await app.listen(3000);
}
bootstrap();
