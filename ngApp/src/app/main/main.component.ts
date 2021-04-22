import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  user: string = "CAMARA Laby Damaro";
  noms: string[] = ['Camara', 'Kïta', 'Traoré', 'Touré', 'Cissé', 'Syllah', 'Soumah'];
  constructor() { }

  ngOnInit(): void {
  }

  userClick = () => console.log('Clicked');

}
