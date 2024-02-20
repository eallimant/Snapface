import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../model/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap! : FaceSnap;

  snapText! : string;
  snapBackGround! : string;
  snaped! : boolean;

  constructor(private faceSnapsService : FaceSnapsService ) {}

  ngOnInit() {
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
