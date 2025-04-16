import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({
  providers: [PowerService],
  exports: [PowerService], // Exporting PowerService to make it available for other modules
  // This allows other modules to import PowerService and use it
  // without needing to redefine it in their own providers array.
})
export class PowerModule {}
