import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-a-propos',
  standalone: true,
  imports: [NgbModule, CommonModule, NgbCarouselModule, RouterLink],
  templateUrl: './a-propos.component.html',
  styleUrl: './a-propos.component.css'
})
export class AProposComponent {
  constructor(config: NgbCarouselConfig) {
    config.interval = 2000; // Intervalle entre les diapositives en millisecondes
    config.wrap = true;     // Permet de faire défiler les diapositives en boucle
    config.keyboard = true; // Permet le contrôle du carrousel via le clavier
    config.pauseOnHover = true; // Pause le carrousel au survol
  }


  public blog: any[] = [

    {
      image: "Ballae.jpg",
      titre:'Louis Michel Mballa',
      nom:'Fondateur de EIS-INNOVATION',
      paragraphe:'Il gere la supervise des equipes, la gestion des projets,et l\'assurance de la satisfaction des clients',
      image1:'whatsapp.gif',
      image2:'linkedin.svg',
      savoir:'En savoir plus',
      color:'#006954' 

    },
    
    {
      image: "photo.jpeg",
      titre:'Hopogap Rene ',
      nom:'DEVELOPPER FULL WEB',
      paragraphe:'Il gere la supervise des equipes, la gestion des projets,et l\'assurance de la satisfaction des clients',
      image1:'linkedin.svg',
      image2:'whatsapp.gif',
      savoir:'En savoir plus',
      color:'#006954' 
      
    },
    {
      image:"meke.jpg",
      titre:'Beranger Meke',
      nom:'DEVELOPPER SPRING BOOT/ANGULAR',
     paragraphe:'Il gere la supervise des equipes, la gestion des projets,et l\'assurance de la satisfaction des clients',
      image1:'whatsapp.gif',
      image2:'linkedin.svg',
      savoir:'En savoir plus',
      color:'#006954' 

    },

    {
      image: "Miguel.jpg",
      titre:'Miguel Dinou',
      nom:'DEVELOPPER ANGULAR/UIX DESIGN',
      paragraphe:'Il gere la supervise des equipes, la gestion des projets,et l\'assurance de la satisfaction des clients',
      image1:'whatsapp.gif',
      image2:'linkedin.svg',
      savoir:'En savoir plus',
      color:'#006954' 

    }

    ,

    {
      image: "Anthonyx.jpg",
      titre:'Anthonix Nana',
      nom:'DEVELOPPER SPRING BOOT',
      paragraphe:'Il gere la supervise des equipes, la gestion des projets,et l\'assurance de la satisfaction des clients',
      image1:'linkedin.svg',
      image2:'whatsapp.gif',
      savoir:'En savoir plus',
      color:'#006954' 

    },

    {
      image:"baruch.jpg",
      titre:'BARUCH NGAMI',
      nom:'DEVELOPPER SPRING BOOT',
      paragraphe:'Il gere la supervise des equipes, la gestion des projets,et l\'assurance de la satisfaction des clients',
      image1:'whatsapp.gif',
      image2:'linkedin.svg',
      savoir:'En savoir plus',
      color:'#006954' 

    }

  ];

}
