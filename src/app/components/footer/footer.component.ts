import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  profileData: any;
  currentYear: number = new Date().getFullYear();

  constructor(private dataService: DataService) {
    this.profileData = this.dataService.getPortfolioData();
  }
}
