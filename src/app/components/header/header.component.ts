import { Component, HostListener, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isScrolled = false;
  isMenuOpen = false;
  profileData: any;
  activeSection = 'home';
  indicatorPosition = 0;
  private isBrowser: boolean;
  
  // Configuration des éléments de navigation
  navItems = [
    { id: 'home', text: 'Accueil' },
    { id: 'about', text: 'À propos' },
    { id: 'skills', text: 'Compétences' },
    { id: 'projets', text: 'Projets'},
    { id: 'education', text: 'Formation' },
    { id: 'contact', text: 'Contact' }
  ];

  constructor(
    private dataService: DataService,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    this.profileData = this.dataService.getPortfolioData();
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    // Initialiser la détection de section active seulement côté client
    if (this.isBrowser) {
      this.updateActiveSection();
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.isBrowser) {
      this.isScrolled = window.scrollY > 20;
      this.updateActiveSection();
    }
  }

  // Mettre à jour la section active basée sur le défilement
  updateActiveSection() {
    if (!this.isBrowser) return;
    
    const scrollPosition = window.scrollY + 100;
    
    for (const item of this.navItems) {
      const element = document.getElementById(item.id);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;
        
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          this.activeSection = item.id;
          this.updateIndicatorPosition();
          break;
        }
      }
    }
  }

  // Mettre à jour la position de l'indicateur
  updateIndicatorPosition() {
    if (!this.isBrowser) return;
    
    const activeElement = document.querySelector(`.nav-link[href="#${this.activeSection}"]`);
    if (activeElement) {
      const rect = activeElement.getBoundingClientRect();
      const navRect = document.querySelector('nav')?.getBoundingClientRect();
      if (navRect) {
        this.indicatorPosition = rect.left - navRect.left + (rect.width / 2) - 10;
      }
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    
    if (this.isBrowser) {
      if (this.isMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  }

  scrollTo(section: string, event: Event) {
    event.preventDefault();
    this.isMenuOpen = false;
    
    if (this.isBrowser) {
      document.body.style.overflow = '';
      
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
        
        // Mettre à jour la section active après un court délai
        setTimeout(() => {
          this.activeSection = section;
          this.updateIndicatorPosition();
        }, 300);
      }
    }
  }

  downloadCV(event: Event) {
    event.preventDefault();
    
    if (this.isBrowser) {
      const link = document.createElement('a');
      link.href = '/cv/MariemJlassiCv.pdf';
      link.download = 'MariemJlassiCv.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
}