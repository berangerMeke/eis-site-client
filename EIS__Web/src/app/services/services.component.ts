import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  trainings: any[] = [
    {
      icon: 'monitor.svg',
      name: 'Infogérance',
      backgroundColor: '#e3f2fd',
      description: 'Gestion complète de votre infrastructure informatique pour une performance optimale et une sécurité renforcée',
      link: '#'
    },
    {
      icon: 'server1.svg',
      name: 'Sauvegarde',
      backgroundColor: '#e8f5e9',
      description: ' Solutions de sauvegarde sécurisée pour protéger vos données critiques contre toute perte.',
      link: '#'
    },
    {
      icon: 'cloud.svg',
      name: 'Services Cloud',
      backgroundColor: '#fbe9e7',
      description: 'Accès flexible et sécurisé à des ressources informatiques hébergées dans le cloud.',
      link: '#'
    },
    {
      icon: 'wifi.svg',
      name: 'WI-FI d\'entreprise',
      backgroundColor: '#eefee7',
      description: ' Solutions Wi-Fi robustes et sécurisées pour une connectivité fiable au sein de votre entreprise.',
      link: '#'
    }
  ];

}
