import { Component, model } from '@angular/core';
import { Operation } from '../interfaces/operation';
import { Addition } from '../strategies/addition.strategy';
import { Subtraction } from '../strategies/subtraction.strategy';
import { Multiplication } from '../strategies/multiplication.strategy';
import { Division } from '../strategies/division.strategy';
import { CalculatorService } from '../services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {

  firstNumber!: number;
  secondNumber!: number;
  result!: number;
  operation!: Operation;

  addition: Operation = new Addition();
  subtraction: Operation = new Subtraction();
  multiplication: Operation = new Multiplication();
  division: Operation = new Division();

  constructor(private calculatorService: CalculatorService) { }

  setOperation(strategy: Operation) {
    if(!strategy) {
      return;
    }
    this.result = this.calculatorService.calculate(strategy, this.firstNumber, this.secondNumber);
  }
}
