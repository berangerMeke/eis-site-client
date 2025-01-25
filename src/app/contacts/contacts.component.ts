import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css',
  // animations: [
  //   trigger('changeColor', [
  //     state('default', style({
  //       backgroundColor: 'rgba(177, 252, 177, 0.3)'
  //     })),
  //     state('clicked', style({
  //       backgroundColor: 'white'
  //     })),
  //     transition('default => clicked', [
  //       animate('0.5s')
  //     ]),
  //     transition('clicked => default', [
  //       animate('0.5s')
  //     ])
  //   ])
  // ]
})

export class ContactsComponent implements OnInit{
  activeField: number | null = null;

  contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
      this.contactForm = this.formBuilder.group({
        typeClient: ['', Validators.required],
        name: ['', Validators.required],
        prenom: ['', Validators.required],
        email: ['', Validators.required],
        message: ['', Validators.required]
      })
  }


  onClick(fieldindex : number) {
    this.activeField = this.activeField === fieldindex ? null : fieldindex;
  }
}


