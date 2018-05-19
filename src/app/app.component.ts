import { Component, OnInit } from '@angular/core';
//import { SearchService } from '../../service/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit  {
  title = 'app works!';
  
  constructor() {}

  ngOnInit(): void {
  }
}
