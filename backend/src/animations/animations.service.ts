import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class AnimationsService {
  private animations: any;

  constructor() {
    const filePath = path.join(__dirname, '../../../animation_data.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    this.animations = JSON.parse(jsonData);
  }

  getAllAnimations() {
    return this.animations;
  }

  getAnimationByName(name: string) {
    return this.animations[name] || null;
  }
}
