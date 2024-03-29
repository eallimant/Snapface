import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../model/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit{
  
  faceSnaps! : FaceSnap[]

  constructor(private faceSnapsService : FaceSnapsService ) {}

  ngOnInit(): void {
    this.faceSnaps = this.faceSnapsService.GetAllFaceSnaps();
  }
  
}
