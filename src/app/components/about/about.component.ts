import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  profileData: any;

  constructor(private dataService: DataService) {
    this.profileData = this.dataService.getPortfolioData();
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
}