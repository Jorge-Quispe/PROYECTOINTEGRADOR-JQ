import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
guardado(){
  this.router.navigate(['/datosorganizacion'])
}
}
