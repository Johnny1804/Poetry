import { Pipe, PipeTransform } from '@angular/core'
import { Poem } from '../model/Poem'

@Pipe({
  name: 'namefilter'
})
export class NameFilterPipe implements PipeTransform {

  transform(poemsList: Array <Poem>, searchedTitle: string): Array <Poem> {
    
    return poemsList.filter(poem => poem.title.toLocaleLowerCase().includes(searchedTitle.toLocaleLowerCase()))
  }

}
