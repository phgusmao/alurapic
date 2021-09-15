import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PhotoComponent } from './photo/photo.component';
import { PhotolistComponent } from './photolist/photolist.component';
import { CommonModule } from '@angular/common';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotosComponent } from './photolist/photos/photos.component';
import { FilterByDescription } from './photolist/filter-by-description.pipe';

@NgModule({
  declarations: [
    PhotoComponent,
    PhotolistComponent,
    PhotoFormComponent,
    PhotosComponent,
    FilterByDescription
  ],
  imports: [
    HttpClientModule,
    CommonModule
  ],
  exports: [
    PhotoComponent,
    PhotolistComponent,
    PhotoFormComponent,
    PhotosComponent
  ]
})
export class PhotosModule { }