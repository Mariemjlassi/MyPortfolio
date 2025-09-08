import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit, OnDestroy  {
  // Nombre d'images par projet
  private imageCounts = [2, 3, 3]; // 4 images pour le 1er, 4 pour le 2ème, 3 pour le 3ème
  
  // Index pour chaque projet
  carouselStates: number[] = [0, 0, 0];
  private carouselInterval: any;

  ngOnInit() {
    // Démarrer le carousel automatique seulement côté client
    if (typeof window !== 'undefined') {
      this.startAutoCarousel();
    }
  }

  ngOnDestroy() {
    // Nettoyer l'intervalle quand le composant est détruit
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
    }
  }

  nextSlide(projectIndex: number, event?: Event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    
    this.carouselStates[projectIndex] = 
      (this.carouselStates[projectIndex] + 1) % this.imageCounts[projectIndex];
  }

  prevSlide(projectIndex: number, event?: Event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    
    this.carouselStates[projectIndex] = 
      (this.carouselStates[projectIndex] - 1 + this.imageCounts[projectIndex]) % this.imageCounts[projectIndex];
  }

  startAutoCarousel() {
    this.carouselInterval = setInterval(() => {
      this.carouselStates.forEach((_, index) => {
        this.nextSlide(index);
      });
    }, 5000); // Change slide every 5 seconds
  }

  // Méthode pour vérifier si une image est active
  isActive(projectIndex: number, imageIndex: number): boolean {
    return this.carouselStates[projectIndex] === imageIndex;
  }
}