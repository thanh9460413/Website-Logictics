import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  @ViewChild('navItems') navItems!: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
      // Logic trong phương thức ngOnInit
  }

  setActive(event: Event) {
      const target = event.target as HTMLElement;
      if (target.classList.contains('item-text') || target.classList.contains('item-dropdown')) {
          const navLinks = this.navItems.nativeElement.querySelectorAll('.item');
          const navLinksDropdowns = this.navItems.nativeElement.querySelectorAll('.item-dropdown');
          navLinks.forEach((navLink: HTMLElement) => {
              this.renderer.removeClass(navLink, 'active');
          });
          navLinksDropdowns.forEach((navLinkDropdown: HTMLElement) => {
              this.renderer.removeClass(navLinkDropdown, 'active');
          });
          if (target.classList.contains('item-text')) {
              (target.parentElement as HTMLElement).classList.add('active');
          } else if (target.classList.contains('item-text-dropdown')){
              target.classList.add('active');
              (target.parentElement as HTMLElement).classList.add('active');
          }
      }
  }
}
