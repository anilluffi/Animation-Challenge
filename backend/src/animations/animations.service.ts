import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class AnimationsService {
  private readonly animationsFilePath = path.join(__dirname, 'animation_data.json');

  getAllAnimations(): any {
    const data = fs.readFileSync(this.animationsFilePath, 'utf8');
    return JSON.parse(data);
  }
}
