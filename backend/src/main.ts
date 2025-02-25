import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  
  app.enableCors({
    origin: 'http://localhost:3001',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  //app.setGlobalPrefix('api'); // 

  // Фильтр для поддержки маршрутов (без "api/")
  app.use((req, res, next) => {
    if (req.url.startsWith('/api')) {
      next();
    } else {
      req.url = `/api${req.url}`;
      next();
    }
  });

  await app.listen(3000);
}
bootstrap();
