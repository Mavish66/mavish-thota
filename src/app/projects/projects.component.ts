import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  imports: [CommonModule],
  standalone: true
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing projects and skills.',
      imageUrl: 'assets/images/portfolio.png',
      liveUrl: 'https://example.com/portfolio'
    },
    {
      title: 'E-Commerce App',
      description: 'An e-commerce application built with Angular and Firebase.',
      imageUrl: 'assets/images/ecommerce.png',
      liveUrl: 'https://example.com/ecommerce'
    },
    {
      title: 'Task Manager',
      description: 'A task management app to organize your daily activities.',
      imageUrl: 'assets/images/taskmanager.png',
      liveUrl: 'https://example.com/taskmanager'
    }
  ];

}
