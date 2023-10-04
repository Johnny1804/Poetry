import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PoemEditComponent } from './poem-edit/poem-edit.component'
import { HomeComponent } from './home/home.component'
import { PoemViewComponent } from './home/poem-view/poem-view.component'
import { PoemCarouselViewComponent } from './home/poem-carousel-view/poem-carousel-view.component'
import { NotFoundComponent } from './home/poem-view/not-found/not-found.component'

const routes: Routes = [
  {path: 'Home', component: HomeComponent, children: [
    {
      path: ':title', component: PoemViewComponent, children: [
        {
          path:'404', component: NotFoundComponent
        }
      ]
    },
    {
      path:'', component: PoemCarouselViewComponent
    }
  ]},
  {path: 'Poem edit', component: PoemEditComponent},
  {path: '',   redirectTo: '/Home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
