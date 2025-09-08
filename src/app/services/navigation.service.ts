import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private activeSection = new BehaviorSubject<string>('home');
  activeSection$ = this.activeSection.asObservable();

  setActiveSection(section: string) {
    console.log('Setting active section:', section);
    this.activeSection.next(section);
  }

  getActiveSection() {
    return this.activeSection.value;
  }
}