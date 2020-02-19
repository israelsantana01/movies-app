import { SearchType, MovieService } from './../../services/movie.service';
import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: '../movies/movies.page.html',
  styleUrls: ['../movies/movies.page.scss']
})

export class MoviesPage implements OnInit {
  
  results: Observable<any>;
  searchTerm = '';
  type: SearchType = SearchType.all;

  constructor(
    private movieService: MovieService
  ) {}
  
  ngOnInit() {
  }

  searchChanged() {
    this.results = this.movieService.searchData(this.searchTerm, this.type);


    // this.results.subscribe(response => {
    //   //in here 
    // });
  }
}