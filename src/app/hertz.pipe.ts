import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hertz',
  standalone: true
})
export class HertzPipe implements PipeTransform {

  transform(value: string): string {
    return value+"MHz";
  }

}
