import { Component,HostListener, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  animations: [
    trigger('changeColor', [
      state('default', style({
        backgroundColor: '#88DFAB'
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
    ]),
  ]
})
export class HeaderComponent {
  
  @Input() log1: boolean = false;
  
  isCollapsed = true;
  navbarColor: string = '#88DFAB';
log: any;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrolling = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.navbarColor = scrolling > 250 ? 'white' : '#88DFAB';
    //logo = scrolling > 250;
  }
  closeMenu() {
    this.isCollapsed = true;
  }

  onLinkClick() {
    this.isCollapsed = true;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}