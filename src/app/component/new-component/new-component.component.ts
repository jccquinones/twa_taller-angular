import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})

export class NewComponentComponent implements OnInit {

  color: string;
  opciones = [
    { name: 'NADA', color: ''},
    { name: 'Primary', color: 'primary'},
    { name: 'Accent', color: 'accent'},
    { name: 'Warn', color: 'warn'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
