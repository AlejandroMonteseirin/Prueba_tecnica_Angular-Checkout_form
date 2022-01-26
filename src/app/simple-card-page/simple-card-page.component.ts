import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-card-page',
  templateUrl: './simple-card-page.component.html',
  styleUrls: ['./simple-card-page.component.css']
})
export class SimpleCardPageComponent implements OnInit {

  /*
  This simple components is used to create a simple card container, using ng-content and css
  */ 
  constructor() { }

  ngOnInit(): void {
  }

}
