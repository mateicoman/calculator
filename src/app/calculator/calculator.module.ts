import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { CalculatorService } from '../services/calculator.service';


@NgModule({
  exports: [
    CalculatorComponent
  ],
  declarations: [
    CalculatorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [CalculatorService]
})
export class CalculatorModule { }
