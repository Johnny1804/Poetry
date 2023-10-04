import { Component} from '@angular/core'
import { Poem } from '../model/Poem'
import { SharedService } from '../services/shared.service'
import { FirestoreService } from '../services/firestore.service'
import { RowPipe } from '../pipes/row.pipe'

@Component({
  selector: 'app-poem-edit',
  templateUrl: './poem-edit.component.html',
  styleUrls: ['./poem-edit.component.css']
})
export class PoemEditComponent {
  selectedPoem!: Poem
  text!: string
  
  constructor(private sharedService: SharedService, private firestoreService: FirestoreService) {
    this.selectedPoem = this.sharedService.sharedData
    this.text = (new RowPipe).transform(this.selectedPoem.text)
  }

  saveEditedPoem() {
    this.selectedPoem.text = this.text.split('\n')

    if (this.selectedPoem.id == undefined) {
      this.firestoreService.addNewPoem(new Poem(this.selectedPoem.title, this.selectedPoem.author, this.selectedPoem.text))
    } else {
      this.firestoreService.editPoem({id: this.selectedPoem.id, title: this.selectedPoem.title, author: this.selectedPoem.author, text: this.selectedPoem.text})
    }
  }
}