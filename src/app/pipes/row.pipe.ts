import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'row'
})
export class RowPipe implements PipeTransform {

  transform(textArray: Array <string>): string {
    let textRow = ''

    textArray.forEach((data) => textRow = textRow + data + '\n')

    return textRow;
  }

}
