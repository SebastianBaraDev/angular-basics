import { Component, inject } from '@angular/core';
import { CounterService } from '../../../../counter-service/counter-service';

@Component({
  imports: [],
  selector: 'app-comp-b',
  styleUrl: './comp-b.scss',
  templateUrl: './comp-b.html',
  providers: [CounterService],
})
export class CompB {
  CounterService = inject(CounterService);
}
