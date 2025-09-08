import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';
import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { EducationComponent } from '../education/education.component';
import { ContactComponent } from '../contact/contact.component';
import { CommonModule } from '@angular/common';
import { ProjetsComponent } from '../projets/projets.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
     
    AboutComponent,
    SkillsComponent,
    ProjetsComponent,
    EducationComponent,
    ContactComponent,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  profileData: any;

  constructor(private dataService: DataService) {
    this.profileData = this.dataService.getPortfolioData();
  }
}