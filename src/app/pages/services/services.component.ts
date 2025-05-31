import { Component, HostListener } from '@angular/core';
import {fadeIn} from "../../animations/animations";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  animations:[fadeIn],
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  modalActive = false;
  modalTitle = '';
  modalDesc = '';

  serviceDetails = {
    cloud: {
      title: 'Cloud Infrastructure Setup',
      description:
        'We design and deploy scalable, secure cloud infrastructures with automation and DevOps best practices. Our experts ensure cost-efficiency and high availability for your cloud environment.'
    },
    ai: {
      title: 'AI & Machine Learning Solutions',
      description:
        'Our AI services include building custom machine learning models, predictive analytics, and intelligent automation to transform data into actionable business insights.'
    },
    web: {
      title: 'Web & Mobile Application Development',
      description:
        'We build modern, responsive web and mobile applications focusing on seamless UX, performance, and scalability using the latest frontend and backend technologies.'
    },
    security: {
      title: 'Cybersecurity & Compliance',
      description:
        'Protect your digital assets with our comprehensive security audits, vulnerability assessments, and compliance strategies aligned with industry standards.'
    },
    migration: {
      title: 'Cloud Migration & Support',
      description:
        'Seamlessly migrate your legacy systems to the cloud with minimal downtime, followed by continuous monitoring, optimization, and support.'
    }
  };

  openModal(serviceKey: string) {
    // @ts-ignore
    const service: any = this.serviceDetails[serviceKey];
    if (!service) return;
    this.modalTitle = service.title;
    this.modalDesc = service.description;
    this.modalActive = true;
  }

  closeModal() {
    this.modalActive = false;
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscape(event: KeyboardEvent) {
    if (this.modalActive) {
      this.closeModal();
    }
  }

  onOverlayClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
      this.closeModal();
    }
  }
}
