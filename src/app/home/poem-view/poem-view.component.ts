import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Poem } from '../../model/Poem'
import { FirestoreService } from '../../services/firestore.service'
import { SharedService } from '../../services/shared.service'

@Component({
  selector: 'app-poem-view',
  templateUrl: './poem-view.component.html',
  styleUrls: ['./poem-view.component.css']
})
export class PoemViewComponent {
  @Input() currentPoem!: Poem
  @Output() removeAction = new EventEmitter <Poem>

  constructor(private sharedService: SharedService, private firestoreService: FirestoreService) {
  }

  removePoem() {
    this.firestoreService.removePoem(this.currentPoem)
    this.removeAction.emit()
  }
  
  editPoem() {
    this.sharedService.sharedData = this.currentPoem
  }
}