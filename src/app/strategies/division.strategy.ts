import { Operation } from "../interfaces/operation";

export class Division implements Operation {
    execute(firstNumber: number, secondNumber: number): number {
        if(secondNumber === 0){
            throw new Error('Division by zero is not allowed');
        }
        return firstNumber / secondNumber;
    }
}