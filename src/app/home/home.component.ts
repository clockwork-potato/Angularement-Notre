import { Component, OnInit } from '@angular/core';
import { BouffeService } from '../truc/bouffe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  meal: object = {};
  title: string = 'Angularement Votre';
  name: string = 'tesdt';

  constructor(private BouffeService: BouffeService) { }

  ngOnInit() {
    this.BouffeService.getRandomMeal().subscribe((r: any) => {
      this.meal = r.meals;
    });
  }
}
