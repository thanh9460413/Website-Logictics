import { Component,Input,OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './slider.page.html',
  styleUrl: './slider.page.scss'
})
export class SliderComponent implements OnInit{
  images=[
    {
      imageSrc:"../../../../assets/images/photo.jpeg",
      imageAlt:"photo"
    },
    {
      imageSrc:"../../../../assets/images/photo.jpeg",
      imageAlt:"photo"
    }
  ];
  indicators = true;
  selectedIndex = 0;
    ngOnInit(): void {
      
    }
}
