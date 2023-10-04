import { Pipe, PipeTransform } from '@angular/core'
import { ApiLoadingService } from '../services/api-loading.service'

@Pipe({
  name: 'titlesearch'
})
export class TitleSearchPipe implements PipeTransform {

  constructor(private apiService: ApiLoadingService) {
  }

  transform(searchedTitle: string): Array <string> {
    let titleList = new Array <string>

    this.apiService.getPoemsWithTitle(searchedTitle).subscribe(data => {
      data.forEach(poem => {
        titleList.push(poem.title)
      });
    })

    return titleList
  }

}
