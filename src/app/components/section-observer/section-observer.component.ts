import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-section-observer',
  standalone: true,
  template: ''
})
export class SectionObserverComponent implements OnInit, OnDestroy {
  private sections: {id: string, element: HTMLElement}[] = [];
  private scrollListener: any;

  constructor(private navigationService: NavigationService) {}

  ngOnInit() {
    // Initialiser après un délai pour permettre le rendu
    setTimeout(() => this.initializeSections(), 300);
  }

  initializeSections() {
    const sectionIds = ['home', 'about', 'skills', 'projets', 'education', 'contact'];
    
    this.sections = sectionIds
      .map(id => {
        const element = document.getElementById(id);
        return element ? { id, element } : null;
      })
      .filter(section => section !== null) as {id: string, element: HTMLElement}[];
    
    console.log('Sections found:', this.sections.map(s => s.id));
    
    // Détecter la section active initiale
    this.detectActiveSection();
    
    // Ajouter l'écouteur de scroll
    this.scrollListener = this.throttle(() => {
      this.detectActiveSection();
    }, 100);
    
    window.addEventListener('scroll', this.scrollListener);
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.scrollListener();
  }

  detectActiveSection() {
    if (this.sections.length === 0) return;
    
    const scrollPosition = window.scrollY + 100; // Ajustement pour la navbar
    
    let activeSection = 'home';
    let minDistance = Infinity;
    
    // Trouver la section la plus proche du haut de la page
    for (const section of this.sections) {
      const rect = section.element.getBoundingClientRect();
      const distanceFromTop = Math.abs(rect.top);
      
      if (distanceFromTop < minDistance) {
        minDistance = distanceFromTop;
        activeSection = section.id;
      }
    }
    
    console.log('Active section detected by scroll:', activeSection);
    this.navigationService.setActiveSection(activeSection);
  }

  // Fonction utilitaire pour throttler le scroll
  throttle(func: () => void, limit: number): () => void {
    let inThrottle: boolean;
    return function(this: any) {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args as any);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }

  ngOnDestroy() {
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }
}