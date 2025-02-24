import { Controller, Get, Render } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Get('register')
  @Render('register') // указывает, какой шаблон отрендерить
  showRegisterForm() {
    return {}; // Можно передавать данные в шаблон
  }
}
