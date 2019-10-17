import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  authors: any = [];
  constructor(private _httpService: HttpService, private _route: ActivatedRoute,
              private _router: Router) { }

  ngOnInit() {
    this.getAllAuthors();
    this._route.params.subscribe((params: Params) => {
      console.log(params.id);
  });
  }

  getAllAuthors() {
    const obser = this._httpService.getAuthors();
    obser.subscribe(data => {
      console.log('Get authors:', this.authors);
      this.authors = data;
    });
  }

  removeAuthor(id: any ) {
    const obser = this._httpService.deleteAuthor(id);
    obser.subscribe(data => {
      console.log('Remove author', data);
      this.getAllAuthors();
    });
  }
}
