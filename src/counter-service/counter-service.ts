import { Injectable } from '@angular/core';

export class CounterService {
  count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}
