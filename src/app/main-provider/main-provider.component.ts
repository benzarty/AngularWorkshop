import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-provider',
  templateUrl: './main-provider.component.html',
  styleUrls: ['./main-provider.component.css']
})
export class MainProviderComponent implements OnInit {

  @ViewChild('testviewchiledddd') child!: "testviewchiledddd";
  constructor() { }
  

  ngOnInit(): void {
  }

}
