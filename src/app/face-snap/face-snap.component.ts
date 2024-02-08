import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent {

  title!: string;
  description!: string;
  createDate!: Date;
  snap!: number;

  ngOnInit() {
    this.title = "Archibald";
    this.description = "Mon ami pour la vie"
    this.createDate = new Date();
  }
}
