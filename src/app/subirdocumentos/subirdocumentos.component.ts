import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subirdocumentos',
  templateUrl: './subirdocumentos.component.html',
  styleUrls: ['./subirdocumentos.component.css']
})
export class SubirdocumentosComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  finalizar(){
    this.router.navigate([''])
  }
}
