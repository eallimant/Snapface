import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../model/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import {Router} from '@angular/router'
import { take } from 'rxjs';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap! : FaceSnap;

  constructor(private faceSnapsService : FaceSnapsService,
              private route : Router ) {}

  ngOnInit() {

  }

  onViewFaceSnap(){
    //la première forme fonctionne aussi mais on utilise la seconde pour inclure directement la variable dans la chaîne
    //this.route.navigateByUrl("facesnaps/" + this.faceSnap.id)
    this.route.navigateByUrl(`facesnaps/${this.faceSnap.id}`)
  }


}
