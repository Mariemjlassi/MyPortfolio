import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  educationData: any[];
  stages: any[];
  activeTab: string = 'formations';


  constructor(private dataService: DataService) {
    this.educationData = this.dataService.getPortfolioData().education;
    this.stages = [
      {
        entreprise: "CNI (Centre National de l'Informatique)",
        periode: "Janvier 2024 - Février 2024",
        description: "Conception et développement d'un site web pour le calcul des taxes locatives des terrains non bâtis avec élaboration d'une architecture modulaire et sécurisation via Spring Security.",
        competences: ["Angular", "Spring Boot", "PostgreSQL", "Spring Security", "Architecture modulaire"],
        badge: "Stage de perfectionnement"
      },
      {
        entreprise: "ASSAD Batterie",
        periode: "Février 2025 - Mai 2025",
        description: "Développement d'OrgaRH, une application web complète pour la gestion des carrières des employés avec authentification sécurisée, chatbot intelligent et dashboard prédictif.",
        competences: ["Spring Boot", "Angular", "PrimeNG", "PostgreSQL", "RASA", "TensorFlow", "Swagger", "Cypress"],
        badge: "Projet de Fin d'Études",
        mention: "Excellent"
      }
    ];
  }
  getCurrentYear(): string {
    return new Date().getFullYear().toString();
  }
  showTab(tabId: string): void {
    console.log('showTab called ->', tabId); // utile pour debug
    this.activeTab = tabId;
  }

  isTabActive(tabId: string): boolean {
    return this.activeTab === tabId;
  }

  
  technologies = [
    // Frontend
    { name: 'Angular', category: 'frontend' },
    { name: 'React', category: 'frontend' },
    { name: 'TypeScript', category: 'frontend' },
    { name: 'HTML/CSS', category: 'frontend' },
    
    // Backend
    { name: 'Node.js', category: 'backend' },
    { name: 'Express', category: 'backend' },
    { name: 'Python', category: 'backend' },
    { name: 'Java', category: 'backend' },
    
    // Bases de données
    { name: 'MySQL', category: 'database' },
    { name: 'MongoDB', category: 'database' },
    { name: 'PostgreSQL', category: 'database' },
    
    // Outils & DevOps
    { name: 'Docker', category: 'tools' },
    { name: 'Git', category: 'tools' },
    { name: 'AWS', category: 'tools' },
    { name: 'Jenkins', category: 'tools' }
  ];

  getTechnologiesByCategory(category: string) {
    return this.technologies.filter(tech => tech.category === category);
  }
}
