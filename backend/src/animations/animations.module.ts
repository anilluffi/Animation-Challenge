import { Module } from '@nestjs/common';
import { AnimationsController } from './animations.controller';

@Module({
  controllers: [AnimationsController],
})
export class AnimationsModule {}
