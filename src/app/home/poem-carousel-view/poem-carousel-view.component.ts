import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Poem } from '../../model/Poem'

@Component({
  selector: 'app-poem-carousel-view',
  templateUrl: './poem-carousel-view.component.html',
  styleUrls: ['./poem-carousel-view.component.scss']
})
export class PoemCarouselViewComponent {
  @Input() poemsList!: Array <Poem>
  @Output() goToPoem = new EventEmitter <Poem>
  
  constructor() {
  }

  homeContinuePoetry(selectedPoem: Poem) {
    this.goToPoem.emit(selectedPoem)
  }
}
