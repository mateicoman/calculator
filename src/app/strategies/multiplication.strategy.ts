import { Operation } from "../interfaces/operation";

export class Multiplication implements Operation {
    execute(firstNumber: number, secondNumber: number): number {
        return firstNumber * secondNumber;
    }
}