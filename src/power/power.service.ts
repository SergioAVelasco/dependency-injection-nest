import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
  supplyPower(wattage: number): void {
    console.log(`Supplying ${wattage} watts of power`);
  }
}
