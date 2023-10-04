import { Component} from '@angular/core'
import { SharedService } from '../services/shared.service'
import { Poem } from '../model/Poem'
import { FirestoreService } from '../services/firestore.service'
import { ApiLoadingService } from '../services/api-loading.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  poemsList!: Array <Poem>
  matchingTitles!: Array <Poem>
  titlesList!: Array <string>
  selectedPoem!: Poem
  searchedTitle: string
  showPoem!: boolean

  constructor(private sharedService: SharedService, private firestoreService: FirestoreService, private apiService: ApiLoadingService) { 
    this.firestoreService.getAllPoems().then(data => this.poemsList = data)
    this.apiService.getAllPoemTitles().subscribe(data => this.titlesList = data.titles)

    // this.apiService.getAllPoemAuthors().subscribe(data => {console.log(data.authors[0])})
    //this.apiService.getPoemsWithAuthor('adam').subscribe(data => {console.log(data[0])})

    this.searchedTitle = ''
    this.onPageInit()
  }

  onPageInit() {
    if (window.location.pathname != "/Home") {
      this.showPoem = true
      let title = window.location.pathname.slice(window.location.pathname.indexOf(':') + 1).replaceAll('%20', ' ')
    
    this.firestoreService.poemWithTitleExist(title).then(bool => {
      if (bool) this.onItemClick(new Poem(title, '', []))
      else this.onTitleClick(title)
    })

    } else {
      this.showPoem = false
    }
  }

  onRemoveAction(poem: Poem) {
    this.poemsList.splice(this.poemsList.indexOf(poem), 1)
    this.showPoem = false
  }

  onGoToPoem(selectedPoem: any) {
    this.selectedPoem = selectedPoem
    this.showPoem = true
  }

  onHomeItemClick() {
    this.showPoem = false
  }
  
  onItemClick(selectedPoem: Poem) {
    this.firestoreService.getPoemWithTitle(selectedPoem.title).then(data => this.selectedPoem = data)
    this.showPoem = true
  }

  onTitleClick(selectedTitle: string) {    
    this.apiService.getPoemsWithTitle(selectedTitle).subscribe(data => {
      data.forEach(poemI => {
        if (poemI.title == selectedTitle) {
          this.selectedPoem = new Poem(poemI.title, poemI.author, poemI.lines)
          this.selectedPoem.isEditable = false
        }
      })
    })
    this.showPoem = true
  }

  addNewPoem() {
    this.sharedService.sharedData = new Poem('','',[])
  }
}