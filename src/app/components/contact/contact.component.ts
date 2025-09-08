import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  profileData: any;

  constructor(private dataService: DataService) {
    this.profileData = this.dataService.getPortfolioData();
  }

  // Copier dans le presse-papier (sans alert)
  copyToClipboard(type: 'email' | 'whatsapp') {
    let textToCopy = type === 'email' ? 'jlassiimariem52@gmail.com' : '+21694381426';
    navigator.clipboard.writeText(textToCopy).catch(err => console.error(err));
  }
}
