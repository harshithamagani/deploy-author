import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-add-component',
  templateUrl: './add-component.component.html',
  styleUrls: ['./add-component.component.css']
})
export class AddComponentComponent implements OnInit {
  author: any = {
    name: '',
  };
  constructor(private _httpService: HttpService, private _route: ActivatedRoute,
              private _router: Router, private _location: Location) { }

  ngOnInit() {
  }

  addAuthors() {
    const obser = this._httpService.addAuthor(this.author);
    obser.subscribe( data => {
      console.log('Created new Authors:', data);
      this._router.navigate(['/home']);
    });
  }

  backClicked() {
    this._location.back();
  }
}
