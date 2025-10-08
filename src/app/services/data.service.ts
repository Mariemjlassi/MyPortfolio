import { Injectable } from '@angular/core';
import { Skill, projets, Education, SocialLink, PortfolioData } from '../models/portfolio-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

getProgressColor(level: number): string {
  if (level >= 80) return 'linear-gradient(to right, #ff7eb9, #ff65a3)';
  if (level >= 60) return 'linear-gradient(to right, #7afcff, #65fffa)';
  return 'linear-gradient(to right, #feff9c, #fff740)';
}

getLanguageProgress(level: string): string {
  const progressMap: { [key: string]: string } = {
    'Natif': '100%',
    'Courant': '85%',
    'Intermédiaire': '70%',
    'Notions': '40%'
  };
  return progressMap[level] || '50%';
}


  getPortfolioData(): PortfolioData {
    return {
      name: 'Mariem Jlassi',
      title: 'Développeuse Full-Stack',
      location: 'Borj el amri, Mannouba',
      email: 'jlassiimariem52@gmail.com',
      aboutMe: "Élève ingénieure en informatique, passionnée par le développement Full-Stack et la sécurité des applications. J’aime concevoir des solutions web performantes, fiables et bien structurées en utilisant Spring Boot, Spring Security et Angular. Curieuse et rigoureuse, je m’efforce de produire un code propre et maintenable tout en respectant les bonnes pratiques du développement logiciel.",

      about: 'Développeuse Full-Stack avec une solide expérience dans la conception et le développement d\'applications web complètes. Spécialisée dans les technologies Java/Spring et Angular, avec une expertise particulière en sécurité des applications et méthodologies Agile.',
      skills: [
        { name: 'Java', level: 85, category: 'backend' },
        { name: 'Spring Boot', level: 85, category: 'backend' },
        { name: 'Spring Security', level: 80, category: 'backend' },
        { name: 'JavaEE', level: 75, category: 'backend' },
        { name: 'JavaFX', level: 70, category: 'frontend' },
        { name: 'PHP', level: 75, category: 'backend' },
        { name: 'Symfony', level: 70, category: 'backend' },
        { name: 'Angular', level: 80, category: 'frontend' },
        { name: 'HTML/CSS', level: 85, category: 'frontend' },
        { name: 'PostgreSQL', level: 80, category: 'database' },
        { name: 'MySQL', level: 75, category: 'database' },
        { name: 'MongoDB', level: 70, category: 'database' },
        { name: 'Postman', level: 80, category: 'tools' },
        { name: 'Swagger', level: 75, category: 'tools' },
        { name: 'Cypress', level: 70, category: 'tools' },
        { name: 'JUnit', level: 75, category: 'tools' },
        { name: 'Jira', level: 80, category: 'tools' }
      ],
      experiences: [
        {
          company: 'ASSAD Batterie',
          position: 'Développeuse Full-Stack - Projet de Fin d\'Études',
          period: 'Février 2025 – Mai 2025',
          description: [
            'Développement d\'OrgaRH, une application web complète pour la gestion des carrières des employés',
            'Authentification sécurisée avec reCAPTCHA et blocage après tentatives échouées',
            'Gestion des employés, formations, diplômes, postes, compétences et disciplines',
            'Création des formations par les RH et évaluation par les responsables',
            'Implémentation d\'un chatbot intelligent (RASA) pour assister les RH',
            'Développement d\'un dashboard prédictif (TensorFlow) et reporting interactif',
            'Gestion des rôles, permissions et traçabilité des actions utilisateurs',
            'Interface responsive et modulaire, adaptée à chaque rôle utilisateur'
          ],
          technologies: ['Spring Boot', 'Angular', 'PrimeNG', 'PostgreSQL', 'RASA', 'TensorFlow', 'Git', 'Swagger', 'Cypress'],
          
        },
        {
          company: 'CNI',
          position: 'Stagiaire - Développeuse',
          period: 'Jan 2024 - Fév 2024',
          description: [
            'Conception et développement d\'un site web pour le calcul des taxes locatives des terrains non bâtis',
            'Élaboration d\'une architecture modulaire',
            'Sécurisation de l\'application via Spring Security'
          ],
          technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'Spring Security']
        }
      ],
      education: [
        {
          institution: 'Institut Supérieur des Etudes technologiques de Rades',
          degree: 'Licence en Technologies de l\'Information',
          period: '2022-2025',
          description: 'Responsable RH, IEEE Student Branch Radès (5 mois)'
        },
        {
          institution: 'Lycée borj el Amri, Ibn Mandhour',
          degree: 'Baccalauréat en Sciences Expérimentales',
          period: '2020-2021',
          description: ''
        }
      ],
      socialLinks: [
        { name: 'GitHub', url: 'https://github.com/Mariemjlassi', icon: 'github' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mariem-jlassi-674103287/', icon: 'linkedin' }
      ],
      languages: [
        { name: 'Arabe', level: 'Natif' },
        { name: 'Français', level: 'Courant' },
        { name: 'Anglais', level: 'Courant' }
      ],
      
    };
  }
}