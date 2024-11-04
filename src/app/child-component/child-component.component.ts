import { Component, Input, input, ViewChild } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { DataStructure } from '../data-structure';
import { Data } from '../data';
import { HertzPipe } from '../hertz.pipe';

@Component({
  selector: 'app-child-component',
  standalone: true,
  imports: [JsonPipe,HertzPipe,CommonModule],
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.css'
})
export class ChildComponentComponent {
  @Input() cardinfo?:DataStructure;
  @Input() idx?:number;

  ngOnInit(){
  }
}
