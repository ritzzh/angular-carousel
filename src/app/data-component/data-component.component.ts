import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { HertzPipe } from '../hertz.pipe';
import { HttpClient } from '@angular/common/http';
import { Data } from '../data';

@Component({
  selector: 'app-data-component',
  standalone: true,
  imports: [CommonModule, HertzPipe],
  templateUrl: './data-component.component.html',
  styleUrls: ['./data-component.component.css']
})
export class DataComponentComponent {
  @Output() dataEvent = new EventEmitter<number>(); 
  data: { [key: string]: any } = {};
  tempData: any;
  tempArray: Array<{ key: string, value: any }> = []; 

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('/ofdmData.json').subscribe((next) => {
      this.tempData = next;
      this.data = this.tempData;
      this.tempArray = Object.entries(this.data).map(([key, value]) => ({ key, value }));
      this.sendData();
    });  
  }

  sendData() {
    this.dataEvent.emit(this.tempArray.length);
  }
}
