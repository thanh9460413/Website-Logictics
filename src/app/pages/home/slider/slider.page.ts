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
      imageSrc:"../../../../assets/images/photo14.jpeg",
      imageAlt:"photo",
      title:"Giải pháp hậu cần & chuỗi cung ứng",
      description:"Chúng tôi cung cấp giải pháp hậu cần phù hợp cho khách hàng 🚢",
      description1:"Chúng tôi sẽ  giúp bạn cập nhật về các điểm đến hàng hóa của bạn  bằng cách theo dõi chúng tôi✨",
      linkDetail:"",
      linkDemo:"",
    },
    {
      imageSrc:"../../../../assets/images/photo10.png",
      imageAlt:"photo",
      title:"Giải pháp hậu cần & chuỗi cung ứng",
      description:"Chúng tôi cung cấp giải pháp hậu cần phù hợp cho khách hàng 🚢",
      description1:"Chúng tôi sẽ  giúp bạn cập nhật về các điểm đến hàng hóa của bạn  bằng cách theo dõi chúng tôi✨",
      linkDetail:"",
      linkDemo:"",
    }
  ];
  indicators = true;
  selectedIndex = 0;
    ngOnInit(): void {
      
    }
  selectImage(index:number):void{
    this.selectedIndex = index
  }
  controls(){
    
  }
}
