import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PhotoComponent } from './photo/photo.component';
import { PhotolistComponent } from './photolist/photolist.component';

@NgModule({
  declarations: [
    PhotoComponent,
    PhotolistComponent
  ],
  imports: [HttpClientModule]
})
export class PhotosModule { }