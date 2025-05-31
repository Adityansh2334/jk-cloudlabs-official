import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy
} from '@angular/core';

import {
  fadeIn,
  slideInRight,
  slideInUp,
  staggerList,
  logoBounce
} from '../../animations/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fadeIn, slideInRight, slideInUp, staggerList, logoBounce],
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;
  @ViewChild('statsSection', { static: false }) statsSection!: ElementRef;

  currentTestimonialIndex = 0;
  autoScrollInterval: any;
  visibleSlides = 1;

  private hasAnimated = false;

  features = [
    { icon: 'fas fa-cloud', title: 'Cloud Solutions', description: 'Scalable cloud apps' },
    { icon: 'fas fa-lock', title: 'Security', description: 'Enterprise-grade security' },
    { icon: 'fas fa-rocket', title: 'Launch Ready', description: 'Fast and reliable delivery' },
  ];

  stats = [
    { label: 'Projects Delivered', value: 5, displayValue: 0 },
    { label: 'Happy Clients', value: 5, displayValue: 0 },
    { label: 'Team Members', value: 15, displayValue: 0 },
    { label: 'Years of Expertise', value: 5, displayValue: 0 },
  ];

  testimonials = [
    {
      name: 'Mr. Adikanda Swain',
      role: 'Principal, EMRS, Saldahar, Balasore, Odisha',
      quote: 'JK CloudLabs transformed our school website into a modern, responsive platform that exceeded our expectations. ' +
        'Their expertise and dedication to delivering a user-friendly interface were truly impressive.',
    }
  ];

  ngAfterViewInit() {
    this.startAutoScroll();
    this.calculateVisibleSlides();
    this.setupIntersectionObserver();
  }

  ngOnDestroy() {
    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
    }
  }
  setupIntersectionObserver() {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.hasAnimated) {
            this.animateStats();
            this.hasAnimated = true;
            observer.unobserve(this.statsSection.nativeElement);
          }
        });
      }, { threshold: 0.5 }); // 50% visible triggers animation

      observer.observe(this.statsSection.nativeElement);
    } else {
      // fallback: just animate immediately
      this.animateStats();
    }
  }

  animateStats() {
    this.stats.forEach(stat => {
      const duration = 2000; // animation duration in ms
      const start = 0;
      const end = stat.value;
      const startTime = performance.now();

      const step = (currentTime: number) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        stat.displayValue = Math.floor(progress * (end - start) + start);

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          stat.displayValue = end; // ensure exact end value
        }
      };

      requestAnimationFrame(step);
    });
  }

  calculateVisibleSlides() {
    const container = this.scrollContainer.nativeElement;
    const totalWidth = container.scrollWidth;
    const viewWidth = container.clientWidth;

    this.visibleSlides = Math.ceil(totalWidth / viewWidth);
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  scrollTestimonials(direction: 'left' | 'right') {
    const scrollEl = this.scrollContainer.nativeElement;
    const cardWidth = 336; // 320px card + 16px gap
    const maxScrollLeft = scrollEl.scrollWidth - scrollEl.clientWidth;

    if (direction === 'left') {
      scrollEl.scrollLeft = Math.max(0, scrollEl.scrollLeft - cardWidth);
    } else {
      scrollEl.scrollLeft = Math.min(maxScrollLeft, scrollEl.scrollLeft + cardWidth);
    }

    this.currentTestimonialIndex = Math.round(scrollEl.scrollLeft / cardWidth);
  }

  startAutoScroll() {
    const scrollEl = this.scrollContainer.nativeElement;
    const cardWidth = 336;

    this.autoScrollInterval = setInterval(() => {
      const maxScrollLeft = scrollEl.scrollWidth - scrollEl.clientWidth;
      const nextScrollLeft = scrollEl.scrollLeft + cardWidth;

      if (nextScrollLeft >= maxScrollLeft - 10) {
        scrollEl.scrollLeft = 0;
        this.currentTestimonialIndex = 0;
      } else {
        scrollEl.scrollLeft = nextScrollLeft;
        this.currentTestimonialIndex = Math.round(scrollEl.scrollLeft / cardWidth);
      }
    }, 4000);
  }
}
