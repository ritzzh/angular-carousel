import { ChangeDetectorRef, Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ChildComponentComponent } from "../child-component/child-component.component";
import { HttpClient } from '@angular/common/http';
import { Data } from '../data';
import { CommonModule } from '@angular/common';
import { DataStructure } from '../data-structure';
import { MatCommonModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { DataComponentComponent } from "../data-component/data-component.component"; 



@Component({
  selector: 'app-materialui-carousel',
  standalone: true,
  imports: [MatSlideToggleModule, ChildComponentComponent, CommonModule, MatCommonModule, MatIconModule, DataComponentComponent],
  templateUrl: './materialui-carousel.component.html',
  styleUrl: './materialui-carousel.component.css'
})
export class MaterialuiCarouselComponent {
  data: { [key: string]: any } = {};
  keyvalueArray: Array<{ key: string, value: any }> = []; 
  currentIndex:number=0;
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


  // without data passing

  indexAt:number = 0;
  translateXAt=0;
  arraySize = 0;
  mockArr:any = []

  recieveData(data:number){
    let tempsize = data;
    this.arraySize = tempsize;
    let tempArray = Array.from({length:this.arraySize},(_,i)=>i);
    this.mockArr = tempArray;
  }

  updateTranslateXAT() {
    this.translateXAt = -this.indexAt * 80;
  }


  nextAt() {
    if (this.indexAt < this.arraySize- 1) {
      this.indexAt++;
    } else {
      this.indexAt = 0; 
    }
    this.updateTranslateXAT();
  }

  prevAt() {
    if (this.indexAt > 0) {
      this.indexAt--;
    } else {
      this.indexAt = this.arraySize - 1;
    }
    this.updateTranslateXAT();
  }

  selectSlideAt(index: number) {
    this.indexAt = index;
    this.updateTranslateXAT();
  }


}
