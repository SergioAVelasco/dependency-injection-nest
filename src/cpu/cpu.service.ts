import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service';

@Injectable()
export class CpuService {
  constructor(private powerService: PowerService) {}

  compute(a: number, b: number): number {
    this.powerService.supplyPower(100);
    console.log('CPU is computing...');
    return a + b;
  }
}
