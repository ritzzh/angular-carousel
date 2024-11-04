import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponentComponent } from './child-component/child-component.component';
import { MaterialuiCarouselComponent } from "./materialui-carousel/materialui-carousel.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,MaterialuiCarouselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'carousel';
}
