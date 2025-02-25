import { Controller, Post, Body, BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async registerUser(@Body() registerDto: RegisterDto) {
    console.log('📨 Received register request:', registerDto);
    try {
      return await this.authService.register(registerDto);
    } catch (error) {
      console.error('❌ Registration error:', error);

      if (error.code === '23505') {
        throw new BadRequestException('Username or email already exists');
      }

      throw new InternalServerErrorException('Something went wrong');
    }
  }
}
