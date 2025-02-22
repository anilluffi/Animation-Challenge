import { Module } from '@nestjs/common';
import { AnimationsService } from './animations.service';
import { AnimationsController } from './animations.controller';

@Module({
  providers: [AnimationsService],
  controllers: [AnimationsController]
})
export class AnimationsModule {}
