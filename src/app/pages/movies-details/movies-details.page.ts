import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: '../movies-details/movies-details.page.html',
  styleUrls: ['../movies-details/movies-details.page.scss']
})

export class MoviesDetailsPage implements OnInit {

  information = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.movieService.getDetails(id).subscribe(res => {
      console.log('details: ', res);
      this.information = res;
    });
  }

  openWebsite() {
    window.open(this.information.Website, '_blank');
  }
}
