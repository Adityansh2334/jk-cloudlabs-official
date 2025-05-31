import { Component } from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('800ms ease-in', style({ opacity: 1 })),
      ]),
    ]),
  ],
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  date = new Date();
}
