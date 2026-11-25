import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header.component';
import { CompA } from './shared/components/comp-a/comp-a';
import { CompB } from './shared/components/comp-b/comp-b';

@Component({
  imports: [RouterOutlet, Header, CompA, CompB],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-basics');
}
