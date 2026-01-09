import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {
values = [
    {
      title: 'Passion for Purity',
      description:
        'Every product is crafted with love and dedication to maintain the highest standards of purity.',
      icon: 'bi bi-heart'
    },
    {
      title: 'Community First',
      description:
        'We work closely with local farmers and artisans, supporting sustainable livelihoods.',
      icon: 'bi bi-people'
    },
    {
      title: 'Quality Focus',
      description:
        'No compromises on quality. From sourcing to packaging, excellence is our standard.',
      icon: 'bi bi-bullseye'
    },
    {
      title: 'Tradition Meets Innovation',
      description:
        'Ancient wisdom combined with modern practices for the best of both worlds.',
      icon: 'bi bi-clock-history'
    }
  ];

  journey = [
    {
      year: '2018',
      title: 'The Beginning',
      description:
        'Started with a small dairy farm, committed to producing pure, organic butter and ghee.'
    },
    {
      year: '2020',
      title: 'Growing Family',
      description:
        'Expanded operations and reached thousands of happy customers across the region.'
    },
    {
      year: '2022',
      title: 'Mee Organics Launch',
      description:
        'Introduced our organic lifestyle brand with herbal bathing and hair care products.'
    },
    {
      year: '2024',
      title: 'Going Global',
      description:
        'Taking our authentic products worldwide, maintaining the same quality and tradition.'
    }
  ];
}
