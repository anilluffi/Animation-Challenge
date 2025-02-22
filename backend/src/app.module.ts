import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

@Module({
  controllers: [AppController],  // Подключаем контроллер
})
export class AppModule {}
