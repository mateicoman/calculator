import { Injectable } from '@angular/core';
import { Operation } from '../interfaces/operation';

@Injectable()
export class CalculatorService {

  constructor() { }

  calculate(operation: Operation, first: number, second: number): number{
    return operation.execute(first, second);
  }
}
