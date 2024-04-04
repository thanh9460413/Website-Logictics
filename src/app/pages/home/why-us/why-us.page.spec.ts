import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyUsComponent } from './why-us.page';

describe('WhyUsComponent', () => {
  let component: WhyUsComponent;
  let fixture: ComponentFixture<WhyUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyUsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhyUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
