import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
 volverAHome(){
  this.router.navigateByUrl('/infopacientes')
 }
}
