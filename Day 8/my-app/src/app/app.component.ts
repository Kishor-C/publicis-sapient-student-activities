import { Component } from '@angular/core';

// navigation
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// important, root component class
export class AppComponent {
  title = 'my-app';
  name = "Alexandar";
  items = ["apple", "grapes", "mango"];

  users = [
    {name: "Alex", age: 30},
    {name: "Bruce", age: 32},
    {name: "Charles", age: 31}
  ];
}
