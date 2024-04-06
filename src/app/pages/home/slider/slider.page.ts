import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CarouselModule,MatIconModule],
  templateUrl: './slider.page.html',
  styleUrl: './slider.page.scss'
})
export class SliderComponent implements OnInit {
  images = [
    {
      imageSrc: "../../../../assets/images/photo14.jpeg",
      imageAlt: "photo",
      title: "Giải pháp hậu cần & chuỗi cung ứng",
      description: "Chúng tôi cung cấp giải pháp hậu cần phù hợp cho khách hàng 🚢",
      description1: "Chúng tôi sẽ  giúp bạn cập nhật về các điểm đến hàng hóa của bạn  bằng cách theo dõi chúng tôi✨",
      linkDetail: "",
      linkDemo: "",
    },
    {
      imageSrc: "../../../../assets/images/photo10.png",
      imageAlt: "photo",
      title: "Giải pháp hậu cần & chuỗi cung ứng",
      description: "Chúng tôi cung cấp giải pháp hậu cần phù hợp cho khách hàng 🚢",
      description1: "Chúng tôi sẽ  giúp bạn cập nhật về các điểm đến hàng hóa của bạn  bằng cách theo dõi chúng tôi✨",
      linkDetail: "",
      linkDemo: "",
    }
  ];
  indicators = true;
  selectedIndex = 0;

  ngOnInit(): void {

  }
  controls(){
    
  }
  selectImage(index: number): void {
    if (index >= this.images.length) {
        this.selectedIndex = 0; // Quay lại vị trí đầu tiên
    } else if (index < 0) {
        this.selectedIndex = this.images.length - 1; // Quay lại vị trí cuối cùng
    } else {
        this.selectedIndex = index;
    }
}

} 