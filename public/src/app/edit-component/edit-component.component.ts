import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.css']
})
export class EditComponentComponent implements OnInit {
  constructor(private _httpService: HttpService, private _route: ActivatedRoute,
              private _router: Router, private _location: Location) { }
  author: any = {
    name : ''
  };

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.getAuthorById(params.id);
      console.log(params.id);
  });
  }

  getAuthorById(id: any) {
    const obser = this._httpService.getAuthor(id);
    obser.subscribe( data => {
      console.log(data);
      this.author = data[0];
    });
  }

  editAuthorById() {
    const obser = this._httpService.updateAuthor(this.author._id, this.author);
    obser.subscribe( data => {
      console.log(data);
      this._router.navigate(['/home']);
    });
  }
}
