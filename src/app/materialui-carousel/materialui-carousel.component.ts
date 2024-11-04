import { ChangeDetectorRef, Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ChildComponentComponent } from "../child-component/child-component.component";
import { HttpClient } from '@angular/common/http';
import { Data } from '../data';
import { CommonModule } from '@angular/common';
import { DataStructure } from '../data-structure';
import { MatCommonModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon'; 



@Component({
  selector: 'app-materialui-carousel',
  standalone: true,
  imports: [MatSlideToggleModule, ChildComponentComponent,CommonModule,MatCommonModule,MatIconModule],
  templateUrl: './materialui-carousel.component.html',
  styleUrl: './materialui-carousel.component.css'
})
export class MaterialuiCarouselComponent {
  data: { [key: string]: any } = {};
  keyvalueArray: Array<{ key: string, value: any }> = []; 
  currentIndex:number=0;
  autoSlideInterval:any;
  translateX = 0;

  constructor(private http: HttpClient, private cdr:ChangeDetectorRef) {}
  ngOnInit(): void {
    this.http.get('/test.json').subscribe((next) => {
      this.data = next;
      this.keyvalueArray = Object.entries(this.data).map(([key, value]) => ({ key, value }));
    });
  }



  next() {
    if (this.currentIndex < this.keyvalueArray.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; 
    }
    this.updateTranslateX();
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.keyvalueArray.length - 1;
    }
    this.updateTranslateX();
  }

  selectSlide(index: number) {
    this.currentIndex = index;
    this.updateTranslateX();
  }

  updateTranslateX() {
    this.translateX = -this.currentIndex * 80;
  }

  isVisible(index: number): boolean {
    return true;
  }
}
