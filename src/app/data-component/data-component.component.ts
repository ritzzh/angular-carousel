import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HertzPipe } from '../hertz.pipe';
import { HttpClient } from '@angular/common/http';
import { Data } from '../data';

@Component({
  selector: 'app-data-component',
  standalone: true,
  imports: [CommonModule,HertzPipe],
  templateUrl: './data-component.component.html',
  styleUrl: './data-component.component.css'
})
export class DataComponentComponent {
  data?:Data;
  tempData:any;
  constructor(private http: HttpClient){
    
  }
  ngOnInit():void{
    this.http.get('/ofdmData.json').subscribe(next=>{
     this.tempData = next;
     this.data = this.tempData;
    })
  }
}
