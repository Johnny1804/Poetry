import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  transform(title: string, searchedTitle: string): string {
    return title.replace(new RegExp(searchedTitle, 'gi'), '<font color="red">$&</font>');
  }
}