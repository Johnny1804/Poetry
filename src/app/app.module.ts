import { NgModule} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { PoemEditComponent } from './poem-edit/poem-edit.component'
import { PoemViewComponent } from './home/poem-view/poem-view.component'
import { PoemCarouselViewComponent } from './home/poem-carousel-view/poem-carousel-view.component'
import { NotFoundComponent } from './home/poem-view/not-found/not-found.component'

import { environment } from 'src/environments/environment'
import { provideFirebaseApp, initializeApp } from '@angular/fire/app'
import { getFirestore, provideFirestore } from '@angular/fire/firestore'

import { HttpClientModule } from '@angular/common/http';

import { SharedService } from './services/shared.service'
import { FirestoreService } from './services/firestore.service'
import { ApiLoadingService } from './services/api-loading.service'

import { HighlightPipe } from './pipes/highlight.pipe'
import { NameFilterPipe } from './pipes/namefilter.pipe'
import { RowPipe } from './pipes/row.pipe'
import { TitleSearchPipe } from './pipes/titlesearch.pipe'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PoemEditComponent,
    PoemViewComponent,
    PoemCarouselViewComponent,
    NotFoundComponent,
    HighlightPipe,
    NameFilterPipe,
    RowPipe,
    TitleSearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [SharedService, FirestoreService, ApiLoadingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
