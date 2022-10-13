import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-dashboard',
  templateUrl: './movie-dashboard.component.html',
  styleUrls: ['./movie-dashboard.component.css']
})
export class MovieDashboardComponent implements OnInit {
  //(Parent to Child & Child to Parent)

  constructor() { }


  ngOnInit(): void {
  }

  myFavoriteMovies = [ 'Encanto', 'Spider-Man: No Way Home', "Harry Potter and the Sorcerer's Stone" ];

selectedMovieToWatch(data: string) {
 
  debugger;
  alert(data);
}

}
