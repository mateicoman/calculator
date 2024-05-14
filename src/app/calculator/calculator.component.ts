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

  firstNumber: number | null = null;
  currentNumber: string = '0';
  operation: Operation | null = null;
  waitForSecondNumber = false;

  addition: Operation = new Addition();
  cacat: Operation = new Subtraction();
  multiplication: Operation = new Multiplication();
  division: Operation = new Division();

  constructor(private calculatorService: CalculatorService) { }

  setOperation(strategy: Operation) {
    if(!strategy) {
      return;
    }
    this.firstNumber = parseFloat(this.currentNumber);
    this.operation = strategy;
    this.currentNumber = ' ';

  }

  numClick(digit: number) {
    if (this.currentNumber === '0') {
      this.currentNumber = digit.toString();
    } else {
      this.currentNumber = `${this.currentNumber}${digit}`;
    }
  }

  getDecimal(){
    if(!this.currentNumber.includes('.')){
        this.currentNumber += '.'; 
    }
  }

  clear(){
    this.currentNumber = '0';
    this.firstNumber = null;
    this.operation = null;
    this.waitForSecondNumber = false;
  }

  calculate() {
    this.currentNumber = this.calculatorService.calculate(this.operation!, this.firstNumber!, parseFloat(this.currentNumber)).toString();
  }

  getResult(){
    return this.currentNumber;
  }
}
