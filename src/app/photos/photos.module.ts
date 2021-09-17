import { NgModule } from '@angular/core';
import { PhotoModule } from './photo/photo.module';
import { PhotoFormModule } from './photo-form/photoform.module';
import { PhotoListModule } from './photolist/photolist.module';
import { CardModule } from '../shared/components/card/card.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    PhotoModule,
    PhotoFormModule,
    PhotoListModule,
    CardModule,
    CommonModule
  ]
})
export class PhotosModule { }