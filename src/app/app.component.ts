import { Component, HostListener } from '@angular/core';
// import { Component } from '@angular/core';
import { NgIf } from '@angular/common'; // 👈 import NgIf directive
import { NavbarComponent } from './navbar/navbar.component'; // Adjust based on your folder
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    NgIf,         
    NavbarComponent, 
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent
  ],
})
export class AppComponent {
  showBackToTop = false;

  toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.showBackToTop = scrollPosition > 100;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
