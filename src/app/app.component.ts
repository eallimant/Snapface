import { Component,OnInit } from '@angular/core';
import { FaceSnap } from './model/face-snap.model';

@Component({
  selector: 'app-racine',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  
  mySnap! : FaceSnap;
  myOtherSnap! : FaceSnap;
  myLastSnap! : FaceSnap;

  ngOnInit(): void  {
    this.mySnap = {
      title: "Archibald",
      description: "Mon ami pour la vie et après",
      snaps: 0,
      createDate: new Date(),
      imageUrl: "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
      location: "Paris"
    }
    this.myOtherSnap = {
      title: 'Three Rock Mountain',
      description: 'Un endroit magnifique pour les randonnées.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
      createDate: new Date(),
      snaps: 0
    };
    this.myLastSnap = {
      title: 'Un bon repas',
      description: 'Mmmh que c\'est bon !',
      imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      createDate: new Date(),
      snaps: 0
    };
  }
  

}