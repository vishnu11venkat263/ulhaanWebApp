import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  activeTab: 'all' | 'dairy' | 'organics' = 'all';

  dairyProducts = [
    {
      title: 'Pure Cow Ghee',
      description: 'Traditional bilona method ghee, rich in flavor and nutrients',
      price: 599,
      size: '500ml',
      image: '/assets/hero-dairy.jpg',
      tags: ['100% Pure', 'A2 Cow Milk', 'Bilona Method']
    },
    {
      title: 'Farm Fresh Butter',
      description: 'Creamy, golden butter churned from fresh cream daily',
      price: 299,
      size: '500g',
      image: '/assets/hero-dairy.jpg',
      tags: ['Fresh Daily', 'No Preservatives', 'Rich & Creamy']
    },
    {
      title: 'Premium Ghee',
      description: 'Extra clarified ghee with enhanced aroma and taste',
      price: 899,
      size: '1L',
      image: '/assets/hero-dairy.jpg',
      tags: ['Premium Quality', 'Triple Filtered', 'Extended Shelf Life']
    }
  ];

  organicProducts = [
    {
      title: 'Herbal Bathing Powder',
      description: 'Natural body cleanser with sandalwood, turmeric and rose',
      price: 199,
      size: '200g',
      image: '/assets/product-bathing-powder.jpg',
      tags: ['Soap-Free', 'Gentle Cleansing', 'All Skin']
    },
    {
      title: 'Ayurvedic Face Pack',
      description: 'Rejuvenating face mask with multani mitti and herbs',
      price: 249,
      size: '100g',
      image: '/assets/product-face-pack.jpg',
      tags: ['Deep Cleansing', 'Natural Glow', 'Anti-Aging']
    },
    {
      title: 'Hair Replenishing Powder',
      description: 'Strengthen hair roots with amla, brahmi and hibiscus',
      price: 279,
      size: '150g',
      image: '/assets/product-hair-powder.jpg',
      tags: ['Hair Strength', 'Prevents Hairfall', 'Natural Conditioning']
    },
    {
      title: 'Natural Hair Wash',
      description: 'Chemical-free cleansing with shikakai and reetha',
      price: 199,
      size: '200g',
      image: '/assets/product-hair-wash.jpg',
      tags: ['Shampoo Alternative', 'Gentle Cleansing', 'Scalp Health']
    }
  ];
}
