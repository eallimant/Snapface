import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../model/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent {

  @Input() faceSnap! : FaceSnap;

  // title!: string;
  // description!: string;
  // createDate!: Date;
  // snap!: number;
  // imageUrl! : string;
  snaped! : boolean;
  snapText! : string;


  ngOnInit() {
    // this.title = "Archibald";
    // this.description = "Mon ami pour la vie"
    // this.createDate = new Date();
    // this.snap = 0
    // this.imageUrl = "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg";
    this.snaped = false;
    this.snapText = "Snap !"
  }

  onSnap() {
    if (this.snaped) {
      this.faceSnap.snaps--;
      this.snapText = "Snap !"

    } else {
      this.faceSnap.snaps++;
      this.snapText = "Oops unsnap"
    }
    this.snaped = !this.snaped;
  }
}
