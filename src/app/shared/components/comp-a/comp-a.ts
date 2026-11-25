import { Component, inject } from '@angular/core';
import { CounterService } from '../../../../counter-service/counter-service';

@Component({
  imports: [],
  selector: 'app-comp-a',
  styleUrl: './comp-a.scss',
  templateUrl: './comp-a.html',
  providers: [CounterService],
})
export class CompA {
  CounterService = inject(CounterService);
}
