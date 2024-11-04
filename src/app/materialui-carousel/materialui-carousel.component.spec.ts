import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialuiCarouselComponent } from './materialui-carousel.component';

describe('MaterialuiCarouselComponent', () => {
  let component: MaterialuiCarouselComponent;
  let fixture: ComponentFixture<MaterialuiCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialuiCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialuiCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
