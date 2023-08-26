import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-defaultpipes',
  templateUrl: './defaultpipes.component.html',
  styleUrls: ['./defaultpipes.component.css']
})
export class DefaultpipesComponent implements OnInit {

  username = "GOPIKRISHNA";

  place = "chennai";

  profile = "hi i'm gopi from chennai";

  obj = {username:"arun"};

  price = 1234.5678;

  value = 0.5;

  dt = new Date();

  limit = 4;


  constructor() { }

  ngOnInit(): void {
  }

}
