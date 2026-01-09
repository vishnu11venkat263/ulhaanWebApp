import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss',
})
export class ContactsComponent {
  contactInfo = [
    {
      title: 'Head Office',
      icon: 'bi bi-geo-alt',
      lines: ['123 Organic Lane', 'Natural City, India - 500001'],
    },
    {
      title: 'Phone',
      icon: 'bi bi-telephone',
      lines: ['+91 98765 43210', '+91 87654 32109'],
    },
    {
      title: 'Email',
      icon: 'bi bi-envelope',
      lines: ['hello@ulhaan.com', 'support@ulhaan.com'],
    },
    {
      title: 'Business Hours',
      icon: 'bi bi-clock',
      lines: ['Monday - Saturday', '9:00 AM - 6:00 PM'],
    },
  ];

  submit() {
    console.log('Form submitted');
  }
}
