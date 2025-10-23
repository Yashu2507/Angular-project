import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Navbar } from './component/navbar/navbar';
import { Body } from './component/body/body';
import { Categories } from './component/categories/categories';
import { Corousel } from './component/corousel/corousel';
import { Footer } from './component/footer/footer';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar,Body,Corousel,Categories,Footer],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected readonly title = signal('angularstart');//Name of the Project
}
