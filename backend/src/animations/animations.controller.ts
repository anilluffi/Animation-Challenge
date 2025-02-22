import { Controller, Get } from '@nestjs/common';
import * as fs from 'fs';

@Controller('api/animations')
export class AnimationsController {
    @Get()
    getAnimations() {
        const data = fs.readFileSync('animation_data.json', 'utf-8');
        return JSON.parse(data);
    }
}
