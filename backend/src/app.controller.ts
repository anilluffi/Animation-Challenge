import { Controller, Get } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return 'http://localhost:3000/api/animations';
  }

  @Get('api/animations')
  getAnimations() {
    // Путь к JSON-файлу относительно корня проекта
    const filePath = path.join(process.cwd(), 'src', 'animation_data.json');

    try {
      const data = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      return { error: `Failed to load animation data: ${error.message}` };
    }
  }
}
