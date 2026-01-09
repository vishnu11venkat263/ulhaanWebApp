import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  mobileMenuOpen = false;

  products = [
    {
      title: 'Bathing Powder',
      description: 'Natural cleansing with herbs and botanicals',
      image: '/assets/product-bathing-powder.jpg',
    },
    {
      title: 'Face Pack',
      description: 'Rejuvenate your skin with turmeric & sandalwood',
      image: '/assets/product-face-pack.jpg',
    },
    {
      title: 'Hair Replenishing Powder',
      description: 'Strengthen and nourish from root to tip',
      image: '/assets/product-hair-powder.jpg',
    },
    {
      title: 'Hair Wash Powder',
      description: 'Gentle cleansing with shikakai & amla',
      image: '/assets/product-hair-wash.jpg',
    },
  ];

  toggleMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
