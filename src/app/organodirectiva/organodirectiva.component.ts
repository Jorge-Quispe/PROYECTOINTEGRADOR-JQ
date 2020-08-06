import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-organodirectiva',
  templateUrl: './organodirectiva.component.html',
  styleUrls: ['./organodirectiva.component.css']
})
export class OrganodirectivaComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
    subirdocumentos(){
      this.router.navigate(['/subirdocumentos'])
    }
}
