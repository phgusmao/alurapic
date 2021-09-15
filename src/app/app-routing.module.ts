import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotolistComponent } from './photos/photolist/photolist.component';
import { PhotoListResolver } from './photos/photolist/photolist.resolver';

const routes: Routes = [
  {
    path: 'user/:userName', 
    component: PhotolistComponent,
    resolve: { 
      photos: PhotoListResolver
    }
  },
  {
    path: 'p/add', component: PhotoFormComponent
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
