import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datosorganizacion',
  templateUrl: './datosorganizacion.component.html',
  styleUrls: ['./datosorganizacion.component.css']
})
export class DatosorganizacionComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  datosorg(){
  this.router.navigate(['/organodirectiva'])
}
}
