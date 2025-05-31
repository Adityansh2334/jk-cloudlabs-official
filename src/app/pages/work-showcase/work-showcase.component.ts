import { Component } from '@angular/core';
import { fadeIn, slideInUp, staggerList } from '../../animations/animations';

@Component({
  selector: 'app-work-showcase',
  templateUrl: './work-showcase.component.html',
  styleUrls: ['./work-showcase.component.scss'],
  animations: [fadeIn, slideInUp, staggerList],
})
export class WorkShowcaseComponent {
  works = [
    {
      title: 'EMRS School Website',
      description: 'Modern school portal with admin control panel, AWS-hosted.',
      image: 'assets/emrs.png',
      url: 'https://www.emrssaladahara.com',
      icon: 'fas fa-school'
    },
    {
      title: 'Startup Portfolio',
      description: 'Sleek portfolio site for JK CloudLabs Pvt. Ltd.',
      image: 'assets/jkcloudlabs.png',
      url: 'https://jkcloudlabs.netlify.app',
      icon: 'fas fa-briefcase'
    }
  ];

  openProject(url: string): void {
    window.open(url, '_blank');
  }
}
