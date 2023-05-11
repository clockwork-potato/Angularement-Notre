import { Component, OnInit } from '@angular/core';
import { BouffeService } from '../truc/bouffe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  meal: any;
  title: string = 'JvaisTangular';
  name: string = 'tesdt';

  constructor(private BouffeService: BouffeService) { }

  ngOnInit() {
    this.BouffeService.getRandomMeal().subscribe((response: any) => {
      this.meal = response.meals[0];
    });
  }
}
