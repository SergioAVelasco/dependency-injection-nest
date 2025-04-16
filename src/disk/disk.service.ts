import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) {}

  readData(): void {
    this.powerService.supplyPower(50);
    console.log('Disk is reading data...');
  }
}
