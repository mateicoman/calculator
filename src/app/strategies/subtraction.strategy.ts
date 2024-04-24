import { Operation } from "../interfaces/operation";

export class Subtraction implements Operation {
    execute(firstNumber: number, secondNumber: number): number {
        return firstNumber - secondNumber;
    }
}