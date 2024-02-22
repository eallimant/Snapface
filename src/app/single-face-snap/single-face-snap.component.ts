import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../model/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { take } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'single-app-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap! : FaceSnap;
  snapText! : string;
  snapBackGround! : string;
  snaped! : boolean;

  constructor(private faceSnapsService : FaceSnapsService,
              private route : ActivatedRoute) {}

  ngOnInit() {
    //+ = typecast permettant de transformer la string en in
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.GetFaceSnapById(faceSnapId);

    this.snaped = true;
    this.snapText = "Snap !"
    this.snapBackGround = "rgb(236, 192, 192)";
    if (this.faceSnap.snaps > 9) {
      this.snapBackGround = "rgb(100, 192, 100)"
    } 
    
  }

  onSnap() {
    this.faceSnapsService.SnapFaceSnapById(this.faceSnap.id, this.snaped ? 'snap':'unsnap');
    this.snapText = this.snaped ? "Oops unsnap" : "Snap !";
    this.snaped = !this.snaped;
  }
}
