import { Component } from '@angular/core';
import {NewServiceService} from './service/new-service.service';
import {s} from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mi primer taller en Angular';
  constructor(private newServicio: NewServiceService) {
    this.newServicio.getObjetos().subscribe(
      response => {
        console.log(response);
      }
    );
  }
}
