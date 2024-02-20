import { Injectable } from '@angular/core';
import { FaceSnap } from '../model/face-snap.model';

@Injectable({
  providedIn: 'root'
})

export class FaceSnapsService {
  
    private faceSnaps : FaceSnap[] = 
    [
        {
          id : 1,
          title: "Archibald VI King of England",
          description: "Mon ami pour la vie et bien après",
          snaps: 0,
          createDate: new Date(),
          imageUrl: "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
          location: "Paris"
        },
        {
          id : 2,
          title: 'Three Rock Mountain',
          description: 'Un endroit magnifique pour les randonnées.',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
          createDate: new Date(),
          snaps: 71,
          location : "Stonehedge"
        },
        {
          id : 3,
          title: 'Un bon repas',
          description: 'Mmmh que c\'est bon !',
          imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
          createDate: new Date(),
          snaps: 50
        }
    ] 

    GetAllFaceSnaps() : FaceSnap[] {
      return this.faceSnaps;
    }

    GetFaceSnapById(id : number) : FaceSnap {
      const fs = this.faceSnaps.find(fs => fs.id === id);
      if (fs) {
        return fs
      } else {
        throw new Error("Face Snap non trouvé");
      }
    }

    SnapFaceSnapById(id : number, snapType : 'snap' | 'unsnap') : void {
      const fs = this.GetFaceSnapById(id);
      snapType === 'snap' ? fs.snaps++ : fs.snaps--;
    }

}