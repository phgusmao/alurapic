import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photolist',
  templateUrl: './photolist.component.html',
  styleUrls: ['./photolist.component.scss']
})
export class PhotolistComponent implements OnInit {

  photos: any[] = [];

  constructor(private photoService: PhotoService) {}
  
  ngOnInit(): void {

    this.photoService
      .listFromUser('flavio')
      .subscribe(photos => this.photos = photos);
  }
  

}
