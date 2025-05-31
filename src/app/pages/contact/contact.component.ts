import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {fadeIn} from "../../animations/animations";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [fadeIn],
})
export class ContactComponent {
  officialEmail = 'info@jkcloudlabs.com';
  officialPhone = '+91 9777269362';
  officialAddress = 'Munnekollala, Marathahalli, Bengaluru, Karnataka 560037';
  contact = {
    name: '',
    email: '',
    company: '',
    message: ''
  };
  loading = false;
  success = false;

  onSubmit(form: NgForm) {
    if (form.invalid) return;

    this.loading = true;

    const formData = new FormData();
    formData.append('form-name', 'contact');
    Object.keys(this.contact).forEach(key => {
      // @ts-ignore
      formData.append(key, this.contact[key]);
    });

    fetch('/', {
      method: 'POST',
      body: formData
    })
      .then(() => {
        this.success = true;
        form.resetForm();
      })
      .catch(error => {
        console.error('Form submission error:', error);
      })
      .finally(() => {
        this.loading = false;
      });
  }

}
