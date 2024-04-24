import { Operation } from "../interfaces/operation";

export class Addition implements Operation {
    execute(firstNumber: number, secondNumber: number): number {
        return firstNumber + secondNumber;
    }
}