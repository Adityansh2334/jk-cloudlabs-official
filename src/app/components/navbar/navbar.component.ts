import { Component } from '@angular/core';
import {fadeIn, logoBounce} from "../../animations/animations";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  animations: [fadeIn, logoBounce],
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
