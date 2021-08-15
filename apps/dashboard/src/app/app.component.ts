import { Component } from '@angular/core';

@Component({
  selector: 'inventory-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'Inventory';
  links= [
    {path: '', icon: 'home', title: 'Home'},
    {path: 'cars', icon: 'view_list', title: 'Cars'}
  ]
}
