import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: any[] = [];
  skillCategories: string[] = [];
  languages: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    const portfolioData = this.dataService.getPortfolioData();
    this.skills = portfolioData.skills;
    this.languages = portfolioData.languages;
    this.skillCategories = [...new Set(this.skills.map(skill => skill.category))];
  }

  getSkillsByCategory(category: string) {
    return this.skills.filter(skill => skill.category === category);
  }

  getCategoryName(category: string): string {
    const categoryNames: { [key: string]: string } = {
      'frontend': 'Frontend',
      'backend': 'Backend',
      'database': 'Base de données',
      'tools': 'Outils & Tests'
    };
    return categoryNames[category] || category;
  }

  getCategoryIcon(category: string): string {
    const categoryIcons: { [key: string]: string } = {
      'frontend': 'fas fa-paint-brush',
      'backend': 'fas fa-server',
      'database': 'fas fa-database',
      'tools': 'fas fa-tools'
    };
    return categoryIcons[category] || 'fas fa-star';
  }

  getAverageSkillLevel(category: string): number {
    const categorySkills = this.getSkillsByCategory(category);
    const average = categorySkills.reduce((sum, skill) => sum + skill.level, 0) / categorySkills.length;
    return Math.round(average);
  }

  getSkillLevelClass(level: number): string {
    if (level >= 80) return 'expert';
    if (level >= 60) return 'advanced';
    return 'intermediate';
  }

  getAllTechnologies() {
    return this.skills;
  }

  getTechSize(level: number): number {
    // Retourne une taille basée sur le niveau de compétence
    if (level >= 80) return 1.2;
    if (level >= 60) return 1.1;
    return 1;
  }

  getTechIcon(techName: string): string {
    const techIcons: { [key: string]: string } = {
      'Java': 'fab fa-java',
      'Spring Boot': 'fas fa-leaf',
      'Spring Security': 'fas fa-shield-alt',
      'JavaEE': 'fab fa-java',
      'JavaFX': 'fas fa-window-maximize',
      'PHP': 'fab fa-php',
      'Symfony': 'fab fa-symfony',
      'Angular': 'fab fa-angular',
      'HTML/CSS': 'fab fa-html5',
      'PostgreSQL': 'fas fa-database',
      'MySQL': 'fas fa-database',
      'MongoDB': 'fas fa-database',
      'Postman': 'fas fa-paper-plane',
      'Swagger': 'fas fa-file-alt',
      'Cypress': 'fas fa-vial',
      'JUnit': 'fas fa-flask',
      'Jira': 'fab fa-jira'
    };
    return techIcons[techName] || 'fas fa-code';
  }
  getLanguageProgress(level: string): number {
    const progressMap: { [key: string]: number } = {
      'Natif': 100,
      'Courant': 85,
      'Intermédiaire': 70,
      'Notions': 40
    };
    return progressMap[level] || 50;
  }

  getLanguageFlag(language: string): string {
    const flags: { [key: string]: string } = {
      'Arabe': '🇹🇳',
      'Français': '🇫🇷',
      'Anglais': '🇬🇧',
      'Allemand': '🇩🇪'
    };
    return flags[language] || '🌐';
  }
}