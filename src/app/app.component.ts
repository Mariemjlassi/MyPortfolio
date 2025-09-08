import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnDestroy {
  title = 'Abir Annabi - Portfolio';
  private scrollTimeout: any;

  ngAfterViewInit() {
    // Vérifier que window existe (côté client seulement)
    if (typeof window !== 'undefined') {
      this.scrollTimeout = setTimeout(() => {
        const event = new Event('scroll');
        window.dispatchEvent(event);
      }, 1000);
    }
  }

  ngOnDestroy() {
    // Nettoyer le timeout si le composant est détruit
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
  }
}