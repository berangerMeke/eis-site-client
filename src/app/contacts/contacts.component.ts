import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css',
  animations: [
    trigger('changeColor', [
      state('default', style({
        backgroundColor: 'rgba(177, 252, 177, 0.3)'
      })),
      state('clicked', style({
        backgroundColor: 'white'
      })),
      transition('default => clicked', [
        animate('0.5s')
      ]),
      transition('clicked => default', [
        animate('0.5s')
      ])
    ])
  ]
})

export class ContactsComponent {
  activeField: number | null = null;


  onClick(fieldindex : number) {
    this.activeField = this.activeField === fieldindex ? null : fieldindex;
  }
}


