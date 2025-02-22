import { Controller, Get } from '@nestjs/common';
import { AnimationsService } from './animations.service';

@Controller('api/animations')
export class AnimationsController {
  constructor(private readonly animationsService: AnimationsService) {}

  @Get()
  getAnimations() {
    return this.animationsService.getAllAnimations();
  }
}
