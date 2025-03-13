import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class SkillsComponent {
  skills = [
    {
      name: 'Angular',
      prefix: 'fa-brands',
      icon: 'fa-angular',
      color: '#dd0031',
      fontSize: '70px'
    },
    {
      name: 'Flutter',
      prefix: 'fa-brands', // FontAwesome doesn't have Flutter, placeholder
      icon: 'fa-flutter',
      color: '#02569B',
         fontSize: '70px'
    },
    {
      name: 'SQLite',
      prefix: 'fa-solid',
      icon: 'fa-database', // Placeholder icon
      color: '#003B57',
       fontSize: '70px'
    },
    {
      name: 'Electron',
      prefix: 'fa-solid',
      icon: 'fa-atom', // You mentioned this, so we'll use it!
      color: '#47848F',
        fontSize: '70px'
    },
    {
      name: 'Capacitor',
      prefix: 'fa-solid',
      icon: 'fa-plug',
      color: '#119EFF',
        fontSize: '70px'
    },
    {
      name: 'Bootstrap',
      prefix: 'fa-brands',
      icon: 'fa-bootstrap',
      color: '#7952B3',
        fontSize: '70px'
    },
    {
      name: 'CSS',
      prefix: 'fa-brands',
      icon: 'fa-css3-alt',
      color: '#1572B6',
      fontSize: '70px'
    },
    {
      name: 'HTML',
      prefix: 'fa-brands',
      icon: 'fa-html5',
      color: '#E34F26',
       fontSize: '70px'
    }
  ];
}
