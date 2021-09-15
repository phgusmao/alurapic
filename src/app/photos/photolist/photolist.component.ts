import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';

@Component({
  selector: 'app-photolist',
  templateUrl: './photolist.component.html',
  styleUrls: ['./photolist.component.scss']
})
export class PhotolistComponent implements OnInit {

  photos: Photo[] = [];
  filter: string = '';

  constructor(private activatedRoute: ActivatedRoute) {}
  
  ngOnInit(): void {
    this.photos = this.activatedRoute.snapshot.data['photos'];
  }

  onKeyUp(target: any) {
    if(target instanceof EventTarget){
      var element = target as HTMLInputElement;
      this.filter = element.value;
    }
  }
}
