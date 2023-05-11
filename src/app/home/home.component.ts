import { Component, OnInit } from '@angular/core';
import { BouffeService } from '../truc/bouffe.service';

interface Meal {
  strMealThumb: string;
  strCategory: string;
  strMeal: string;
  strInstructions: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  meal?: Meal = {
    strMealThumb: '',
    strCategory: '',
    strMeal: '',
    strInstructions: ''
  };
  title: string = 'Angularement Votre';
  name: string = 'tesdt';

  constructor(private BouffeService: BouffeService) { }

  ngOnInit() {
    this.BouffeService.getRandomMeal().subscribe((r: any) => {
      this.meal = r.meals[0];
    });
  }
}
